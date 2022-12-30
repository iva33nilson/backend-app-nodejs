const express = require('express');
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./src/routes/routesAdmin');

const mongoose = require('mongoose');
require('dotenv').config();

const port = 3000

const path = require('path');

//Configurações
    //Mongoose
    const dbName = process.env.DB_NAME;
    const dbHost = process.env.DB_HOST;
    main().then(() =>{
            console.log('Connected to Mongoose');
        }).catch((err) =>{
            console.log('Ocorreu erros: '+err);
        });
    async function main() {
        await mongoose.connect(`${dbHost}/${dbName}`,{
        });
    }

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