const express = require("express");
const axios = require("axios");
const app = express();
const productData = require("./product-data.json");
cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json(productData);
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    resFromOrderService = await axios.post("http://localhost:5001/", req.body);
    return res.status(200).json({
      message_from_product_service: `${req.body.title} -> buy request received on PRODUCT-SERVICE`,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("server error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
