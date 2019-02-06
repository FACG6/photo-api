const {
  homePage,
  pageNotFound,
  handelSearch,
  serverAPI,
} = require('./handler');

const router = (request, response) => {
  if (request.url === '/') {
    homePage(request, response);
  } else if (request.url === '/search') {
    handelSearch(request, response);
  } else if (request.url.includes('/public/')) {
    serverAPI(request, response);
  } else {
    pageNotFound(request, response);
  }
};
module.exports = router;
