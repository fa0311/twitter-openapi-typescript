
./twitter-openapi/.venv/Scripts/Activate.ps1
Start-Process -FilePath "python" -ArgumentList "tools/build.py" -WorkingDirectory "twitter-openapi" -Wait -NoNewWindow

tools/win/clean.ps1
java -jar tools/openapi-generator-cli.jar generate -g typescript-fetch -c tools/openapi-generator-config.yaml
python tools/win/replace.py
npm install