const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const netflixData = require("./netflixArray.json")
const maxData = require("./maxArray.json")
const primeData = require("./primeArray.json")
const huluData = require("./huluArray.json")
const peacockData = require("./peacockArray.json")

app.get("/", (req, res) => {
  res.send ("Movies are gay")
})

app.get("/netflixArray", (req, res) => {
  res.send (netflixData)
})

app.post("/netflixArray", (req, res) => {
  const newItem = req.body;

  netflixData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie", item: newItem });
});

app.get("/maxArray", (req, res) => {
  res.send (maxData)
})

app.get("/primeArray", (req, res) => {
  res.send (primeData)
})

app.get("/huluArray", (req, res) => {
  res.send (huluData)
})

app.get("/peacockArray", (req, res) => {
  res.send (peacockData)
})

app.listen(port, () => {
  console.log(`We're all listening on port ${3000} and you are gay but also you're cool and smart and will achieve great things`);
})