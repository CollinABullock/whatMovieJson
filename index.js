const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send ("Movies are gay")
})

app.listen(port, () => {
  console.log(`We're all listening on port ${3000} and you are gay but also you're cool and smart and will achieve great things`);
})