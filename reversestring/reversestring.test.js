const reverseString = require("./reversestring");

describe("Reverse string ", () => {
  it("should be a function ", () => {
    expect(typeof reverseString).toEqual("function");
  });

  it("should return a string", () => {
    expect(typeof reverseString("hello")).toEqual("string");
  });

  it("should return the reversed string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("nothern")).toEqual("nrehton");
    expect(reverseString("anna")).toEqual("anna");
    expect(reverseString("anna")).toEqual("anna");
    expect(reverseString("good morning")).toEqual("gninrom doog");
  });
});
