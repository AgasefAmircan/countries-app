//  theme-changer
const themeChange = document.querySelector(".theme-changer");

themeChange.addEventListener("click", () => {
  if (document.documentElement.dataset.theme === "dark") {
    document.documentElement.dataset.theme = "light";
  } else {
    document.documentElement.dataset.theme = "dark";
  }
});

//  Show Countries

const countries = document.querySelector(".countries");
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((elem) => {
      showCountry(elem);
    })
  );

function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = `
  <div class="img"><img src=${data.flags.png} alt="" />
         </div>
          <div class="info">
            <h4 class="searchName">${data.name.common}</h4>
            <p><b>Population:</b>${data.population}</p>
            <p class="regionName"><b>Region:</b> ${data.region}</p>
            <p><b>Capital:</b>${data.capital}</p>
          </div>
 `;
  countries.appendChild(country);

  country.addEventListener("click", function () {
    showCountryDetails(data);
  });
}

//  Filter section  open & close

const filter = document.querySelector(".filter");
const dropDown = document.querySelector(".dropdown");
filter.addEventListener("click", function () {
  dropDown.classList.toggle("dropdown-block");
});

// Filter section select country
const regionName = document.getElementsByClassName("regionName");
const region = document.querySelectorAll(".region");

region.forEach((element) => {
  element.addEventListener("click", () => {
    Array.from(regionName).forEach((elem) => {
      if (
        elem.innerText.includes(element.innerText) ||
        element.innerText == "All"
      ) {
        elem.parentElement.parentElement.style.display = "grid";
      } else {
        elem.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

// Search sectiion
const searchInput = document.querySelector(".searchInput");
const searchName = document.getElementsByClassName("searchName");

searchInput.addEventListener("input", function () {
  // console.log(searchInput.value.toLowerCase());
  Array.from(searchName).forEach((elem) => {
    if (
      elem.innerText.toLowerCase().includes(searchInput.value.toLowerCase())
    ) {
      elem.parentElement.parentElement.style.display = "grid";
    } else {
      elem.parentElement.parentElement.style.display = "none";
    }
  });
});

//  Get Details html
const detailsSection = document.querySelector(".details-section");
function showCountryDetails(data) {
  detailsSection.classList.toggle("show");
  detailsSection.innerHTML = `
  <div class="backButton">
        <i class="fa-solid fa-arrow-left"></i>
        <p>Back</p>
      </div><div class="country-details">
    <div class="country-img">
    <img src=${data.flags.png} "alt="" />
  </div>
  <div class="country-info">
    <h1>${data.name.common}</h1>
    <div class="infos">
      <div class="info-1">
        <p><b>Native Name:</b>${data.name.official}</p>
        <p><b>Population:</b>${data.population}</p>
        <p><b>Region:</b>${data.region}</p>
        <p><b>Sub Region:</b>${data.subregion}</p>
        <p><b>Capital:</b>${data.capital}</p>
      </div>
      <div class="info-2">
        <p><b>Top Level Domain:</b>Loading...</p>
        <p><b>Currencies:</b>Loadingg...</p>
        <p><b>Languages:</b>Loading...</p>
      </div>
    </div>
    <div class="border">
      <p><b>Border Countries:</b></p>
      <h5>Loading...</h5>
      <h5>Loading...</h5>
      <h5>Loading...</h5>
    </div>  
      </div> 
  </div>`;
  const back = document.querySelector(".backButton");
  back.addEventListener("click", () => {
    detailsSection.classList.toggle("show");
  });
}
