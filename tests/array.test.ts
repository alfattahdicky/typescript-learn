describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["boni", "budi", "rahmat"];
    const nums: number[] = [0, 3, 4];

    console.info(names);
    console.info(nums);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["menulis", "membaca"];

    console.log(hobbies);

    // hobbies[0] = "main game";
  });
  it("should support tuple array", function () {
    const person: readonly [string, string, number] = ["dicky", "alfattah", 10];

    console.info(person[0]);

    // person[0] = 'test';
  });
});
