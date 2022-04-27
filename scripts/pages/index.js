//Récupére toutes les recettes
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
 let inputValue = inputSearch.value;

 recipes.forEach(recipe =>{

  if (recipe.name.includes(inputValue.toLowerCase()) ||recipe.description.includes(inputValue.toLowerCase()) || recipe.appliance.includes(inputValue.toLowerCase())) {
     searchArray.push(recipe);
  }

  recipe.ingredients.forEach(ingredient =>{
      if (ingredient.ingredient.includes(inputValue.toLowerCase())){
          console.log(recipe);
          searchArray.push(recipe);
      }
  });

   if (inputValue===undefined) {
       displayRecette(searchArray);
   }
 });
 console.log(searchArray);
 displayRecette(searchArray);
}

function init () {
  displayRecette(searchArray);
}

init ();