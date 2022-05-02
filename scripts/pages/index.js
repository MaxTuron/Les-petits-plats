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
    searchArray.forEach(recipe => {
        const recipeInfo = new recipesElements(recipe);
        
        const recipeApplianceCard = recipeInfo.applianceDom();
        applianceCard.appendChild(recipeApplianceCard);
        
        recipe.ustensils.forEach(ustensil => {
            const recipeUstensilCard = recipeInfo.ustensilsDom(ustensil);
            unstensilsCard.appendChild(recipeUstensilCard);
        });
        recipe.ingredients.forEach(ingredient => {
            const recipeIngredientCard = recipeInfo.ingredientDom(ingredient);
            ingredientCard.appendChild(recipeIngredientCard);
        });
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