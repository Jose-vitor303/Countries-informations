const countries = document.getElementById("countries");
const regionSelected = document.getElementById("region");
const inputSearch = document.querySelector("#search");
const defaultOption = document.querySelector("option[selected]");
let darkMode = document.getElementsByClassName("dark__mode")[0];


let optionSelected, country, allCountries, nameCountry , intoCountry, flagCountry;


//AddEvent Listner - ADL 
darkMode.addEventListener("click", ()=>{

    alert("Soon");
})
regionSelected.addEventListener("change", newRegionFiltered);
inputSearch.addEventListener("input", function(){//When something is type on the field input, the arrow function below is called 

    const str = this.value;
    
     str ? filterCountrybyName(str) : showAllCountries();

})



// Getting dates from API
fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => createDados(data))


function createDados(data){

    let detailsCountry;
    let populationCountry; 
    let regionCountry;
    let capitalCountry;
    let sectionImage;
    let changeWord;

    data.forEach((element,i) => {

      console.log(element)
     
      sectionImage = document.createElement("section");
      detailsCountry = document.createElement("section");
      country = document.createElement("section");
      nameCountry = document.createElement("h1");
      flagCountry = document.createElement("img");
      populationCountry = document.createElement("h3");
      regionCountry = document.createElement("h3");
      capitalCountry = document.createElement("h3");
      intoCountry = document.createElement("a");
      
      intoCountry.setAttribute("i", i);

      country.classList.add("each_country");
      country.setAttribute("region", element.region)
      flagCountry.classList.add("country__image")

      // Change the word API to LowerCase
      country.setAttribute("country", element.name.common);
      changeWord = country.getAttribute("country").toLowerCase();
      country.setAttribute("country", changeWord);


      detailsCountry.classList.add("information__country")
      sectionImage.classList.add("section__image")

      populationCountry.innerText = `Population: ${element.population}`;
      regionCountry.innerText = `Region: ${element.region}`;
      capitalCountry.innerText = `Capital: ${element.capital}`;
      flagCountry.setAttribute("src", element.flags.svg)
      nameCountry.innerText = element.name.common;
    
      countries.appendChild(country);
      country.appendChild(detailsCountry);
      country.appendChild(sectionImage);
      sectionImage.appendChild(intoCountry);
      intoCountry.appendChild(flagCountry);
      detailsCountry.appendChild(nameCountry);
      detailsCountry.appendChild(populationCountry)
      detailsCountry.appendChild(regionCountry);
      detailsCountry.appendChild(capitalCountry);
     
      country.insertBefore(sectionImage, detailsCountry)

      flagCountry.addEventListener("click",()=>{// Every click on the mouse
        
          window.location.href = "countries.html";
          localStorage.setItem("nameCountry", element.name.common);//It's record the name of country on the localStorage 

          
      })      
      
    });   
    
}

function newRegionFiltered(){//When the region selected change 


  defaultOption.remove();//Remove the option filtered
  allCountries = document.querySelectorAll(".each_country");

  allCountries.forEach(element =>{

    element.classList.remove("country__gone");
  })
  
  optionSelected = regionSelected.options[regionSelected.selectedIndex].text;

  filterCountryByRegion(optionSelected);
  

}


function filterCountryByRegion(optionSelected){//filter country by region

      allCountries = document.querySelectorAll(".each_country");

      let getRegion; 

      allCountries.forEach(element =>{

        getRegion = element.getAttribute("region");  

  
        if(getRegion != optionSelected){  
           element.classList.add("country__gone")
        }

      })
      
}

function filterCountrybyName(str){//filter country by name 

   allCountries = document.querySelectorAll(".each_country");

  allCountries.forEach(element=>{

    let getCountry = element.getAttribute("country");

    if(!getCountry.includes(str.toLowerCase())){

      element.classList.add("country__gone")
    }

  })

}

function showAllCountries(){// Show all countries when the field input is empty

  allCountries = document.querySelectorAll(".each_country");

  allCountries.forEach(element => {

    element.classList.remove("country__gone")
  })
}

