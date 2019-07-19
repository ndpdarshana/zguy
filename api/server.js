const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const routes = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use('/zguy', routes);

mongoose.connect('mongodb://127.0.0.1:27017/zguy', {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once('open', function(){
  console.log("MongoDB database connection established");
});

const Schema = mongoose.Schema;

let ObjSchema = new Schema({
  name:{
    type: String
  }
});

let Obj = mongoose.model('Obj', ObjSchema);

routes.route('/').get(function(req, res){
  Obj.find(function(err, objs){
    if(err){
      console.err(err);
    }else{
      res.json(objs);
    }
  })
});

routes.route('/add').post(function(req, res){
  console.log(req.body);
  let obj = new Obj(req.body);
  obj.save().then(obj => {
    res.status(200).json({'obj':'added successfully'});
  }).catch(err => {
    res.status(400).send('There is a error');
  });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
