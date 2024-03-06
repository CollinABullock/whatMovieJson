const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const netflixData = require("./netflixArray.json")
const maxData = require("./maxArray.json")

app.get("/", (req, res) => {
  res.send ("Movies are gay")
})

app.get("/netflixArray", (req, res) => {
  res.send (netflixData)
})

app.get("/maxArray", (req, res) => {
  res.send (maxData)
})

app.listen(port, () => {
  console.log(`We're all listening on port ${3000} and you are gay but also you're cool and smart and will achieve great things`);
})