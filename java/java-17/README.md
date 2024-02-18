# How To Use

## Hello World

```shell
$ ./gradlew run

> Task :app:run
Hello World!

BUILD SUCCESSFUL in 433ms
2 actionable tasks: 1 executed, 1 up-to-date

```

## Run Test

```shell
$ ./gradlew test
# $ ./gradlew test --tests "jp.co.dirbato.AppTest"

> Task :app:test

jp.co.dirbato.AppTest

  Test appHasAGreeting() PASSED

SUCCESS: Executed 1 tests in 604ms


BUILD SUCCESSFUL in 1s
3 actionable tasks: 1 executed, 2 up-to-date
```

## Build & Run

```shell
$ ./gradlew build
$ java -jar app/build/libs/app.jar
```
