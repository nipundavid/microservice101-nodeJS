const express = require("express");
const app = express();

cors = require("cors");
const port = 5003;

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/test", (req, res) => {
  res.status(200).json({ message: "NOTIFICATION-SERVICE-2 is up and running" });
});

app.post("/", (req, res) => {
  // console.log(req.body);
  return res.status(200).json({
    message_from_notification_service_2: `${req.body.title} -> buy request received on NOTIFICATION-SERVICE-2`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
