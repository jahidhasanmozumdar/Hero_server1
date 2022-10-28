const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


const Port = process.env.PORT || 5000;

const productsCollection = require("./Data/course.json");

app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/course",  (req, res) => {
    const result =  productsCollection;
    res.send(result);
  });

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const getSingleItem = productsCollection?.find((p) => p.id == id);
  if (!getSingleItem) {
    res.send("Course is not available");
  }
  res.send(getSingleItem);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});

// module.exports = app;
