
# ./twitter-openapi/.venv/Scripts/Activate.ps1
# Start-Process -FilePath "python" -ArgumentList "tools/build.py" -WorkingDirectory "twitter-openapi" -Wait -NoNewWindow

tools/win/clean.ps1
java -jar tools/openapi-generator-cli.jar generate -g typescript-fetch -c tools/openapi-generator-config.yaml --git-repo-id twitter-openapi-typescript --git-user-id fa0311
python tools/win/replace.py
npm run build
npm install