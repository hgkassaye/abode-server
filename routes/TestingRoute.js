const express = require('express');
const { get } = require('./RentListingRoute');

const Listing = require('../models/Listing')

const testRouter = express.Router()


testRouter.route('/all')
.get((req, res, next) => {
    Listing.find()
    .then(listings => {
        res.statusCode = 200,
        res.setHeader('Content-Type', 'application/json'),
        res.json(listings)
    })
    .catch(err => next(err))
})

module.exports = testRouter
