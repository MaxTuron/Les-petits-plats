let modalAppliance = document.getElementById("listeAppliances");
let modalUstensils = document.getElementById("listeUstensils");
let modalIngredient = document.getElementById("listeIngredient");

//Ouverture modale appliances
inputAppliance.addEventListener("focus", event =>{
    modalAppliance.style.display="flex";
    modalUstensils.style.display="none";
    modalIngredient.style.display="none";
});

//Ouverture modale ustensiles
inputUstensils.addEventListener("focus", event =>{
    modalAppliance.style.display="none";
    modalUstensils.style.display="flex";
    modalIngredient.style.display="none";
});

//Ouverture modale ingredient
inputIngredient.addEventListener("focus", event =>{
    modalAppliance.style.display="none";
    modalUstensils.style.display="none";
    modalIngredient.style.display="flex";
});
    
//Fermeture des modales (non fonctionnel)
document.addEventListener("click",event =>{
    if(event.target!==inputAppliance && 
        event.target!==inputUstensils && 
        event.target!==inputIngredient &&
        !event.target.classList.contains("elementAppliance") &&
        !event.target.classList.contains("elementUstensil") &&
        !event.target.classList.contains("elementIngredients")
    ){
        modalAppliance.style.display="none";
        modalUstensils.style.display="none";
        modalIngredient.style.display="none";
    }
});