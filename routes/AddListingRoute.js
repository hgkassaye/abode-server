const express = require('express');

const  Listing = require('../models/Listing');

const AddListingRouter = express.Router();

AddListingRouter.route('/list') 
.post((req, res, next) => {
    Listing.create(req.body)
    .then(listing => {
        console.log(listing);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(listing)
    })
    .catch(err => next(err))
})



module.exports = AddListingRouter