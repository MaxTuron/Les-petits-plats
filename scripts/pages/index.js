//Récupére toutes les recettes
let fullArray = recipes;
let searchArray = recipes;
let tagArray=[];
let recipeArrayTag = searchArray;

//Récupération des differents elements html
let recipeCard = document.querySelector("#listeRecettes");
let inputSearch = document.getElementById("inputRecherche");
let inputAppliance= document.getElementById("inputAppliance");
let inputUstensils = document.getElementById("inputUstensils");
let inputIngredient = document.getElementById("inputIngredient");
let zeroResult = document.getElementById("zeroResult");

//Affichage des recettes
function displayRecette(searchArray) {
  recipeCard.innerHTML = "";
    searchArray.forEach(recipe => {
    const recipeInfo = new recipesInfos(recipe);
    const recipeInfoCard = recipeInfo.carteDom();
    recipeCard.appendChild(recipeInfoCard);
  });
}

function applyEventListener() {

    document.querySelectorAll(".elementAppliance").forEach(appliance => {
        appliance.addEventListener('click',event => {
            let newTag = "appliance-" + appliance.innerHTML;
            if (tagArray.includes(newTag) === false) {
                tagArray.push(newTag);
                
                let applianceTagCard = document.querySelector("#listeTag");

                let applianceTagModel = applianceTagFactory(newTag);
                let applianceTagDom = applianceTagModel.applianceTagDOM();
                applianceTagCard.appendChild(applianceTagDom);
            }
            searchWithTag();
        })
    });


    document.querySelectorAll(".elementUstensil").forEach(ustensil => {
        ustensil.addEventListener('click', event => {
            let newTag = "ustensil-" + ustensil.innerHTML;
            if (tagArray.includes(newTag) === false) {
                tagArray.push(newTag);
                
                let unstensilTagCard = document.querySelector("#listeTag");

                let ustensilTagModel = ustensilsTagFactory(newTag);
                let ustensilsTagDOM = ustensilTagModel.ustensilsTagDOM();
                unstensilTagCard.appendChild(ustensilsTagDOM);
            }
            searchWithTag();
        })
    });

    document.querySelectorAll(".elementIngredients").forEach(ingredient => {
        ingredient.addEventListener('click', event => {
            let newTag = "ingredient-" + ingredient.innerHTML;
            if (tagArray.includes(newTag) === false) {
                
                tagArray.push(newTag);
                
                let ingredientTagCard = document.querySelector("#listeTag");
                let ingredientTagModel = ingredientsTagFactory(newTag);
                let ingredientTagDOM = ingredientTagModel.ingredientsTagDOM();
                ingredientTagCard.appendChild(ingredientTagDOM);
            }
            searchWithTag();
        })
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
    applyEventListener();
}

//Input recherche globale
inputSearch.addEventListener("keydown", function(recipe) {
    if(inputSearch.value.length>=3) {
        search();
    }else if (inputSearch.value.length===0){
        search();
    }
});

//Input recherche appliance
inputAppliance.addEventListener("keydown", function(recipe) {
    if(inputAppliance.value.length>=3) {
        searchAppliance();
    }else if (inputAppliance.value.length===0){
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
    }else if (inputUstensils.value.length===0) {
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
    } else if (inputIngredient.value.length===0) {
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
    let tagList = document.getElementById("listeTag");
    if (tagArray.length !== 0){
        tagArray = [];
        tagList.innerHTML="";
    }
    
    recipes.forEach(recipe =>{
        if (searchArray.includes(recipe)===false) {
            if (recipe.name.toLowerCase().includes(inputValue.toLowerCase()) || recipe.description.toLowerCase().includes(inputValue.toLowerCase())) {
                searchArray.push(recipe);
            }
            recipe.ingredients.forEach(ingredient =>{
                if (ingredient.ingredient.toLowerCase().includes(inputValue.toLowerCase())) {
                    if (searchArray.includes(recipe)===false) {
                        searchArray.push(recipe);
                    }
                }
            });
        }
        if (searchArray.length === 0){
            zeroResult.style.display="block";
        } else {
            zeroResult.style.display="none";
        }
    });
    recipeArrayTag = searchArray;
    displayRecette(searchArray);
    displayElements(searchArray);
}

function searchWithTag() {
    let newArrayTag = [];

    if (tagArray.length>=1){
        recipeArrayTag = searchArray;
    }
    
    recipeArrayTag.forEach(recipe => {
        let boolean = true;
        tagArray.forEach(tag => {
            let actualTag = tag.split("-");
            
            
            if (actualTag[0] === "appliance" && !recipe.appliance.toLowerCase().includes(actualTag[1].toLowerCase())) {
                boolean=false;
            } else if (actualTag[0] === "ustensil") {
                let boolean2 = false;
                
                recipe.ustensils.forEach(ustensil => {
                    if (ustensil.toLowerCase().includes(actualTag[1].toLowerCase())) {
                        boolean2 = true;
                    }
                });
                if (boolean2 == false){
                    boolean = false;
                }
            } else if (actualTag[0] === "ingredient") {
                    let boolean2 = false;
                    recipe.ingredients.forEach(ingredient => {
                    if (ingredient.ingredient.toLowerCase().includes(actualTag[1].toLowerCase())) {
                        boolean2 = true;
                    }
                });
                    if (boolean2 == false){
                        boolean = false;
                    }
            }
        })
        if (boolean === true){
            newArrayTag.push(recipe);
        }
        if(tagArray.length === 0){
            newArrayTag = searchArray;}
    });
    recipeArrayTag = newArrayTag;

    if (recipeArrayTag.length === 0){
        zeroResult.style.display="block";
    } else {
        zeroResult.style.display="none";
    }
    
    console.log(recipeArrayTag);
    displayRecette(recipeArrayTag);
    displayElements(recipeArrayTag);
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
        }
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
        }
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
        }
    });
}

function init () {
  displayRecette(fullArray);
  displayElements(fullArray);
}

init ();
