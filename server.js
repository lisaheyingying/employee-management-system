let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');
let config = "mongodb://localhost:27017/employees";
mongoose.connect(config)
    .connection
        .on('connected',() => {
            console.log("successfully connected to "+ config)
        })
        .on('error',(err) => {
            console.log("database error "+ err)
        })
let app = express();
let port = 3000 ;
app.get('/', (req, res) => {
    res.send("Hello from sikampret...");
});
let router = require('./routes');
//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/employees', router);
app.listen(port, () => {
    console.log("server is running on port  "+ port);
})
