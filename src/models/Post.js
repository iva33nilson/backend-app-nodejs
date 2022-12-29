const conectDB = require('./conectDb');

const Post = conectDB.sequelize.define('postagens',{
  titulo:{
    type: conectDB.Sequelize.STRING
  },
  conteudo: {
    type: conectDB.Sequelize.TEXT
  }
})

//Post.sync({force: true})
module.exports = Post