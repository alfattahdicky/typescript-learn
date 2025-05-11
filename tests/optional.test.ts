describe("Optional", function () {
  it("should support in typescript", function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("John");
    const name: string | undefined = undefined;
    sayHello(name);
    // sayHello(null); // Not Assign Type Null in function just has optional (undefined)
    sayHello(null);
  });
});
