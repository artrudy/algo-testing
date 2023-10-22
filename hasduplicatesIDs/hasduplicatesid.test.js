const hasDuplicatesIds = require("./hasduplicatesid");

describe("DOM Three has dublicates IDs", () => {
  let root;
  beforeEach(() => {
    root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);
  });

  afterEach(() => {
    root = null;
  });

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
    root.id = "root";
    root.children[0].id = "child";
    root.children[1].id = "child";

    const result = hasDuplicatesIds(root);

    expect(result).toEqual(true);
  });

  it("should return false if there are no duplicate IDs", () => {
    root.id = "root";
    root.children[0].id = "child1";
    root.children[1].id = "child2";

    const result = hasDuplicatesIds(root);

    expect(result).toEqual(false);
  });
});
