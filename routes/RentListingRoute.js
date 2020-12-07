const express = require('express');

const buyListingRouter = express.Router();


buyListingRouter.get('/rent', (req, res, next) => {
    res.end('<h1>hello world</h1>')
})

module.exports = buyListingRouter