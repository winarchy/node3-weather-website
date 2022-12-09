const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=9393f121e44a8d3b632efa8c27edbe72&query=${longitude},${latitude}&units=m`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find loacation', undefined)
        } else {
            callback(undefined, `${body.location.country}. It is currently ${body.current.temperature} degress out. The air you feel ${body.current.weather_descriptions[0]}`)
        }
    })
}


module.exports = forecast