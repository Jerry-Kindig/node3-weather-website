// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamVycnlraW5kaWcxIiwiYSI6ImNrNWhpZzUycDA0NGozbG1zMXRhOWZtOTEifQ.-gDUWPG_VdZk2f8MdoCjYA&limit=1'

//     request({url: url, json: true}, (error, response) => {
//         if(error){
//             callback('Unable to connect to location services!')
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search')
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode

const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/08ee15761adcaf532addc321fb095101/' + lat + ',' + long

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!')
        } else if (body.error) {
            callback('Unable to find location. Try another search')
        } else {
            callback(undefined, 
                body.daily.data[0].summary +
                ' It is currently ' +
                body.currently.temperature +
                ' degrees F out. There is a ' +
                body.currently.precipProbability +
                '% chance of rain. Winds of up to ' +
                body.currently.windGust + 'mph.')
        }
    })
}

module.exports = forecast