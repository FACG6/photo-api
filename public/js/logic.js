


function accessData(callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
            callback(response);
        } else
             {
                response.writeHead(404, {"content-Type":"html/text"});
                response.end('error')
            }

    }
    xhr.open("GET", '/search');
    xhr.send();
}
