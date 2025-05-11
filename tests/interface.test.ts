import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "John",
      nib: "12324532532",
      npwp: "4326234235",
    };

    seller.name = "Doe";
    // seller.nib = '3245324'; // Error: Cannot Assign NIB because it is readonly

    console.info(seller);
  });

  it("should support function interface", function () {
    interface AddFunction {
      (a: number, b: number): number;
    }

    const add: AddFunction = (a: number, b: number): number => {
      return a + b;
    };

    expect(add(2, 2)).toBe(4);
  });
  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Jonh", "Doe", "Smith"];

    console.info(names);
  });
  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "John",
      address: "Indonesia",
    };

    expect(dictionary.name).toBe("John");
    expect(dictionary.address).toBe("Indonesia");
  });
});
