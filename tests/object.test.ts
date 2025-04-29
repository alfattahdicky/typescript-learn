describe("Object Type", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string } = {
      id: "123",
      name: "Dicky AL Fattha",
    };

    console.info(person);

    person.id = "35";
    person.name = "Azka";

    console.info(person);
  });
});
