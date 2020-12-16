const express = require('express');

const authenticate = require('../authenticate');
const  Listing = require('../models/Listing');
const fileUpload = require('../middleware/file-upload');
const getCoordinates = require('../util/googleLocation');

const AddListingRouter = express.Router();

AddListingRouter.route('/list') 
.post(authenticate.verifyUser, fileUpload.array('image',4),async(req, res, next) => {
    console.log(req.files)
    const imageFiles = []
    console.log('my length is ', req.files.length)
    for (var i=0; i<req.files.length; i++) {
        imageFiles.push(req.files[i].path)
    }
    console.log('my image file is', imageFiles)
    const { name, price, type} = req.body;
    
    let coordinates;
    try {
        coordinates = await getCoordinates(name)
    } catch(error) {
        return next(error);
    }

    const newListing = new Listing({
        name,
        price,
        type,
        image: imageFiles,
        location: coordinates
    })
    
    // Listing.create(req.body)
    newListing.save()
    .then(listing => {
        console.log(listing);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(listing)
    })
    .catch(err => next(err))
})



module.exports = AddListingRouter