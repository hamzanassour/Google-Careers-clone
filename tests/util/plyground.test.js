import { evenOrOdd } from "@/playground";

describe("basic test ", () => {
  it("adds two numbers", () => {
    // test here
    // here your expectation
    expect(1 + 1).toEqual(2);
    expect(2 + 2).toBe(4);
  });
  it("multiply two numbers", () => {
    // test here
    // here your expectation
    expect(1 * 1).toEqual(1);
    expect(2 * 2).toBe(4);
  });
});

describe("even or odd ", () => {
  it("should be even ", () => {
    expect(evenOrOdd(2)).toBe("even");
  });
  it("should be odd  ", () => {
    expect(evenOrOdd(3)).toBe("odd");
  });
});
