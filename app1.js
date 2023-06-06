const request = require('request') // load in the module request to pull HTML
const geocode = require('./utils/geocode') // pass in the geocdoe file we just make into app.js

const weatherurl =  'http://api.weatherstack.com/current?access_key=5db9d06b9599615eaaea970ef52430f4&query=%2037.8267,-122.4233&units=f'
// const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHFwZWFjZW1ha2VyIiwiYSI6ImNsaHk0ang3aTAzN2cza3A1enVvZmFidGwifQ.roK-xXrCOFMO9N9JM5kKww&limit=1'

  //console.log(response)  // to see full result


  request({url: weatherurl, json: true},(error,response)=>{
    console.log(response.body.current)
  })

/*--------------------------------------------weather------------------------------------------------------------ */

// request({url: weatherurl, json: true},(error,response)=>{ // json: true will automatically parse the data for us
// if(error){
//   console.log('Can not connect to the internet.')
// }else if(response.body.error){
//   console.log('URL does not exist')
// }else{
//   console.log(response.body.current.weather_descriptions[0]+' it is currently '+ response.body.current.temperature + ', but it fees like ' + response.body.current.feelslike) // because json: true already parse the data so we don't need to parse it  
// }
// })



/*----------------------------------------------Geo----------------------------------------------------------- */


// request({url: geourl, json: true},(error,response)=>{ // json: true will automatically parse the data for us
//   if(error){
//     console.log('No internet connection')
//   }else if(response.body.features.length===0){
//     console.log('URL does not exist')
//   }else{
//     const longtitude = response.body.features[0].center[0] //feature is an array of 1 and center is also an array of 1 go to url to check
//     const latitude = response.body.features[0].center[1] // longtitude is the array of index of 1
//     console.log(latitude, longtitude)
//   }
// })



// geocode('Georgia',(error,data)=>{
//   console.log('error', error)
//   console.log('data', data)
// })

