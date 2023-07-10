import glob
import json


for file in glob.glob("src/**/*.ts", recursive=True):
    with open(file, mode="r", encoding="utf-8") as f:
        text = f.read()

    # https://github.com/OpenAPITools/openapi-generator/pull/15668
    text = text.replace("json['typename']", "json['__typename']")
    text = text.replace("json['typename']", "json['__typename']")

    with open(file, mode="w", encoding="utf-8") as f:
        f.write(text)


with open(file, mode="r", encoding="utf-8") as f:
    text = f.read()


with open("package.json", mode="r", encoding="utf-8") as f:
    package = json.load(f)

package.update(
    {
        "author": "fa0311",
        "license": "LGPL-3.0-only",
        "repository": {
            "type": "git",
            "url": "https://github.com/fa0311/twitter-openapi-typescript.git",
        },
        "keywords": ["twitter", "api", "typescript", "scraper"],
    }
)


with open("package.json", mode="w", encoding="utf-8") as f:
    json.dump(package, f, ensure_ascii=False, indent=2)


with open("tsconfig.json", mode="r", encoding="utf-8") as f:
    package = json.load(f)
package["compilerOptions"].update(
    {
        "declaration": True,
        "declarationMap": True,
        "sourceMap": True,
    }
)


with open("tsconfig.json", mode="w", encoding="utf-8") as f:
    json.dump(package, f, ensure_ascii=False, indent=2)
