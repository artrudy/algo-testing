const anagram = require("./anagram");

describe("Anagram", () => {
  it("should be a function", () => {
    expect(typeof anagram).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof anagram("ram", arm)).toEqual("boolean");
  });

  it("should return a true if string is anagram", () => {
    expect(anagram("ram", arm)).toBeTruthy();
  });
  it("should return a true if string is anagram", () => {
    expect(anagram("cinema", iceman)).toBeTruthy();
  });
  it("should return a true if string is anagram", () => {
    expect(anagram("god", dog)).toBeTruthy();
  });

  it("should return a false if string is not anagram", () => {
    expect(anagram("hello", fello)).toBeTruthy();
  });
  it("should return a false if string is not anagram", () => {
    expect(anagram("world", sword)).toBeTruthy();
  });
  it("should return a false if string is not anagram", () => {
    expect(anagram("cost", ghost)).toBeTruthy();
  });
});
