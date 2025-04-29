describe("Any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Dicky",
      isVip: true,
    };

    person.isVip = false;

    console.info(person);
  });
});
