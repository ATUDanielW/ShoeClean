const express = require('express')
const app = express()
const port = 4000

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//cors
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve the static files from the Shoe app
//build project
const path = require('path');
app.use(express.static(path.join(__dirname, '../build'))); //build location
app.use('/static', express.static(path.join(__dirname, 'build//static')));

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.oiviaxb.mongodb.net/?retryWrites=true&w=majority'); //Database connection. Asychronous call
}


//defines user schemas
const UserSchema = new mongoose.Schema({
  signupUsername: String,
  signupEmail: String,
  signupPassword: String,
});

const UserModel = mongoose.model('users', UserSchema); //UserModel allow interaction with database.

// will create new documents in the users collections 
app.post('/api/users', (req, res) => {
  console.log(req.body);
  //create records in database
  UserModel.create({
    signupUsername: req.body.signupUsername,
    signupEmail: req.body.signupEmail,
    signupPassword: req.body.signupPassword,
  }).then(()=>{res.status(201).send('Data received');}) //successful requset with response
  .catch((error)=>{res.status(500).send(error)}) //catch error
  //res.send('Data received');
})

//retrieve documents from the users collections.
app.get('/api/users', (req, res) => {
  UserModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while fetching books');
    });
});

//boot schema
const bootSchema = new mongoose.Schema({
  pid: Number,
  productName: String,
  price: Number,
  productImage: String,
});

const bootModel = mongoose.model('boots', bootSchema);

app.get('/api/boots', (req, res) => {
  bootModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while fetching books');
    });
});

// Handles any requests that don't match the ones above
//For all the routes not specified above, send back a file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

//listen to port 4000
app.listen(port, () => {
  console.log(`Server listening on port 4000`)
})