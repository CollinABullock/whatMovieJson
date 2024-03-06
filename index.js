const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid"); // Import the uuid package to generate unique IDs

app.use(bodyParser.json());

let port = process.env.PORT || 3000;
let importData = []; // Define an array to store the posted data

const netflixData = require("./netflixArray.json");
const maxData = require("./maxArray.json");
const primeData = require("./primeArray.json");
const huluData = require("./huluArray.json");
const peacockData = require("./peacockArray.json");

app.get("/", (req, res) => {
  res.send("Movies are gay");
});

app.get("/netflixArray", (req, res) => {
  res.send(netflixData);
});

app.post("/netflixArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Push the new item into the importData array
  importData.push(newItem);

  // Update the netflixData array with the new item
  netflixData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/maxArray", (req, res) => {
  res.send(maxData);
});

app.get("/primeArray", (req, res) => {
  res.send(primeData);
});

app.get("/huluArray", (req, res) => {
  res.send(huluData);
});

app.get("/peacockArray", (req, res) => {
  res.send(peacockData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
