const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
var budgetData = fs.readFileSync("budget.json", "utf-8");
var budgetjson = JSON.parse(budgetData);

app.use('/', express.static('public'));


app.get('/budget', (req, res) => {
    res.json(budgetjson);
});


app.listen(port, () => {
console.log(`Server Running on Port: http://localhost:${port}`);
});