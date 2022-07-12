const express = require("express");
const app = express();
const fs = require("fs");
app.get("/", (req, res) => {
  const htmlString = fs.readFileSync("./index.html", "utf8");
  res.send(htmlString);
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
