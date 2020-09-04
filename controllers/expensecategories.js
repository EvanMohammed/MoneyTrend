const express = require('express');
// const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

const router = express.Router();

const db = require('../models');

router.get('/api/expenses', (req, res) => {
  db.User.findAll({
    where: {
      id: req.user.id,
    },
    include: {
      model: db.ExpenseCategories,
      include: db.Expenses,
    },
  }).then((expenseInfo) => {
    res.json(expenseInfo);
  });
});

router.get('/api/expenses/total', (req, res) => {
  db.sequelize.query(
    `SELECT SUM(total) AS total FROM Expenses
      INNER JOIN ExpenseCategories on Expenses.ExpenseCategoryId = ExpenseCategories.id 
      WHERE UserId = ?
      ;`,
    {
      replacements: [req.user.id],
      type: QueryTypes.SELECT,
    },
  ).then((data) => {
    res.json(data);
  });
});

router.post('/api/expense-categories/', (req, res) => {
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
