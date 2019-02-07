
// eslint-disable-next-line no-unused-vars
function accessData(callback) {
  const xhr = new XMLHttpRequest();
  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function () {
    const response;
    if (xhr.readyState === 4 && xhr.status === 200) {
       response = JSON.parse(xhr.responseText);
      callback(response);
    } else {
      callback(new TypeError(response.error));
    }
  };
  xhr.open('GET', '/search');
  xhr.send();
}
