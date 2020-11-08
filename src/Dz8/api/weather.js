const { Router } = require('express');
const http = require('http');
const request = require('request');
const fs = require('fs');
const path = require('path');

const weatherRouter = Router();
const apiKey = '8cc9d4859c7574129eb50ade51a86350';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const baseIconUrl = 'http://openweathermap.org/img/w';

function download (url, filename, callback){
  request.head(url, function(_err, res, _body){
    request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

function cityPromise(city) {
  return new Promise((resolve, reject) => {
    let data = '';
  
    http
      .get(`${baseUrl}?appid=${apiKey}&q=${city}`, (res) => {
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(data));
      })
      .on('error', (err) => reject(err));
  });
};

weatherRouter.get('/', (req, res) => {
  const { city, logo } = req.query;

  if (!city) {
    res.status(404).send({ error: 'Please specify the CITY!' });
    return;
  }

  cityPromise(city)
    .then((cityData) => {
      const parsedCityData = JSON.parse(cityData);

      if (logo == 1) {
        let url = `${baseIconUrl}/${parsedCityData.weather[0].icon}.png`;
    
        download(url, 'public/images/img.png', function(){
          const imgPath = path.join(__dirname, '../public/images', 'img.png');
          res.sendFile(imgPath);
        });
        return;
      } else {
        res.send(parsedCityData);
        return;
      }
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });

});

module.exports = weatherRouter;
