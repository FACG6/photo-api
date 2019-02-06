
let searchText = document.getElementById('searchFor');
let searchBtn = document.getElementById('searchBtn');
let finish = document.getElementById('img');

searchBtn.addEventListener('click', (e) => {
    if (searchText.value !== '') {

        const newValue = searchText.value;
        request('/search', 'POST', newValue, (error, response) => {
            if (error) {
                response.writeHead(404, {"content-Type":"html/text"});
                response.end('error')

            } else {
                const result = JSON.parse(response);
                result.data.forEach(element => {
                    console.log(element.images.fixed_height_still.url);
                    let divimg = document.createElement('divimg');
                    divimg.classList.add('div');
                    let img = document.createElement('img');
                    img.setAttribute('src', element.images.fixed_height_still.url)
                    img.classList.add('image');
                    finish.appendChild(img);
                });


            }
        })
    }

})

