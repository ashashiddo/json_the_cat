const request = require('request');

const fetchBreedDescription = function(breedName) {
  return new Promise((resolve, reject) => {
    const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          reject(`Breed '${breedName}' not found.`);
        } else {
          resolve(data[0].description);
        }
      }
    });
  });
};
  
  
module.exports = { fetchBreedDescription };
  