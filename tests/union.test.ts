describe("Union", function () {
  it("should support in typescript", function () {
    let test: number | string | boolean = "test";

    test = 1000;
    console.info(test);
    test = true;
    console.info(test);

    // test = [];
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "number") {
        return value + 2;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      } else {
        return !value;
      }
    }

    expect(process("Dicky")).toBe("DICKY");
    expect(process(2)).toBe(4);
    expect(process(true)).toBe(false);
  });
});
