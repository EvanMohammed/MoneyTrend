const express = require('express');

const router = express.Router();

const db = require('../models');

router.get('/api/expenses', (req, res) => {
  db.User.findAll({
    where: {
      id: 1,
    },
    include: {
      model: db.ExpenseCategories,
      include: db.Expenses,
    },
  }).then((expenseInfo) => {
    res.json(expenseInfo);
  });
});

module.exports = router;
