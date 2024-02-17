import sys
from typing import Union


def fizzbuzz(n: int) -> Union[None, str, int]:
    if n % 15 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    else:
        return n


if __name__ == "__main__":
    for i in range(1, int(sys.argv[1]) + 1):
        print(fizzbuzz(i))
