const request = require('request') // load the request module from package json

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5db9d06b9599615eaaea970ef52430f4&query=' + latitude + ',' + longitude + '&units=f'
  
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('No internet connection', undefined)
        } else if (response.body.error) {
            callback('Bad URL', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
  }
  

module.exports = forecast // export danteforecast function

//const weatherurl =  'http://api.weatherstack.com/current?access_key=5db9d06b9599615eaaea970ef52430f4&query=%2037.8267,-122.4233&units=f'
