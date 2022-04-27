//Récupére toutes les recettes
let searchArray = recipes;
let recipeCard = document.querySelector("#listeRecettes");

function displayRecette(recipes) {
  recipeCard.innerHTML = "";
  recipes.forEach(recipe => {
    const recipeInfo = new recipesInfos(recipe);
    const recipeInfoCard = recipeInfo .carteDom();
    recipeCard.appendChild(recipeInfoCard);
  });
}

/*
inputSearch.addEventListener("input", function(recipe) {
  let inputValue= inputSearch.value;
    searchArray =[];
    searchArray = recipes.filter(recipe => recipe.name.includes(inputValue) || recipe.description.includes(inputValue) || recipe.appliance.includes(inputValue));
  displayRecette(searchArray);
});
*/

function search() {
 //Vide toutes les recettes
  searchArray=[];
 let inputValue = document.getElementById("inputRecherche").value;

 recipes.forEach(recipe =>{
  if (recipe.name.includes(inputValue) || recipe.appliance.includes(inputValue)) {
     searchArray.push(recipe);
  }

  if (searchArray.includes(recipe)===false) {
      recipe.ingredients.forEach(ingredient =>{
          if (ingredient.ingredient.includes(inputValue)) {
              console.log(recipe);
              searchArray.push(recipe);
          }
      });
  }


   if (inputValue===undefined) {
       displayRecette(searchArray);
   }
 });
 displayRecette(searchArray);
}

function searchIngredients(){
    
}

function searchUstensiles(){

}

function searchAppliance(){

}

function init () {
  displayRecette(searchArray);
}

init ();