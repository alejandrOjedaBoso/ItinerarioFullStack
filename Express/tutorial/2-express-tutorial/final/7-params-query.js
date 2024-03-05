const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.filter(
    (product) => product.id === parseInt(productID)
  );
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  res.send("Hello Underworld!");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedPorducts = [...products];

  if (search) {
    sortedPorducts = sortedPorducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    sortedPorducts = sortedPorducts.slice(0, parseInt(limit));
  }
  if (sortedPorducts.length < 1) {
    // res.status(200).send("no products mached your search");
    return res.status(200).json({ sucess: true, data: [] });
  }
  return res.status(200).json(sortedPorducts);
});

app.listen(5000, () => {
  console.log("Server is Listenning on port: 5000...");
});
