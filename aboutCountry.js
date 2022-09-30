
const firstInformation = document.createElement("div");//Ok
const secondInformation = document.createElement("div");//Ok
const thridInformation = document.createElement("div");//Ok
const fourInformation = document.createElement("div");//Ok
const fiveInformation = document.createElement("div");//Ok
const sixInformation = document.createElement("div");//Ok
const sevenInformation = document.createElement("div");//Ok
const eightInformation = document.createElement("div");//OK

let flagCountry;//Ok;
let sectionImage = document.getElementById("section__image");//Ok
let darkMode = document.getElementsByClassName("dark__mode")[0];
let main = document.getElementsByClassName("main")[0];

firstInformation.classList.add("informations");
secondInformation.classList.add("informations");
thridInformation.classList.add("informations");
fourInformation.classList.add("informations");
fiveInformation.classList.add("informations");
sixInformation.classList.add("informations");
sevenInformation.classList.add("informations");
eightInformation.classList.add("informations");

//AddEventListener - ADL
darkMode.addEventListener("click", ()=>{

  alert("Soon");

})


// Getting data from API
fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      mainPageCountry(data)
    })


function mainPageCountry(dados){

    

    let mainName, countryName, nameNative, namePopulation, countryPopulation, countryRegion, nameRegion, 
    nameSubRegion, countrySubRegion, countryCapital, nameCapital,namelevelDomain, countrylevelDomain, nameCurrencies
    ,countryCurrencies, nameLanguagens, countryLanguagens, nameBorder, fcountryBorder, scountryBorder, tcountryBorder,
    countryBorders, countryDates, specificInformation, borderInformation, educationInformation, economicInformation;


    const nameCountry = localStorage.getItem('nameCountry');// Getting the country name in localStorage 

  
      dados.forEach((element,i) => {

        economicInformation = document.createElement("section");
        educationInformation = document.createElement("section");
        borderInformation = document.createElement("section");
        specificInformation = document.createElement("section");
        specificInformation.classList.add("dates")
        countryDates = document.createElement("section");
        countryDates.classList.add("country__dates")
        mainName = document.createElement("h1");
        countryName = document.createElement("span");
        nameNative = document.createElement("p");
        nameNative.classList.add("informations__country");
        nameNative.textContent = "Native Name: "
        namePopulation = document.createElement("p");
        namePopulation.classList.add("informations__country");
        namePopulation.textContent = "Population: ";
        countryPopulation = document.createElement("span");
        nameRegion = document.createElement("p");
        nameRegion.classList.add("informations__country");
        nameRegion.textContent = "Region: ";
        countryRegion = document.createElement("span");
        nameSubRegion = document.createElement("p");
        nameSubRegion.classList.add("informations__country");
        nameSubRegion.textContent = "Sub Region: ";
        countrySubRegion = document.createElement("span");
        nameCapital = document.createElement("p");
        nameCapital.classList.add("informations__country");
        nameCapital.textContent = "Capital: ";
        countryCapital = document.createElement("span");
        namelevelDomain = document.createElement("p");
        namelevelDomain.classList.add("informations__country");
        namelevelDomain.textContent = "Top Level Domain: ";
        countrylevelDomain = document.createElement("span");
        nameCurrencies = document.createElement("p");
        nameCurrencies.classList.add("informations__country");
        nameCurrencies.textContent = "Currencies: ";
        countryCurrencies = document.createElement("span");
        nameLanguagens = document.createElement("p");
        nameLanguagens.classList.add("informations__country");
        nameLanguagens.textContent = "Languagens: "
        countryLanguagens = document.createElement("span");
        nameBorder = document.createElement("h2");
        nameBorder.classList.add("informations__country");
        nameBorder.textContent = "Border Countries";
        fcountryBorder = document.createElement("li");
        scountryBorder = document.createElement("li");
        tcountryBorder = document.createElement("li");
        countryBorders = document.createElement("ul");
        countryBorders.classList.add("country__borders")

        

        console.log(countryBorders)
    
          if(element.name.common == nameCountry){
    
              flagCountry = document.createElement("img");
              flagCountry.setAttribute("src", element.flags.svg);
              console.log("Está funcionando")

              countryName.textContent = element.name.common;//Ok
              countryPopulation.textContent = element.population;//ok
              mainName.textContent = element.name.common;//Ok
              countryRegion.textContent = element.region;//Ok
              countrySubRegion.textContent = element.subregion;//Ok
              countryCapital.textContent = element.capital;//Ok
              countrylevelDomain.textContent = element.tld;//Ok
              countryCurrencies.textContent = Object.values(element.currencies)[0].name;  //0k        
              countryLanguagens.textContent = Object.values(element.languages)[0];//ok

            
              countryBorders.remove();
              if(element.borders){

                fcountryBorder.textContent = element.borders[0];
                scountryBorder.textContent = element.borders[1];
                tcountryBorder.textContent = element.borders[2];

              }

              
                main.append(countryDates);

                countryDates.append( specificInformation, borderInformation)
                borderInformation.append(nameBorder, countryBorders)

                specificInformation.append(economicInformation, educationInformation);

                economicInformation.append(mainName, firstInformation, secondInformation, thridInformation, fourInformation, fiveInformation);
                educationInformation.append(sixInformation, sevenInformation, eightInformation);
                
                countryBorders.append(fcountryBorder, scountryBorder, tcountryBorder)
                sectionImage.appendChild(flagCountry);
              
                firstInformation.append(nameNative, countryName);
                secondInformation.append(namePopulation, countryPopulation);
                thridInformation.append(nameRegion, countryRegion);
                fourInformation.append(nameSubRegion,countrySubRegion);
                fiveInformation.append(nameCapital, countryCapital);
                sixInformation.append(namelevelDomain, countrylevelDomain);
                sevenInformation.append(nameCurrencies, countryCurrencies);
                eightInformation.append(nameLanguagens, countryLanguagens);
          }
      });
}

