import Express from "express";
import ProductManager from "./ProductManager";

const app = Express();
const PORT = 8080;
const productManager = new ProductManager("./products.json");

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.get("/products", async (req, res) => {
  try {
    let response = await productManager.getProducts();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log("server is running in port" + PORT);
});
