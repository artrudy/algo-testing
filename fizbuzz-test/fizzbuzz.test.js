const fizzBuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("should be a function ", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });

  it("should return number the number if not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(8)).toEqual(8);
    expect(fizzBuzz(11)).toEqual(11);
  });

  it("should return Fizz if number divisible by 3", () => {
    expect(fizzBuzz(9)).toEqual("Fizz");
    expect(fizzBuzz(6)).toEqual("Fizz");
    expect(fizzBuzz(12)).toEqual("Fizz");
  });

  it("should return Buzz if number divisible by 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(10)).toEqual("Buzz");
    expect(fizzBuzz(55)).toEqual("Buzz");
  });

  it("should return FizzBuzz if number divisible by 3&5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(60)).toEqual("FizzBuzz");
  });
});
