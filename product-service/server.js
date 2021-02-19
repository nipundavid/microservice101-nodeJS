const express = require("express");
const axios = require("axios");
const app = express();
const productData = require("./product-data.json");
const cors = require("cors");
const port = 5000;
var gRPC_Client = require("./gRPC_Client.js");

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json(productData);
});

app.get("/test", (req, res) => {
  res.status(200).json({ message: "PRODUCT-SERVICE is up and running" });
});

app.post("/", async (req, res) => {
  try {
    console.log(
      `PRODUCT-SERVICE -> Order received on API Server: ${req.body.title}`
    );
    // create gRPC call on product service
    gRPC_Client.main(req.body);

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
