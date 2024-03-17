const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const uuid = require("uuid"); // Import the uuid package to generate unique IDs

const corsOptions = {
  origin: "https://chooseamoviealready.netlify.app/" 
};

app.use(cors(corsOptions));


app.use(bodyParser.json());

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

// Function to find an item by title in the netflixData array
const getNetflixItemByTitle = (title) => {
  return netflixData.find(item => item.title === title);
};

app.get("/netflixArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getNetflixItemByTitle(title);

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

// Function to find an item by title in the primeData array
const getMaxItemByTitle = (title) => {
  return maxData.find(item => item.title === title);
};

app.get("/maxArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getMaxItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
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

app.get("/disneyArray", (req, res) => {
  res.send(disneyData);
});

// Function to find an item by title in the primeData array
const getDisneyItemByTitle = (title) => {
  return disneyData.find(item => item.title === title);
};

app.get("/disneyArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getDisneyItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
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

app.get("/primeArray", (req, res) => {
  res.send(primeData);
});

// Function to find an item by title in the primeData array
const getPrimeItemByTitle = (title) => {
  return primeData.find(item => item.title === title);
};

app.get("/primeArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getPrimeItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
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

// Function to find an item by title in the huluData array
const getHuluItemByTitle = (title) => {
  return huluData.find(item => item.title === title);
};

app.get("/huluArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getHuluItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
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

// Function to find an item by title in the peacockData array
const getPeacockItemByTitle = (title) => {
  return peacockData.find(item => item.title === title);
};

app.get("/peacockArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getPeacockItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
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

// PATCH route to update items in the Peacock array
app.patch("/peacockArray/title/:title", (req, res) => {
  const title = req.params.title;
  const updatedFields = req.body; // Assuming all updated fields are provided in the request body

  // Find the item in the Netflix array by ID
  const itemToUpdate = peacockData.find(item => item.title === title);

  // If the item is not found, return a 404 error
  if (!itemToUpdate) {
    return res.status(404).json({ message: "Item not found" });
  }

  // Update each key-value pair provided in the request body
  Object.keys(updatedFields).forEach(key => {
    if (key !== 'id') { // Assuming 'id' is not updatable
      itemToUpdate[key] = updatedFields[key];
    }
  });

  // Send a response indicating success
  res.status(200).json({ message: "Item updated successfully", updatedItem: itemToUpdate });
});

app.get("/paramountArray", (req, res) => {
  res.send(paramountData)
})

// Function to find an item by title in the primeData array
const getParamountItemByTitle = (title) => {
  return paramountData.find(item => item.title === title);
};

app.get("/paramountArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getParamountItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

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

// Function to find an item by title in the primeData array
const getCriterionItemByTitle = (title) => {
  return criterionData.find(item => item.title === title);
};

app.get("/criterionArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getCriterionItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

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

// Function to find an item by title in the primeData array
const getTubiItemByTitle = (title) => {
  return tubiData.find(item => item.title === title);
};

app.get("/tubiArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getTubiItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

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

// Function to find an item by title in the primeData array
const getAppleItemByTitle = (title) => {
  return appleData.find(item => item.title === title);
};

app.get("/appleArray/title/:title", (req, res) => {
  const title = req.params.title;
  const item = getAppleItemByTitle(title);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

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
