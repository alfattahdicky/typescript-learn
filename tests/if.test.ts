describe("IF Statement", function () {
  it("should support in typescript", function () {
    const examValue = 90;

    if (examValue > 80) {
      console.info("This is good");
    } else if (examValue > 60) {
      console.info("this not good");
    } else {
      console.info("this bad");
    }
  });

  it("should support ternary operator", function () {
    const value = 30;

    const say = value > 20 ? "Congratulations" : "Try Again";

    console.info(say);
  });
  it("should support switch statement", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "dicky":
          return "Hello Dicky";
        case "azka":
          return "Hello Azka";
        default:
          return "hi";
      }
    }

    console.info(sayHello("dicky"));
    console.info(sayHello("azka"));
    console.info(sayHello("faiz"));
  });
});
