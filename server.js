const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const mongoose = require("mongoose");
require("dotenv").config();
const expense = require("./routes/budgetroutes");
let url='mongodb://localhost:27017/expenses';

// Connect to Database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

// Route Middleware
app.use("/budget", expense);

app.listen(port, () => {
console.log(`Server Running on Port: http://localhost:${port}`);
});