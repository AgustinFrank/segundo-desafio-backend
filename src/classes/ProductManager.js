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
  async addProducts(title, price, description, thumbnail, code, stock) {
    try {
      const found = this.products.find((product) => product.code === code);
      if (found) {
        return "el producto existe";
      }
      if (title && price && description && thumbnail && code && stock) {
        this.products.push({
          title: title,
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

export default productManager;
