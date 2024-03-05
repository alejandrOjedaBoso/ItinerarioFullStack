const express = require("express");
const app = express();
const { products } = require("./data.js");
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res
// 1. use vs route
// 2. options- our own / express / thirdparty

// app.use([logger, authorize]);
// app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is Listenning on port: 5000...");
});
