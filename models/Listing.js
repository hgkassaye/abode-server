const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    address: {
        type: String,
        required: true
    }, 
    price: {
        type: Number, 
        requried: true, 
    },
    transactiontype: {
        type: String, 
        required: true
    }
})


const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing