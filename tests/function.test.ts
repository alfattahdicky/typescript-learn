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
  it("should support default value", function () {
    function sayHello(name: string = "Budi"): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Doe")).toBe("Hello Doe");
    expect(sayHello()).toBe("Hello Budi");
  });
  it("should support rest parameter", function () {
    function sum(...numbers: number[]): number {
      let total = 0;
      for (const number of numbers) {
        total += number;
      }

      return total;
    }

    expect(sum(1, 2, 4, 5)).toBe(12);
  });
  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("Dicky")).toBe("Hello Dicky");
    expect(sayHello("Dicky", "Al Fattah")).toBe("Hello Dicky Al Fattah");
  });
  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "number") {
        return value * 10;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      }
    }

    expect(callMe(2)).toBe(20);
    expect(callMe("dicky")).toBe("DICKY");
  });
  it("should support function as parameter", function () {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("dicky", toUpper)).toBe("Hello DICKY");
    // Anonymous Function
    expect(
      sayHello("dicky", function (name: string): string {
        return name.toUpperCase();
      }),
    ).toBe("Hello DICKY");

    // Anonymous Arrow Function
    expect(
      sayHello("dicky", (name: string): string => name.toUpperCase()),
    ).toBe("Hello DICKY");
  });
});
