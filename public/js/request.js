const request = (url, method, value, cb) => {
  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      if (xhr.status === 200) {
        if (response.error) {
          cb(new TypeError('Error,65445646546543165'), null);
        } else {
          cb(null, response);
        }
      } else {
        cb(new TypeError('Error'));
        
      }
    }
  };
  xhr.open(method, url);
  xhr.send(value);
};
if (typeof module !== 'undefined') {
  module.exports = request;
}
