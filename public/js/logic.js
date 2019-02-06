


function accessData(callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
            callback(response);
        } else
             {
                console.log('ERROR')
            }

    }
    xhr.open("GET", '/search');
    xhr.send();
}
