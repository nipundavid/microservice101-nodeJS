const express = require("express");
const app = express();
const productData = require("./product-data.json");
cors = require("cors");
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.json(productData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
