const express = require('express');
const { QueryTypes } = require('sequelize');

const router = express.Router();

const db = require('../models');

router.get('/api/income', (req, res) => {
  db.User.findAll({
    where: {
      id: req.user.id,
    },
    include: db.Incomes,
  }).then((income) => {
    res.json(income);
  });
});

router.get('/api/income/total', (req, res) => {
  db.sequelize.query(
    `SELECT SUM(total)  AS total FROM incomes
    inner join users on incomes.UserId = users.id
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

router.post('/api/income', (req, res) => {
  req.body.UserId = req.user.id;
  db.Incomes.create(req.body).then((newIncome) => {
    res.json(newIncome);
  });
});

router.delete('/api/income/:id', (req, res) => {
  db.Incomes.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.sendStatus(200);
  });
});
module.exports = router;
