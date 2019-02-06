

const searchText = document.getElementById('searchFor');

const searchBtn = document.getElementById('searchBtn');

const finish = document.getElementById('img');

searchBtn.addEventListener('click', () => {
  finish.textContent = '';

  if (searchText.value !== '') {
    const newValue = searchText.value;

    request('/search', 'POST', newValue, (error, response) => {
      if (error) {
        console.log(new Error('Error'));
      } else {
        const result = JSON.parse(response);
        result.data.forEach((element) => {
          const divimg = document.createElement('divimg');
          divimg.classList.add('div');

          const img = document.createElement('img');
          img.setAttribute('src', element.images.fixed_height_still.url);
          img.classList.add('image');
          finish.appendChild(img);
        });
      }
    });
  }
});
