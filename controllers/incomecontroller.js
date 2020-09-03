const express = require('express');

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
