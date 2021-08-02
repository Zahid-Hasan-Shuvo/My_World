'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
let html = '';

const renderCountry = (data = 'bangladesh', className = '') => {
    html = `
  <article class="country ${className}" >
    <img class="country__img" src="${data.flag}"/>
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    console.log(html);
    html = '';
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = country => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        // Render country
        renderCountry(data);
        // Get neighbuour country 2
        const [neighbour] = data.borders;
        // console.log(neighbour);
        if (!neighbour) return;
        // Ajax cllas country 2
        const request2 = new XMLHttpRequest();
        request2.open(
            'GET',
            `https://restcountries.eu/rest/v2/alpha/${neighbour}
    `
        );
        request2.send();
        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });
    });
};

const getCountryByName = event => {
    event.preventDefault();
    const inputValue = document.getElementById('input-box').value.toLowerCase();
    console.log(inputValue);
    getCountryAndNeighbour(inputValue);
};