import { fileURLToPath } from "url";
import { dirname } from "path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
    this.idAuto = 1;
    this.path = "./products.json";
  }

  async getProducts() {
    const products = await fs.promises.readFile(this.path, "utf-8");
    return JSON.parse(products);
  }
  async addProducts(name, price, description, thumbnail, code, stock) {
    try {
      const found = this.products.find((product) => product.code === code);
      if (found) {
        return "el producto existe";
      }
      if (name && price && description && thumbnail && code && stock) {
        this.products.push({
          name: name,
          price: price,
          description: description,
          thumbnail: thumbnail,
          code: code,
          stock: stock,
          id: this.idAuto,
        });
        this.idAuto + 1;
        await fs.promises.writeFile(this.path, JSON.stringify(this.products));
        return "se agrego el producto";
      }
    } catch (error) {
      return "error al cargar el producto";
    }
  }

  async getProductsById(id) {
    try {
      const found = this.products.find((product) => product.id === id);
      if (found) {
        return found;
      }
    } catch (error) {
      return "no se encontro el producto";
    }
  }

  async deleteProduct(id) {
    try {
      const deleter = this.products.find((product) => product.id === id);
      if (deleter) {
        splice();
      }
    } catch (error) {
      return "no se pudo eliminar el producto";
    }
  }
  async updateProduct() {}
}

const productManager = new ProductManager();

productManager.addProducts("airforce", 250, "none", "none", 145, 2);
productManager.addProducts("nike", 260, "none", "none", 162, 1);
productManager.getProducts();
productManager.getProductsById(1);
productManager.deleteProduct(1);
console.log(productManager);
