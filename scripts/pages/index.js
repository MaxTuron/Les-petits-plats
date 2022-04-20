import {recipes} from "../../data/recipes.js";


function displayRecettes (recipes) {
  const recipesCard = document.querySelector("#listeRecettes");
  
  recipes.forEach(recipe => {
    const recipeInfo = new recipesInfos(recipe);
    const recipeInfoCard = recipeInfo.carteDom();
    recipesCard.appendChild(recipeInfoCard);
  });
}

function init () {
  displayRecettes(recipes);
}

init ();