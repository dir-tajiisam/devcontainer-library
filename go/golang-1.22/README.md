# How To Use

## Hello World

```shell
$ go run src/main.go
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
$ go test -v testing/*
=== RUN   TestFizzbuzz
--- PASS: TestFizzbuzz (0.00s)
=== RUN   ExampleFizzbuzz
--- PASS: ExampleFizzbuzz (0.00s)
PASS
ok      command-line-arguments  0.001s
```

## Build

```shell
$ go build -o bin/main src/main.go
$ ./bin/main
```

## Add/Remove Package

- Add

```shell
$ go get github.com/xxxxx
$ go mod tidy
```

- Remove(このコマンドを実行すると、不要なパッケージが削除される)

```shell
$ go mod tidy
```
