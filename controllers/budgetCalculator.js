// const express = require('express');

// const router = express.Router();

// const db = require('../models');
// const { sequelize } = require('../models');

// router.get('/api/expenses', (req, res) => {
//   db.expense.findAll({
//     include: {
//       where: {
//         UserId: req.user.id,
//       },
//     },
//     attributes: [
//       'ExpenseCategoryId',
//       [sequelize.fn('sum', sequelize.col('total')), 'totalExpenses'],
//     ],
//     group: ['id'],
//   }).then((totalExpenses) => {
//     res.json(totalExpenses);
//   });
// });
