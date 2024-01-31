"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// AJAX call
let getCountryData = function (country) {
  let request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  request.send();
  // console.log(request.responseText); // Output :      (nothing)

  request.addEventListener("load", function () {
    //   console.log(this.responseText);
    let [data] = JSON.parse(this.responseText);
    console.log(data);

    let html = `
     <article class="country">
          <img class="country__img" src="${data.flags?.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(1)}</p>
         <p class="country__row"><span>🗣️</span>${Object.values(
           data.languages
         ).join(", ")}</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0]?.name
        }</p>

          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("bharat");
getCountryData("usa");
getCountryData("portugal");
getCountryData("kenya");
getCountryData("aus");
getCountryData("pak");
getCountryData("JAPAN");
getCountryData("germany");
