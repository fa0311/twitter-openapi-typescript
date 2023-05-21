import os
import glob
import json
import yaml
import shutil
import copy
import re
from build_config import Config
from hooks import OpenapiHookBase, RequestHookBase, SchemasHookBase
from tqdm import tqdm


print("=== Build Start ===")


config = Config()


try:
    shutil.rmtree("dist")
except:
    pass

for lang, profile in tqdm(config.main().items(), leave=False):
    dist_replace = lambda x: x.replace(
        config.INPUT_DIR, config.OUTPUT_DIR.format(lang), 1
    )

    for dir in glob.glob(os.path.join(config.INPUT_DIR, "**/")):
        os.makedirs(dist_replace(dir), exist_ok=True)

    paths = {}
    files = glob.glob(os.path.join(config.INPUT_DIR, "**/*.yaml"))
    for file in tqdm(files, leave=False):
        file = file.replace(os.path.sep, "/")
        with open(file, mode="r", encoding="utf-8") as f:
            load = yaml.safe_load(f)
        for path in list(load["paths"]):
            for method in list(load["paths"][path]):
                for tag in list(load["paths"][path][method].get("tags", ["default"])):
                    key, value = path, load["paths"][path][method]
                    for hook in profile["request"][tag]:
                        hook: RequestHookBase
                        key, value = hook.hook(key, value)
                    load["paths"][path][method] = value
                    load["paths"][key] = load["paths"].pop(path)

                    escape = key.replace("/", "~1")
                    relative = file.replace(config.INPUT_DIR, "", 1)
                    paths.update({key: {"$ref": f".{relative}#/paths/{escape}"}})
        for name in list(load.get("components", {}).get("schemas", {})):
            value = load["components"]["schemas"][name]
            for hook in profile["schemas"]:
                hook: SchemasHookBase
                value = hook.hook(value)
            load["components"]["schemas"][name] = value
        with open(dist_replace(file), mode="w+", encoding="utf-8") as f:
            f.write(yaml.dump(load))

    file = "src/openapi/openapi-3.0.yaml"
    with open(file, mode="r", encoding="utf-8") as f:
        openapi = yaml.safe_load(f)
    for path in paths:
        openapi["paths"] = paths
    for hook in profile["openapi"]:
        hook: OpenapiHookBase
        openapi = hook.hook(openapi)
    with open(dist_replace(file), mode="w+", encoding="utf-8") as f:
        f.write(yaml.dump(openapi))

print("=== Build End ===")
