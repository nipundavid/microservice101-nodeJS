const express = require("express");
const app = express();

cors = require("cors");
const port = 5001;

app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
