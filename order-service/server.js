const express = require("express");
const app = express();

cors = require("cors");
const port = 5001;

app.use(cors());
app.use(express.json({ extended: false }));

app.post("/", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: `${req.body.title} -> buy request received on ORDER-SERVICE`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
