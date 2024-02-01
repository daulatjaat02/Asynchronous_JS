let renderCountry = function (data) {
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

let whereAmI = function (lat, lng) {
  let response = fetch(
    ` https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=65bb472564d41430332438yuf71185a`
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);

      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      renderCountry(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
// whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
