const express = require("express");
const axios = require("axios");
const app = express();

cors = require("cors");
const port = 5001;

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/test", (req, res) => {
  res.status(200).json({ message: "ORDER-SERVICE is up and running" });
});

app.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    resFromNotificationService1 = await axios.post(
      "http://localhost:5002/",
      req.body
    );
    resFromNotificationService2 = await axios.post(
      "http://localhost:5003/",
      req.body
    );

    return res.status(200).json({
      message_from_product_service: `${req.body.title} -> buy request received on ORDER-SERVICE`,
      message_from_notification_service_1: `${resFromNotificationService1.data.message_from_notification_service_1}`,
      message_from_notification_service_2: `${resFromNotificationService2.data.message_from_notification_service_2}`,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("server error");
  }

  // console.log(req.body);

  // return res.status(200).json({
  //   message: `${req.body.title} -> buy request received on ORDER-SERVICE`,
  // });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
