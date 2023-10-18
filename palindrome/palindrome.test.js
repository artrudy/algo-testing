const palindrome = require("./palindrome");

describe("palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });
  it("should return boolean", () => {
    expect(typeof palindrome("ello")).toEqual("boolean");
  });

  it("should return true if string is palindrome", () => {
    expect(palindrome("rotator")).toBeTruthy();
    expect(palindrome("kayak")).toBeTruthy();
  });

  it("should return true if string is palindrome", () => {
    expect(palindrome("hello")).toBeFalsy();
    expect(palindrome("world")).toBeFalsy();
    expect(palindrome("rainbow")).toBeFalsy();
  });

  it("should return false is string has spaces", () => {
    expect(palindrome("hello world")).toBeFalsy();
    expect(palindrome(" world")).toBeFalsy();
  });
});
