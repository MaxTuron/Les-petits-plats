import {recipes} from "../../data/recipes.js";


function displayRecettes (recipes) {
  const recipesCard = document.querySelector("#listeRecettes");
  recipesCard.innerHTML='';
  
  recipes.forEach(recipe => {
    const recipeInfo = new recipesInfos(recipe);
    const recipeCard = recipeInfo.creaCarteDom();
    recipesCard.appendChild(recipeCard);
  });
}

function init () {
  displayRecettes(recipes);
}

init ();