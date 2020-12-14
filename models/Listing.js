const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    name: {
        type: String,
        // required: true
    }, 
    price: {
        type: String, 
        // requried: true, 
    },
    type: {
        type: String, 
        // required: true
    }, 
    image: [{
        type: String,
    }]
    // image: {
    //     type: String
    // }
})


const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing