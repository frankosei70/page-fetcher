const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, { encoding: null }, (error, response, body) => {
  if (error) {
    console.error('Error downloading the file:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error downloading the file. Status code:', response.statusCode);
    return;
  }

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error('Error saving the file:', err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
  });
});
