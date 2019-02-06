

// eslint-disable-next-line no-unused-vars
function accessData(callback) {
  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest();
  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function () {
    // eslint-disable-next-line eqeqeq
    if (xhr.readyState == 4 && xhr.status == 200) {
      // eslint-disable-next-line no-undef
      response = JSON.parse(xhr.responseText);
      // eslint-disable-next-line no-undef
      callback(response);
    } else {
      // eslint-disable-next-line no-console
      console.log('ERROR');
    }
  };
  xhr.open('GET', '/search');
  xhr.send();
}
