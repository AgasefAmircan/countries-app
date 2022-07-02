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
}


 //  Filter section  open & close

 const filter =document.querySelector('.filter');
 const dropDown=document.querySelector('.dropdown')
 filter.addEventListener('click',function (){
  dropDown.classList.toggle("dropdown-block")
 })


// Filter section select country
const regionName=document.getElementsByClassName('regionName');
const region=document.querySelectorAll('.region')

region.forEach(element =>{
  element.addEventListener('click',()=>{
    Array.from(regionName).forEach(elem =>{
      if(elem.innerText.includes(element.innerText) || element.innerText=='All'){
        elem.parentElement.parentElement.style.display="grid";
      }
      else{
        elem.parentElement.parentElement.style.display="none";
      }
    })
  })
})


// Search sectiion
const search=document.querySelectorAll('.search');
const searchName=document.querySelectorAll('.searchName');

search.addEventListener("input",()=>{
  console.log(search.value.toLowerCase());
  Array.from(searchName).forEach(elem =>{
    if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
      elem.parentElement.parentElement.style.display="grid";
    }
    else{
      elem.parentElement.parentElement.style.display="none";
    }
  });
})