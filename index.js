const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allData = require("./Data/AllData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("foodfiy is running");
});

app.get("/all-data", (req, res) => {
  res.send(allData);
});

app.listen(port, () => {
  console.log(`foodiyf is running on port ${port}`);
});
