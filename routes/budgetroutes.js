const express = require("express");
const router = express.Router();
const Expense = require("../models/BudgetExpense");



router.post("/addBudget", (req, res) => {
  const expense = new Expense({
    title: req.body.title,
    budget: req.body.budget,
    color: req.body.color,
  });
 expense.save().then((data) => {
    if (!data) {
      return res.status(400).json({
        errors: err,
      });
    }
    return res.json(data);
  });
});


router.get("/allBudgets", (req, res) => {
  Expense.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        errors: err,
      });
    }
    return res.json(data);
  });
});

module.exports = router;