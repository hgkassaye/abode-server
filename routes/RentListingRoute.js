const express = require('express');

const Listing = require('../models/Listing');

const buyListingRouter = express.Router();


buyListingRouter.route('/rent')
.get((req,res,next) => {
    Listing.find( { "transactiontype": "rent"} ) 
    .then(listings => {
        res.statusCode = 200, 
        res.setHeader('Content-Type', 'application/json'),
        res.json(listings)
    })
    .catch(err => next(err))
})

module.exports = buyListingRouter