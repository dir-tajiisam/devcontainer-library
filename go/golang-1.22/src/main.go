package main

import (
	"fmt"

	"github.com/dirbato/go-sample/src/util"
)

func main() {
	for i := 1; i <= 10; i++ {
		fmt.Println(util.Fizzbuzz(i))
	}
}
