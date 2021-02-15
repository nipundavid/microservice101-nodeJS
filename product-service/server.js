const express = require("express");
const app = express();
const productData = require("./product-data.json");
cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json(productData);
});

app.post("/", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: `${req.body.title} -> buy request received for on PRODUCT-SERVICE`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
