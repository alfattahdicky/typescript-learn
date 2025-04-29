import { Category, Product } from "../src/type-alias";

describe("Type Alias", function () {
  it("should support in typescript", function () {
    const category: Category = {
      id: 123,
      category: "Phone",
    };

    const product: Product = {
      id: "52342",
      name: "Samsung S25",
      price: 5000000,
      category,
    };

    // product.description = 'Test'

    console.info(category);
    console.info(product);
  });
});
