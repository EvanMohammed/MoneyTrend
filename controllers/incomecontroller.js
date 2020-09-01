const express = require('express');

const router = express.Router();

const db = require('../models');

router.get('/api/income', (req, res) => {
  db.User.findAll({
    where: {
      id: 1,
    },
    include: db.Incomes,
  }).then((income) => {
    res.json(income);
  });
});

module.exports = router;
