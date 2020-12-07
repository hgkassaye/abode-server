const express = require('express');
const { get } = require('./RentListingRoute');

const Listing = require('../models/Listing')

const buyListingRouter = express.Router()


buyListingRouter.route('/buy')
.get((req, res, next) => {
    Listing.find({ "transactiontype": "buy"})
    .then(listings => {
        res.statusCode = 200,
        res.setHeader('Content-Type', 'application/json'),
        res.json(listings)
    })
    .catch(err => next(err))
})

module.exports = buyListingRouter