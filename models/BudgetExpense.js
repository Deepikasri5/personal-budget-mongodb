const mongoose = require("mongoose");

var lengthValidation = function (minLength, maxLength) {
  minLength = minLength || 0;
  maxLength = maxLength || Infinity;
  return {
    validator: function (value) {
      if (value === undefined) return true;
      return value.length >= minLength && value.length <= maxLength;
    },
    message:
      "Color code should be at least 6 digits"
  };
};

const budgetexpenseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      validate: lengthValidation(6, 7),
      required: true,
    },
  },
  { collection: 'Expense' }
);

module.exports = mongoose.model('Expense', budgetexpenseSchema);