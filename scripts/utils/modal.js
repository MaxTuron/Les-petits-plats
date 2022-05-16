let modalAppliance = document.getElementById("listeAppliances");
let modalUstensils = document.getElementById("listeUstensils");
let modalIngredient = document.getElementById("listeIngredient");

inputAppliance.addEventListener("focus", event =>{
    modalAppliance.style.display="block";
});

inputUstensils.addEventListener("focus", event =>{
    modalUstensils.style.display="block";
});

inputIngredient.addEventListener("focus", event =>{
    modalIngredient.style.display="block";
});

inputSearch.addEventListener("focus",event =>{
    modalAppliance.style.display="none";
    modalUstensils.style.display="none";
    modalIngredient.style.display="none";
});