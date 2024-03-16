const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const uuid = require("uuid"); // Import the uuid package to generate unique IDs

app.use(bodyParser.json());
app.use(cors());

let port = process.env.PORT || 3000;

const netflixData = require("./netflixArray.json");
const maxData = require("./maxArray.json");
const primeData = require("./primeArray.json");
const huluData = require("./huluArray.json");
const peacockData = require("./peacockArray.json");
const paramountData = require ("./paramountArray.json")
const criterionData = require ("./criterionArray.json")
const tubiData = require ("./tubiArray.json")
const appleData = require ("./appleArray.json")
const disneyData = require ("./disneyArray.json")

app.get("/", (req, res) => {
  res.send("movies are gay");
});

app.get("/netflixArray", (req, res) => {
  res.send(netflixData);
});

app.get("/netflixArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.post("/netflixArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  netflixData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/maxArray", (req, res) => {
  res.send(maxData);
});

app.get("/disneyArray", (req, res) => {
  res.send(disneyData);
});

app.post("/disneyArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  disneyData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/maxArray", (req, res) => {
  res.send(maxData);
});

app.post("/maxArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  maxData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/primeArray", (req, res) => {
  res.send(primeData);
});

app.post("/primeArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  primeData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/huluArray", (req, res) => {
  res.send(huluData);
});

app.post("/huluArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  huluData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/peacockArray", (req, res) => {
  res.send(peacockData);
});

app.post("/peacockArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  peacockData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/paramountArray", (req, res) => {
  res.send(paramountData)
})

app.post("/paramountArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  paramountData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/criterionArray", (req, res) => {
  res.send(criterionData)
})

app.post("/criterionArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  criterionData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/tubiArray", (req, res) => {
  res.send(tubiData)
})

app.post("/tubiArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  tubiData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.get("/appleArray", (req, res) => {
  res.send(appleData)
})

app.post("/appleArray", (req, res) => {
  const newItem = req.body;

  // Generate a unique item number using UUID
  const newItemNumber = uuid.v4(); // Generate a version 4 UUID

  // Add the generated item number to the newItem object
  newItem.item = newItemNumber;

  // Update the netflixData array with the new item
  appleData.push(newItem);

  // Send a response indicating success
  res.status(201).json({ message: "You just added a movie bucko", item: newItem });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
