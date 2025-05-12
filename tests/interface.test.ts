import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
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

  it("should support extends interface", function () {
    const employee: Employee = {
      id: 1,
      name: "John Doe",
      division: "Design",
    };

    console.info(employee);

    const manager: Manager = {
      id: 1,
      name: "Budi",
      division: "Engineering",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });
  it("should support function in interface", function () {
    const person: Person = {
      name: "John",
      greet: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    expect(person.greet("Doe")).toBe("Hello Doe, my name is John");
  });
  it("should support intersection types", function () {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: number;
    }

    // Digunakan apabila ada tambahan type
    // interface Person extends HasName, HasId {

    // }

    type Domain = HasName & HasId;

    const domain: Domain = {
      name: "Doe",
      id: 1,
    };

    console.info(domain);
  });

  it("should support type assertion", function () {
    const person: any = {
      name: "Eko",
      age: 30,
    };

    // Harus hati-hati dalam menggunakan type assertion dan pastikan kembali tipe data yang digunakan
    const person2: Person = person as Person;
    // person2.greet("Doe"); // Error karena property greet tidak ada di person

    console.info(person2);
  });
});
