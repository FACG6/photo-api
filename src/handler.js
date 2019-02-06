const fs = require('fs');
const path = require('path');
const requests = require('request');
require('env2')('./config.env');

const { apiKeyGiphy } = process.env;

const homePage = (request, response) => {
  const pathFile = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(pathFile, (error, file) => {
    if (error) {
      response.writeHead(500, { 'content-Type': 'text/html' });
      response.end('<h1>server error</h1>');
    } else {
      response.writeHead(200, { 'content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const serverAPI = (request, response) => {
  const endpoint = request.url;
  const extantion = path.extname(endpoint).substr(1);
  const pathFile = path.join(__dirname, '..', ...endpoint.split('/'));
  const contantType = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    json: 'application/json',
  };

  fs.readFile(pathFile, (error, file) => {
    if (error) {
      response.writeHead(500, {
        'content-type': 'text/html',
      });
      response.end('<h1>Internal Server Error</h1>');
    } else {
      response.writeHead(200, {
        'content-type': contantType[extantion],
      });
      response.end(file);
    }
  });
};

const handelSearch = (request, response) => {
  let allData = '';
  request.on('data', (chank) => {
    allData += chank;
  });
  request.on('end', () => {
    const options = {
      method: 'GET',
      url: `http://api.giphy.com/v1/gifs/search?q=${allData}&api_key=${apiKeyGiphy}&limit=4`,
    };
    requests(options, (error, res, body) => {
      if (error) {
        response.writeHead(500, { 'content-type': 'text/html' });
        response.end('<h1>not found</h1>');
      } else {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(JSON.stringify(body));
      }
    });
  });
};

const pageNotFound = (request, response) => {
  const pathFile = path.join(__dirname, '..', 'puplic', 'notfound.html');

  fs.readFile(pathFile, (error) => {
    if (error) {
      response.writeHead(404, { 'content-type': 'text/html' });
      response.end('<h1>Page Not Found </h1>');
    }
  });
};

module.exports = {
  homePage,
  pageNotFound,
  serverAPI,
  handelSearch,
};
