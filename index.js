const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const recipes = require("./Data/AllData.json");

// middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("foodfiy is running");
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;

  const selectedRecipe = recipes.find((recipe) => recipe.id == id);
  res.send(selectedRecipe);
});

app.listen(port, () => {
  console.log(`foodiyf is running on port ${port}`);
});
