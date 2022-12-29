const express = require('express');
const router = express.Router();

  //rotas
  router.get('/', (req, res) => {
    res.render("./dashboard/index");
  });

  router.get('/posts', (req, res) => {
    res.send("Posts");
  });

  router.get('/categorias', (req, res) => {
    res.send("Ccategorias");
  });
  
module.exports = router;