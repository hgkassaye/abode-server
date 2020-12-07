const express = require('express');

const buyListingRouter = express.Router()


buyListingRouter.get('/buy', (req, res, next) => {
    res.end('<h1>Buy</h1')
})

module.exports = buyListingRouter