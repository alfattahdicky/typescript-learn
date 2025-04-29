import { sayHello } from "../src/say-hello";

describe("Hello", function () {
  it("should say hello", function () {
    expect(sayHello("dicky")).toBe("Hello dicky");
  });
});
