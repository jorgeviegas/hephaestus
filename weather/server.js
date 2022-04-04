const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');
const app = express();

const apiKey = 'ba2be472c40b0dacdcecd3ae875b0c49';

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

exports.get = (req, res, next) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=-29.7607&lon=-51.1480&exclude=hourly,minutely&appid=${apiKey}&units=metric&lang=pt`

    request(url, function(err, response, body){

        body = JSON.parse(body);

        let weatherResponse = {
            currentTemperature : body.current.temp,
            weatherDescription : body.current.weather[0].description
        };

        res.status(200).json(weatherResponse);
    });
};

app.get('/', exports.get);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})