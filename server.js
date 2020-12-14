const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const BuyListingRoute = require('./routes/BuyListingRoute');
const RentListingRoute = require('./routes/RentListingRoute');
const AddListingRoute = require('./routes/AddListingRoute');
const AddListingRouter = require('./routes/AddListingRoute');
const TestingRouter = require('./routes/TestingRoute');

const hostname = 'localhost';
const port = 5000;


const url = 'mongodb://localhost:27017/abode';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'), err => console.log(err));

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.use(RentListingRoute);
app.use(BuyListingRoute);
app.use(AddListingRouter);
app.use(TestingRouter);

app.listen(port, hostname);