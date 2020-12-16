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

buyListingRouter.route('/buy/:listingId')
.get((req, res, next) => {
    Listing.findById(req.params.listingId)
    .then(listing => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(listing)
    })
    .catch(err => next(err))
})

module.exports = buyListingRouter