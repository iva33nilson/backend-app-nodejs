const mongoose = require('mongoose');
require('dotenv').config();

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
//model username
const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true

  },
  password:{
    type: String,
    required: true
  }
})
//New UserSchema
mongoose.model('Users', UserSchema);

const Victor = mongoose.model('Users', UserSchema);
  new Victor({
    nome: "ivanilson",
    email: "ivanilson1d@test.com",
    password: "123455"
  }).save().catch((err)=> {
    console.log("ocorreu erro ao sava dados" + err)
  })