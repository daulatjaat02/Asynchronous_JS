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

// let renderCity = function (data) {
//   let html = `
//      <article class="country">
//          <p class="country__row"><span>Country :  </span>${data.address.country}</p>
//          <p class="country__row"><span>State :  </span>${data.address.state}</p>
//          <p class="country__row"><span>City :  </span>${data.address.city}</p>
//          <p class="country__row"><span>Post code : </span>${data.address.postcode}</p>
//          <p class="country__row"><span>Address : </span>${data.display_name}</p>
//         </article>
//     `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// let whereAmI = function (lat, lng) {
//   fetch(
//     ` https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=65bb472564d41430332438yuf71185a`
//   )
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCity(data);
//       console.log(`You are in ${data.address.city}, ${data.address.country}`);

//       return fetch(
//         `https://restcountries.com/v3.1/name/${data.address.country}`
//         // `https://restcountries.com/v3.1/name/bharat`
//       );
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[1]);
//       renderCountry(data[1]);
//     })
//     .catch((err) => console.log(err));
// };
// // whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

//////////////////////////////////////////////////////////////////////////////////////////////

let renderCountry = function (data, className = "") {
  let html = `
     <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name?.common}</h3>
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
};

let renderCity = function (data) {
  let html = `
     <article class="country">
         <p class="country__row"><span>Country :  </span>${data.address.country}</p>
         <p class="country__row"><span>State :  </span>${data.address.state}</p>
         <p class="country__row"><span>City :  </span>${data.address.city}</p>
         <p class="country__row"><span>Post code : </span>${data.address.postcode}</p>
         <p class="country__row"><span>Address : </span>${data.display_name}</p>
        </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

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

// let whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       let { latitude: lat, longitude: lng } = pos.coords;
//       console.log(lat, lng);
//       console.log(pos);

//       return fetch(
//         ` https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=65bb472564d41430332438yuf71185a`
//       );
//     })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCity(data);
//       console.log(`You are in ${data.address.city}, ${data.address.country}`);

//       return fetch(
//         `https://restcountries.com/v3.1/name/${data.address.country}`
//         // `https://restcountries.com/v3.1/name/bharat`
//       );
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[1]);
//       renderCountry(data[1]);
//     })
//     .catch((err) => console.log(err));
// };
// // whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);
// btn.addEventListener("click", whereAmI);

///////////////////////////////////////////////////////////////////////////////////////

// Async/Await

let getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
let renderError = function (err) {
  countriesContainer.insertAdjacentText("beforeend", err);
  countriesContainer.style.opacity = 1;
};

// getPosition().then((pos) => console.log(pos));

let whereAmI = async function () {
  try {
    let pos = await getPosition();
    let { latitude: lat, longitude: lng } = pos.coords;

    let resGeo = await fetch(
      ` https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=65bb472564d41430332438yuf71185a`
    );
    if (!resGeo.ok) {
      throw new Error("Problem getting location data");
    }
    let dataGeo = await resGeo.json();
    // console.log(dataGeo);

    let res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    let data = await res.json();
    // console.log(data);
    renderCountry(data[1]);

    return `You are in ${dataGeo.address.city}, ${dataGeo.address.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong  ${err.message}`);

    //Reject promise returned from async function
    throw err;
  }
};
//////////////////////////////////////////////////////////////////////////////////////////

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
