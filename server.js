let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');
let config = "mongodb://localhost:27017/employees";
mongoose.connect(config)
    .connection
        .on('connected',function(){
            console.log("successfully connected to "+ config)
        })
        .on('error',function(err){
            console.log("database error "+ err)
        })
let app = express();
let port = 3000 ;
app.get('/', function(req, res){
    res.send("Hello from sikandar...");
});
let router = require('./routes');
//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/employees', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})
