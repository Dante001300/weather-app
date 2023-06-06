const request = require ('request')

const geocode = (address,callback)=>{
    const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHFwZWFjZW1ha2VyIiwiYSI6ImNsaHk0ang3aTAzN2cza3A1enVvZmFidGwifQ.roK-xXrCOFMO9N9JM5kKww&limit=1'
  
    request({url: geourl, json:true}, (error,response)=>{  //the callback function will take in 2 items the error and response
      if(error){
        callback('No internet connection',undefined) // because there's an error so no resposne hence second item is undefined.
      }else if(response.body.features.length===0){
        callback('URL does not exist',undefined)
      }else{
        callback(undefined,{  // first item is error but since we know there will be no error so set it to undefined
          longtitude: response.body.features[0].center[0], // this is the data contain in the 2nd item of geocode which is callback
          latitude: response.body.features[0].center[1],
          location: response.body.features[0].place_name // this is a new data go to url browser and see
        })
  
      }
    })
  }
  
  module.exports = geocode

  // const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHFwZWFjZW1ha2VyIiwiYSI6ImNsaHk0ang3aTAzN2cza3A1enVvZmFidGwifQ.roK-xXrCOFMO9N9JM5kKww&limit=1'
