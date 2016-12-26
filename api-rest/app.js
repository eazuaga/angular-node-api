var express = require("express"),
    cors = require('cors') , 
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) { 
    var json = { name :"ed" , dni :"30103343" , surname : "asdas"} 
   res.send(json);
});

app.use(router);

app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});