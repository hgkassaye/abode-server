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
    }],
    location: {
        lat: { type: Number, required: false},
        lng: { type: Number, required: false}
    }
})


const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing