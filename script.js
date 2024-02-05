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
//   // countriesContainer.style.opacity = 1;
// };

// let renderError = function (err) {
//   countriesContainer.insertAdjacentText("beforeend", err);
//   // countriesContainer.style.opacity = 1;
// };

// let getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// let getCountryData = (country) => {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then((data) => {
//       renderCountry(data[0]);
//       let neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error("No Neighbour found");
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "Country not found"
//       );
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       renderError(`Something went wrong 😢 ${err.message} Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData("AUS");
// //// Handling rejected promises
// btn.addEventListener("click", function () {
//   getCountryData("bharat");
// });

////////////////////////////////////////////////////////////////////////////////////////////////////

// Asynchronous Behind the Scene

/////////////////////////////////////////////////////////

// Event loop

// console.log("Test Start");
// setTimeout(() => {
//   console.log("0 Sec Timer");
// }, 0);
// Promise.resolve("Resolve promise 1").then((res) => console.log(res));

// Promise.resolve("Resolve Promise 2").then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log("Test End ");

////////////////////////////////////////////////////////////////////////////////////////////////

//// Build a simple promise

// let lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is happening");
//   setTimeout(() => {
//     Math.random() >= 0.5 ? resolve("You won!") : reject(new Error("You lost!"));
//   }, 4000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// // Promisifying setTimeout
// let wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("4 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("5 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("6 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("7 seconds passed");
//   });

// //
// Promise.resolve("It resolve Immediately").then((x) => console.log(x));
// Promise.reject(new Error("Problem!")).catch((x) => console.log(x));

///////////////////////////////////////////////////////

///// Promisifying the Geolocation API

// let getPosition = function () {
//   return new Promise((resolve, reject) => {
//     // navigator.geolocation.getCurrentPosition(
//     //   (pos) => resolve(pos),
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((pos) => console.log(pos));
////////////////////////////////////////////////////////////////////////////////

//// Async / Await :

// let WhereAmI = async function (country) {
//   // Geolocation
//   let pos = await
//   ///
//   ///
//   //
//   //
//   //
//   let res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);

//   let data = res.json();
//   console.log(data);
//   renderCountry(data[0]);
// };
// WhereAmI("Bharat");
// console.log("First");

//////////////////////////////////////////////////////////

//// Error Handling with TRY and CATCH

// try {
//   let x = 1;
//   const y = 2;
//   y = 4;
//   console.log(y);
// } catch (err) {
//   alert(err);
// }
///////////////////////////////////////////////////////////////////////////////////////

// Async/Await

// let getPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// let renderError = function (err) {
//   countriesContainer.insertAdjacentText("beforeend", err);
//   countriesContainer.style.opacity = 1;
// };

// // getPosition().then((pos) => console.log(pos));

// let whereAmI = async function () {
//   try {
//     let pos = await getPosition();
//     let { latitude: lat, longitude: lng } = pos.coords;

//     let resGeo = await fetch(
//       ` https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=65bb472564d41430332438yuf71185a`
//     );
//     if (!resGeo.ok) {
//       throw new Error("Problem getting location data");
//     }
//     let dataGeo = await resGeo.json();
//     // console.log(dataGeo);

//     let res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
//     );
//     let data = await res.json();
//     // console.log(data);
//     renderCountry(data[1]);

//     return `You are in ${dataGeo.address.city}, ${dataGeo.address.country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`Something went wrong  ${err.message}`);

//     //Reject promise returned from async function
//     throw err;
//   }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//// Returning data from Async/Await

// console.log("1: Start Getting location");
// let where = whereAmI();
// console.log(where);

// whereAmI()
//   .then((city) => console.log`2: ${city}`)
//   .catch((err) => console.error(`2: ${err.message}`))
//   .finally(() => console.log("3: Finished getting location"));
// console.log("3  : Finish Getting location");

// (async function () {
//   try {
//     let city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log(`3: Finished getting location`);
// })();

///////////////////////////////////////////////////////////////////////////////////////////////

///// Running Promises in Parallel : Promise.all()

let getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

let get3Countries = async function (c1, c2, c3) {
  try {
    // let [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // let [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // let [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    let data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    // console.log(data);
    console.log(data.map((d) => d[0].capital).map((d) => d.join(", ")));
    // console.log(data1.capital, data2.capital, data3.capital);
    // console.log(data1, data2, data3);
  } catch (err) {
    console.error(err.message);
  }
};
get3Countries("bharat", "USA", "canada");

/////////////////////////////////////////////////////////////////////////////////////////////////
