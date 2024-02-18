package main_test

import (
	"fmt"
	"testing"

	"github.com/dirbato/go-sample/src/util"
)

func TestFizzbuzz(t *testing.T) {
	tests := []struct {
		input    int
		expected string
	}{
		{1, "1"},
		{3, "Fizz"},
		{5, "Buzz"},
		{15, "FizzBuzz"},
	}

	for _, test := range tests {
		if got := util.Fizzbuzz(test.input); got != test.expected {
			t.Errorf("Fizzbuzz(%d) = %q; want %q", test.input, got, test.expected)
		}
	}
}

func ExampleFizzbuzz() {
	fmt.Println(util.Fizzbuzz(1))
	fmt.Println(util.Fizzbuzz(3))
	fmt.Println(util.Fizzbuzz(5))
	fmt.Println(util.Fizzbuzz(15))
	// Output:
	// 1
	// Fizz
	// Buzz
	// FizzBuzz
}
