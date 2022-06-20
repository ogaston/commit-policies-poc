import { invert, stringify } from "./index";

describe("Index functions", () => {
  test("it invert the value", () => {
    expect(invert(true)).toBe(false);
  });
  test("it convert the value to string", () => {
    expect(stringify(1)).toBe("1");
  });
});
