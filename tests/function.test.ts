describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("John")).toBe("Hello John");

    function logHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    logHello("Doe");
  });
});
