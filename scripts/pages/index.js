//Récupére toutes les recettes
let fullArray = recipes;
let searchArray = recipes;
//Récupération des differents elements html
let recipeCard = document.querySelector("#listeRecettes");
let inputSearch = document.getElementById("inputRecherche");
let inputAppliance= document.getElementById("inputAppliance");
let inputUstensils = document.getElementById("inputUstensils");
let inputIngredient = document.getElementById("inputIngredient");

//Affichage des recettes
function displayRecette(searchArray) {
  recipeCard.innerHTML = "";
    searchArray.forEach(recipe => {
    const recipeInfo = new recipesInfos(recipe);
    const recipeInfoCard = recipeInfo.carteDom();
    recipeCard.appendChild(recipeInfoCard);
  });
}

//Affichages de éléments
function displayElements(searchArray){
    let ingredientCard = document.querySelector("#listeIngredient");
    let applianceCard = document.querySelector("#listeAppliances");
    let unstensilsCard = document.querySelector("#listeUstensils");
    ingredientCard.innerHTML = "";
    applianceCard.innerHTML = "";
    unstensilsCard.innerHTML = "";
    let ingredientArray =[];
    let applianceArray =[];
    let ustensilsArray =[];
    searchArray.forEach(recipe => {
        if (applianceArray.includes(recipe.appliance.toLowerCase())===false) {
            applianceArray.push(recipe.appliance.toLowerCase());
        }
        recipe.ustensils.forEach(ustensil => {
            if (ustensilsArray.includes(ustensil.toLowerCase())===false) {
                ustensilsArray.push(ustensil.toLowerCase());
            }
        });
        recipe.ingredients.forEach(ingredient => {
            if (ingredientArray.includes(ingredient.ingredient.toLowerCase())===false) {
                ingredientArray.push(ingredient.ingredient.toLowerCase());
            }
        });
    });

    applianceArray.forEach(appliance => {
        let applianceModel = applianceFactory(appliance);
        let applianceDom = applianceModel.applianceDOM();
        applianceCard.appendChild(applianceDom);
    });

    ustensilsArray.forEach(ustensil => {
        let ustensilModel = ustensilsFactory(ustensil);
        let unstensilDom = ustensilModel.ustensilsDOM();
        unstensilsCard.appendChild(unstensilDom);
    });

    ingredientArray.forEach(ingredient => {
        let ingredientModel = ingredientFactory(ingredient);
        let ingredientDom = ingredientModel.ingredientDOM();
        ingredientCard.appendChild(ingredientDom);
    });
    console.log(applianceArray);
    console.log(ustensilsArray);
    console.log(ingredientArray);
}

//Input recherche globale
inputSearch.addEventListener("keydown", function(recipe) {
    if(inputSearch.value.length>=3) {
        search();
    }else if (inputSearch.value.length<3){
        displayRecette(fullArray);
        displayElements(fullArray);
    }
});

//Input recherche appliance
inputAppliance.addEventListener("keydown", function(recipe) {
    if(inputAppliance.value.length>=3) {
        searchAppliance();
    }else if (inputAppliance.value.length<3){
        let allAppliance = document.querySelectorAll(".elementAppliance");
        allAppliance.forEach(appliance =>{
            appliance.style.display="block";
        });
    }
});

//Input recherche ustensiles
inputUstensils.addEventListener("keydown", function(recipe) {
    if(inputUstensils.value.length>=3) {
        searchUstensiles();
    }else if (inputUstensils.value.length<3) {
        let allUstensils = document.querySelectorAll(".elementUstensil");
        allUstensils.forEach(ustensil => {
            ustensil.style.display = "block";
        });
    }
});

//Input recherche ingredients
inputIngredient.addEventListener("keydown", function(recipe) {
    if (inputIngredient.value.length >= 3) {
        searchIngredients();
    } else if (inputIngredient.value.length < 3) {
        let allIngredients = document.querySelectorAll(".elementIngredients");
        allIngredients.forEach(ingredient => {
            ingredient.style.display = "block";
        });
    }
});

//Fonction de recherche globale
function search() {
    searchArray=[];
    let inputValue = document.getElementById("inputRecherche").value;
    
    recipes.forEach(recipe =>{
        if (searchArray.includes(recipe)===false) {
            if (recipe.name.toLowerCase().includes(inputValue.toLowerCase()) || recipe.appliance.toLowerCase().includes(inputValue.toLowerCase())) {
                searchArray.push(recipe);
            }
            recipe.ingredients.forEach(ingredient =>{
                if (ingredient.ingredient.toLowerCase().includes(inputValue.toLowerCase())) {
                    console.log(recipe);
                    if (searchArray.includes(recipe)===false) {
                        searchArray.push(recipe);
                    }
                }
            });
        }
    });
    displayRecette(searchArray);
    displayElements(searchArray);
}

//Tri dans les ingredients restant 
function searchIngredients(){
    let allIngredients = document.querySelectorAll(".elementIngredients");
    let inputIngredientsValue = inputIngredient.value;
    allIngredients.forEach(ingredient =>{
        if(ingredient.innerText.toLowerCase().includes(inputIngredientsValue.toLowerCase())){
            //Display block
            ingredient.style.display="block";
        } else {
            //Display none
            ingredient.style.display="none";
        };
    });
}
//Tri dans les ustensiles restant 
function searchUstensiles(){
    let allUstensils = document.querySelectorAll(".elementUstensil");
    let inputUstensilValue = inputUstensils.value;
    allUstensils.forEach(ustensil =>{
        if(ustensil.innerText.toLowerCase().includes(inputUstensilValue.toLowerCase())){
            //Display block
            ustensil.style.display="block";
        } else {
            //Display none
            ustensil.style.display="none";
        };
    });
}

//Tri dans les appareils restant 
function searchAppliance() {
    let allAppliance = document.querySelectorAll(".elementAppliance");
    let inputApplianceValue = inputAppliance.value;
    allAppliance.forEach(appliance =>{
        if(appliance.innerText.toLowerCase().includes(inputApplianceValue.toLowerCase())){
            //Appliance display OK
            appliance.style.display="block";
        } else {
            //Display none
            appliance.style.display="none";
        };
    });
}

function init () {
  displayRecette(searchArray);
  displayElements(searchArray);
}

init ();