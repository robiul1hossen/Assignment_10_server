const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allData = require("./Data/AllData.json");
const recipes = require("./Data/Recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("foodfiy is running");
});

app.get("/all-data", (req, res) => {
  res.send(allData);
});

app.get("/all-data/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipe = allData.find((recipe) => recipe.id == id);
  res.send(selectedRecipe);
});

app.listen(port, () => {
  console.log(`foodiyf is running on port ${port}`);
});
