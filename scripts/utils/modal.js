let modalAppliance = document.getElementById("listeAppliances");
let modalUstensils = document.getElementById("listeUstensils");
let modalIngredient = document.getElementById("listeIngredient");

//Ouverture modale appliances
inputAppliance.addEventListener("focus", event =>{
    modalAppliance.style.display="block";
});

//Ouverture modale ustensiles
inputUstensils.addEventListener("focus", event =>{
    modalUstensils.style.display="block";
});

//Ouverture modale ingredient
inputIngredient.addEventListener("focus", event =>{
    modalIngredient.style.display="block";
});

document.querySelectorAll(".elementAppliance").forEach(appliance =>{
    appliance.addEventListener('click', event =>{
        let newTag = appliance.innerHTML;
        let applianceTagCard = document.querySelector("#listeTag");

        let applianceTagModel = applianceTagFactory(newTag);
        let applianceTagDom = applianceTagModel.applianceTagDOM();
        applianceTagCard.appendChild(applianceTagDom);
        
        modalAppliance.style.display="none";
        modalUstensils.style.display="none";
        modalIngredient.style.display="none";
    })
});

document.querySelectorAll(".elementUstensil").forEach(ustensile =>{
    ustensile.addEventListener('click', event =>{
        let newTag = ustensile.innerHTML;
        console.log(newTag);
        modalAppliance.style.display="none";
        modalUstensils.style.display="none";
        modalIngredient.style.display="none";
    })
});

//Fermeture des modalde (non fonctionnel)
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
        console.log(event.target);
        console.log(event.target.innerText);
    }
});