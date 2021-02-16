const express = require("express");
const axios = require("axios");
const app = express();
const productData = require("./product-data.json");
const { json } = require("express");
cors = require("cors");
const port = 5000;

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
    resFromOrderService = await axios.post("http://localhost:5001/", req.body);
    return res.status(200).json({
      message_from_product_service: `${req.body.title} -> buy request received on PRODUCT-SERVICE`,
      message_from_order_service: `${resFromOrderService.data.message_from_product_service}`,
      message_from_notification_service_1: `${resFromOrderService.data.message_from_notification_service_1}`,
      message_from_notification_service_2: `${resFromOrderService.data.message_from_notification_service_2}`,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("server error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
