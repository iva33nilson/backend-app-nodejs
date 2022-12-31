const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Categoria');
const Categoria = mongoose.model('Categorias');

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
    var error = []
    if (!req.body.name || typeof req.body.name == undefined || req.body.name == null){
      error.push({texto: "Nome inválido"})

    }
    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
      error.push({texto: "Slug inválido"})

    }
    if(error.length > 0){
      res.render('./category', {error: error})
    }

    const novaCategory = {
      nome: req.body.name,
      slug: req.body.slug
    }
    new Categoria(novaCategory).save().then(() => {
      console.log('Success salvo com sucesso');
    }).catch((err) => {
      console.log('Error ao cadastrado' + err);
    })

    res.redirect("./category");
  });
  
module.exports = router;