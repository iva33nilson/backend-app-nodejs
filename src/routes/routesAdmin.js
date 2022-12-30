const express = require('express');
const router = express.Router();

  //rotas
  router.get('/', (req, res) => {
    res.render("./dashboard/index");
  });

  router.get('/category', (req, res) => {
    res.render("./category/index");
  });

  router.get('/add', (req, res) => {
    res.render("./category/add");
  });

  router.post('/save', (req, res) => {
    res.redirect("./category");
  });
  
module.exports = router;