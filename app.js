const request = require('request') // load in the module request to pull HTML
const geocode = require('./utils/geocode') // pass in the geocdoe file we just make into app.js
const forecast = require('./utils/forecast')

console.log(process.argv)// this is used to find the index of address or Georgia
const address = process.argv[2] // the address which georgia is the 3rd index or 2

if(!address){
  console.log('Please provide an location')
}else{
  geocode(address,(error,data)=>{
    if(error){
      return console.log('error', error)  // return will stop the code if error found
    }
    //console.log('data', data) // we no longer need this
  
    forecast(data.latitude, data.longtitude,(error,forecastdata)=>{  // becarefull with the longitude and altitude wrong order and it won't work
      if(error){
        console.log('error', error)
      }else
      console.log('Location: ', data.location) // we'll pass the location from geocode and its callback variable is data here
      console.log(forecastdata)
      
    })
  })
}
// TO USE THIS APP.JS INSIDE THE TERMINAL TYPE node app.js "georgia"

//const weatherurl =  'http://api.weatherstack.com/current?access_key=5db9d06b9599615eaaea970ef52430f4&query=%2037.8267,-122.4233&units=f'
// const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHFwZWFjZW1ha2VyIiwiYSI6ImNsaHk0ang3aTAzN2cza3A1enVvZmFidGwifQ.roK-xXrCOFMO9N9JM5kKww&limit=1'


