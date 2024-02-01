"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// AJAX call
// let getCountryData = function (country) {
//   let request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

//   request.send();
//   // console.log(request.responseText); // Output :      (nothing)

//   request.addEventListener("load", function () {
//     //   console.log(this.responseText);
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);

//     let html = `
//      <article class="country">
//           <img class="country__img" src="${data.flags?.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 10000000
//             ).toFixed(1)}</p>
//          <p class="country__row"><span>🗣️</span>${Object.values(
//            data.languages
//          ).join(", ")}</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0]?.name
//         }</p>

//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("bharat");
// getCountryData("usa");
// getCountryData("portugal");
// getCountryData("kenya");
// getCountryData("aus");
// getCountryData("pak");
// getCountryData("JAPAN");
// getCountryData("germany");

///////////////////////////////////////////////////////////////////////////////////

// let renderCountry = function (data, className = "") {
//   let html = `
//      <article class="country ${className}">
//           <img class="country__img" src="${data.flags?.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 10000000
//             ).toFixed(1)}</p>
//          <p class="country__row"><span>🗣️</span>${Object.values(
//            data.languages
//          ).join(", ")}</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0]?.name
//         }</p>

//           </div>
//         </article>
//     `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// let getCountryAndNeighbour = function (country) {
//   // AJAX Call country 1
//   let request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

//   request.send();
//   // console.log(request.responseText); // Output :      (nothing)

//   request.addEventListener("load", function () {
//     //   console.log(this.responseText);
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     let neighbour = data.borders[0];
//     // console.log(neighbour);
//     // let neighbour = Object.values(data.borders).join(", ");
//     // console.log(neighbour);

//     if (!neighbour) return;

//     // AJAX Call country 2
//     let request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);

//     request2.send();

//     request2.addEventListener("load", function () {
//       // console.log(this.responseText);
//       let [data] = JSON.parse(this.responseText);
//       console.log(data);
//       renderCountry(data, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("bharat");
// getCountryAndNeighbour("usa");
// getCountryAndNeighbour("britain");
// getCountryAndNeighbour("spain");
// getCountryAndNeighbour("CN");
// getCountryAndNeighbour("IRELAND");

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//         setTimeout(() => {
//           console.log("5 second passed");
//           setTimeout(() => {
//             console.log("6 second passed");
//             setTimeout(() => {
//               console.log("7 second passed");
//               setTimeout(() => {
//                 console.log("8 second passed");
//               }, 8000);
//             }, 7000);
//           }, 6000);
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////////

//// The modern way to make an AJAX request

// let request = fetch("https://restcountries.com/v3.1/name/bharat");
// console.log(request);

//////////////////////////////////////////////////////////////////////////////////////////////
//// Cousuming the promise

// let getCountryData = function (country) {
//   let request = fetch(`https://restcountries.com/v3.1/name/${country}`); // the fetch API returns a promise
//   request
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// let getCountryData = (country) => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`) // The fetch API returns a promise
//     .then((response) => response.json()) // The json API returns a promise as well
//     .then((data) => renderCountry(data[0]));
// };

// getCountryData("bharat");

//////////////////////////////////////////////////////////////////////////////////////////////

//// Chaining multiple promises

// let renderCountry = function (data, className = "") {
//   let html = `
//      <article class="country ${className}">
//           <img class="country__img" src="${data.flags?.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 10000000
//             ).toFixed(1)}</p>
//          <p class="country__row"><span>🗣️</span>${Object.values(
//            data.languages
//          ).join(", ")}</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0]?.name
//         }</p>

//           </div>
//         </article>
//     `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// let getCountryData = (country) => {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`) // The fetch API returns a promise
//     .then((response) => response.json()) // The json API returns a promise as well
//     .then((data) => {
//       renderCountry(data[0]);
//       let neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

//       // Don't do it (It is just like the callback hell)
//       // return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(
//       // response.json()
//       // )
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0], "neighbour"));
// };

// // getCountryData("bharat");
// // getCountryData("IRELAND");

/////////////////////////////////////////////////////////////////////////////////////////////

let renderCountry = function (data, className = "") {
  let html = `
     <article class="country ${className}">
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
  // countriesContainer.style.opacity = 1;
};

let renderError = function (err) {
  countriesContainer.insertAdjacentText("beforeend", err);
  // countriesContainer.style.opacity = 1;
};

let getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

let getCountryData = (country) => {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      let neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No Neighbour found");
      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      renderError(`Something went wrong 😢 ${err.message} Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getCountryData("AUS");
// //// Handling rejected promises
// btn.addEventListener("click", function () {
//   getCountryData("bharat");
// });
