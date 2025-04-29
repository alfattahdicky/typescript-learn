// Type Alias dapat digunakan untuk union type
export type ID = string | number;

// Type Alias sebagai struktur tipe object
// biasanya digunakan ketika library orang lain yang tidak bisa diubah atau datanya tidak pasti

export type Category = {
  id: ID;
  category: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
};
