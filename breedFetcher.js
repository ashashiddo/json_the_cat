const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed '${breedName}' not found.`);
    } else {
      console.log(data[0].description);
    }
  }
});