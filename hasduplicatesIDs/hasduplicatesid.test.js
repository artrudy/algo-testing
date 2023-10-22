const hasDuplicatesIds = require("./hasduplicatesid");

describe("DOM Three has dublicates IDs", () => {
  it("should be a function", () => {
    expect(typeof hasDuplicatesIds).toEqual("function");
  });
  it("should return boolean", () => {
    expect(typeof hasDuplicatesIds()).toEqual("boolean");
  });
  it("should return false if no root", () => {
    expect(hasDuplicatesIds()).toBeFalsy();
  });

  it("should return true if there are duplicate IDs", () => {
    const root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);

    root.id = "root";
    child1.id = "child";
    child2.id = "child";

    const result = hasDuplicatesIds(root);

    expect(result).toEqual(true);
  });

  it("should return false if there are no duplicate IDs", () => {
    const root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);

    root.id = "root";
    child1.id = "child1";
    child2.id = "child2";

    const result = hasDuplicatesIds(root);

    expect(result).toEqual(false);
  });
});
