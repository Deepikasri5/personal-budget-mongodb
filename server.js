const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
var budgetData = fs.readFileSync("budget.json", "utf-8");
var budgetjson = JSON.parse(budgetData);

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 25
    },
    {
        title: 'rent',
        budget: 375
    },
    {
        title:'Grocery',
        budget: 110
    },
]
};


app.get('/hello', (req,res) => {
    res.send('Hello world!');
});

app.get('/budget', (req, res) => {
    res.json(budgetjson);
});


app.listen(port, () => {
console.log('serving at : ',port);
});