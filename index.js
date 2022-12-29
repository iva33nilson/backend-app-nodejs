const express = require('express');
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./src/routes/routesAdmin');
const port = 3000

const path = require('path');

//Configurações
    //Body parsing
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //template Egine
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', './src/views');

    //rotas
    app.use("/admin", admin);

    //public
    app.use(express.static(path.join(__dirname, 'public')));

//servidor port 3000
app.listen(port,() =>{
    console.log(`Server Rodando na porta ${port}`)
});