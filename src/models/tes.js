const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');


let app = express();
let mongoDB = //hiding url for obvious reasons

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const UserSchema = new Schema({
    name: String,
    email: String
  });


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req,res){
   res.render('landingPage');
});

app.post('/', function (req, res) {
    var User= mongoose.model('user', UserSchema);
    User.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    }); 
});

app.listen(3000);