const axios = require('axios')

const API_KEY = 'AIzaSyBTg5CCt6UbZV0Z2GfRm0F_rR77HjgMIHc'


async function getCoordinates(address) {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`
    )


    const data = response.data;

    if (!data || data.status === 'ZERO_RESULTS') {
        const error = new Error( 'Could not find location for the specified address.',422);
        throw error;
    }

    const coordinates = data.results[0].geometry.location;

    return coordinates;
}

module.exports = getCoordinates; 