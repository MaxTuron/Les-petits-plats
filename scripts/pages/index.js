//Récupére toutes les recettes
let fullArray = recipes;
let searchArray = recipes;
let recipeCard = document.querySelector("#listeRecettes");
let inputSearch = document.getElementById("inputRecherche");

function displayRecette(recipes) {
  recipeCard.innerHTML = "";
  recipes.forEach(recipe => {
    const recipeInfo = new recipesInfos(recipe);
    const recipeInfoCard = recipeInfo .carteDom();
    recipeCard.appendChild(recipeInfoCard);
  });
}

inputSearch.addEventListener("keydown", function(recipe) {
    if(inputSearch.value.length>=3) {
        search();
    }else if (inputSearch.value.length<3){
        displayRecette(fullArray);
    }
});

function search() {
 //Vide toutes les recettes
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

function displayElements(recipes){
    recipes.forEach(recipe => {
        console.log(recipe.appliance);
        recipe.ustensils.forEach(ustensil => {
            console.log(ustensil);
        });
        recipe.ingredients.forEach(ingredient => {
            console.log(ingredient.ingredient);
        });
    });
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