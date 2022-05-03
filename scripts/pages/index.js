//Récupére toutes les recettes
let fullArray = recipes;
let searchArray = recipes;
let recipeCard = document.querySelector("#listeRecettes");
let inputSearch = document.getElementById("inputRecherche");

function displayRecette(searchArray) {
  recipeCard.innerHTML = "";
    searchArray.forEach(recipe => {
    const recipeInfo = new recipesInfos(recipe);
    const recipeInfoCard = recipeInfo.carteDom();
    recipeCard.appendChild(recipeInfoCard);
  });
}

function displayElements(searchArray){
    let ingredientCard = document.querySelector("#ingredients");
    let applianceCard = document.querySelector("#appliances");
    let unstensilsCard = document.querySelector("#ustensils");
    ingredientCard.innerHTML = "";
    applianceCard.innerHTML = "";
    unstensilsCard.innerHTML = "";
    let ingredientArray =[];
    let applianceArray =[];
    let ustensilsArray =[];
    searchArray.forEach(recipe => {
        if (applianceArray.includes(recipe.appliance)===false) {
            applianceArray.push(recipe.appliance);
        }
        recipe.ustensils.forEach(ustensil => {
            if (ustensilsArray.includes(ustensil)===false) {
                ustensilsArray.push(ustensil);
            }
        });
        recipe.ingredients.forEach(ingredient => {
            if (ingredientArray.includes(ingredient.ingredient)===false) {
                ingredientArray.push(ingredient.ingredient);
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


inputSearch.addEventListener("keydown", function(recipe) {
    if(inputSearch.value.length>=3) {
        search();
    }else if (inputSearch.value.length<3){
        displayRecette(fullArray);
        displayElements(fullArray);
    }
});

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

function searchIngredients(){
    
}

function searchUstensiles(){

}

function searchAppliance(){

}

function init () {
  displayRecette(searchArray);
  displayElements(searchArray);
}

init ();