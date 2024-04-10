# How To Use

## Hello World

```shell
$ poetry run python src/sample.py 10
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
```

## Run Test

```shell
$ poetry run python -m pytest tests
========================================== test session starts ==========================================
platform linux -- Python 3.12.2, pytest-8.0.1, pluggy-1.4.0
rootdir: /workspaces/devcontainer-library/python/python3.12
configfile: pyproject.toml
plugins: mock-3.12.0, requests-mock-1.11.0
collected 1 item

tests/test_sample.py .                                                                            [100%]

=========================================== 1 passed in 0.01s ===========================================

```

## Add/Remove Package

- pyproject.toml に追加される

```shell
$ poetry add requests
```

- pyproject.toml から削除される

```shell
$ poetry remove requests
```

- 最後に以下を実行する

```shell
$ poetry install
```

# Troubleshooting

## Rebuild した場合に以下のエラーが発生

![alt text](images/image.png)

Reload Window を実行する

![alt text](images/image2.png)

# 構築時のメモ

```shell
$ poetry add requests
$ poetry add --dev pytest pytest-mock requests-mock black pyproject-flake8 mypy
$ poetry install
```
