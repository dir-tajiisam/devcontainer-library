from src.sample import fizzbuzz


def test_fizzbuzz() -> None:
    assert fizzbuzz(1) == 1
    assert fizzbuzz(2) == 2
    assert fizzbuzz(3) == "Fizz"
