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
});
