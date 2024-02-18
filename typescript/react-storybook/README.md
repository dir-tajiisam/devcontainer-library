# 構築時のメモ

- npm run start時にエラーが出るので、react-refreshを0.11.0に変更
- https://github.com/facebook/create-react-app/issues/11810#issuecomment-1108392202

```sh
# package.json
  "overrides": {
    "react-refresh": "0.11.0"
  }
```