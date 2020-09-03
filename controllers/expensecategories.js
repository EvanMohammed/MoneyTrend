const express = require('express');

const router = express.Router();

const db = require('../models');

router.get('/api/expenses', (req, res) => {
  db.User.findAll({
    include: {
      where: {
        UserId: req.user.id,
      },
      model: db.ExpenseCategories,
      include: db.Expenses,
    },
  }).then((expenseInfo) => {
    res.json(expenseInfo);
  });
});

router.post('/api/expense-categories/', (req, res) => {
  console.log(req.body);
  req.body.UserId = req.user.id;
  db.ExpenseCategories.create(req.body).then((newCategory) => {
    res.json(newCategory);
  });
});

router.delete('/api/expense-categories/:id', (req, res) => {
  db.ExpenseCategories.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.sendStatus(200);
  });
});

router.post('/api/expense-items/', (req, res) => {
  db.Expenses.create(req.body).then((newItem) => {
    res.json(newItem);
  });
});

router.delete('/api/expense-items/:id', (req, res) => {
  db.Expenses.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.sendStatus(200);
  });
});
module.exports = router;
