import glob

for file in glob.glob("src/**/*.ts", recursive=True):
    with open(file, mode="r", encoding="utf-8") as f:
        text = f.read()

    text = text.replace("json['typename']", "json['__typename']")
    text = text.replace("json['typename']", "json['__typename']")

    with open(file, mode="w", encoding="utf-8") as f:
        f.write(text)
