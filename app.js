if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
    require('dotenv').config();
};

//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

//Port
const PORT = process.env.PORT;

//Router
const MainRouter = require('./routes');

//ErrorHandler
const ErrorHandler = require('./middlewares/errHandler');

//MongoDB connecction;

const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Welcome to mongoDB admin backend')
});

//app use
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('combined'));


//Router use;

app.use(MainRouter);

app.use(ErrorHandler);



//app-listen;
app.listen(PORT, () => console.log(`Admin Server started on ${PORT}`));



