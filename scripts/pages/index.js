//Récupère toutes les recettes et déclaration des tableaux
let fullArray = recipes;
let searchArray = recipes;
let tagArray=[];
let recipeArrayTag = searchArray;

//Récupération des différents elements html
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

//Création des tags lors du click de l'utilisateur sur un élément
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
                console.log("toto")
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

//Affichages des éléments
function displayElements(searchArray){
    //Récupération des listes
    let ingredientCard = document.querySelector("#listeIngredient");
    let applianceCard = document.querySelector("#listeAppliances");
    let unstensilsCard = document.querySelector("#listeUstensils");
    //On vide les listes pour être sûr d'afficher les bons éléments
    ingredientCard.innerHTML = "";
    applianceCard.innerHTML = "";
    unstensilsCard.innerHTML = "";
    //Déclaration des tableaux contenant les éléments
    let ingredientArray =[];
    let applianceArray =[];
    let ustensilsArray =[];

    //On parcourt le tableau de recettes
    searchArray.forEach(recipe => {
        //Si l'appliance est dans une recette, mais pas dans le tableau des appliance, on l'ajoute
        if (applianceArray.includes(recipe.appliance.toLowerCase())===false) {
            applianceArray.push(recipe.appliance.toLowerCase());
        }
        recipe.ustensils.forEach(ustensil => {
            //Si l'ustensil est dans une recette, mais pas dans le tableau des appliance, on l'ajoute
            if (ustensilsArray.includes(ustensil.toLowerCase())===false) {
                ustensilsArray.push(ustensil.toLowerCase());
            }
        });
        recipe.ingredients.forEach(ingredient => {
            //Si l'ingredient est dans une recette, mais pas dans le tableau des appliance, on l'ajoute
            if (ingredientArray.includes(ingredient.ingredient.toLowerCase())===false) {
                ingredientArray.push(ingredient.ingredient.toLowerCase());
            }
        });
    });

    //Pour chaque appliance on utilise la factory qui permet la création de l'élément
    applianceArray.forEach(appliance => {
        let applianceModel = applianceFactory(appliance);
        let applianceDom = applianceModel.applianceDOM();
        applianceCard.appendChild(applianceDom);
    });

    //Pour chaque ustensil on utilise la factory qui permet la création de l'élément
    ustensilsArray.forEach(ustensil => {
        let ustensilModel = ustensilsFactory(ustensil);
        let unstensilDom = ustensilModel.ustensilsDOM();
        unstensilsCard.appendChild(unstensilDom);
    });

    //Pour chaque ingredient on utilise la factory qui permet la création de l'élément
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

    for (i = 0; i<recipes.length; i++){
        if (searchArray.includes(recipes[i])===false) {
            if (recipes[i].name.toLowerCase().includes(inputValue.toLowerCase()) || recipes[i].description.toLowerCase().includes(inputValue.toLowerCase())) {
                searchArray.push(recipes[i]);
            }         
        }
        for (j = 0; j<recipes[i].ingredients.length; j++){
            if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(inputValue.toLowerCase())) {
                if (searchArray.includes(recipes[i])===false) {
                    searchArray.push(recipes[i]);
                }
            }
        }
    }
    
    recipeArrayTag = searchArray;
    displayRecette(searchArray);
    displayElements(searchArray);
}

//Fonction de recherche lors de l'ajout ou e la suppression d'un tag
function searchWithTag() {
    let newArrayTag = [];

    //Boucle permettant de récupérer le bon tableau lors de la suppression d'un tag
    if (tagArray.length>=1){
        recipeArrayTag = searchArray;
    }

    //Parcours de toutes les recettes
    recipeArrayTag.forEach(recipe => {
        //Déclaration du boolean de vérification globale
        let booleanGlobal = true;
        //Parcours de tous les tags
        tagArray.forEach(tag => {
            let actualTag = tag.split("-");

            //Si la 1ere partie du tag est "appliance" et que la recette ne contient pas l'élément
            if (actualTag[0] === "appliance" && !recipe.appliance.toLowerCase().includes(actualTag[1].toLowerCase())) {
                //La recette n'est pas bonne et on passe le boolean global à false
                booleanGlobal=false;
            } else
                //Si la 1ere partie du tag est "ustensil"
                if (actualTag[0] === "ustensil") {
                    //On déclare un deuxième boolean à false qui servira à vérifier si l'élément est present dans la recette
                    let booleanElement = false;
                    //On parcourt les ustensils de la recette
                    recipe.ustensils.forEach(ustensil => {
                        //Si un élément correspond alors le boolean élément pass à true
                        if (ustensil.toLowerCase().includes(actualTag[1].toLowerCase())) {
                            booleanElement = true;
                        }
                    });
                    //Si le boolean element est resté à false alors la recette ne contient pas l'élément et la recette n'est pas bonne
                    if (booleanElement == false){
                        booleanGlobal = false;
                    }
                    //Fonctionnement identique avec ingredients
                } else if (actualTag[0] === "ingredient") {
                    let booleanElement = false;
                    recipe.ingredients.forEach(ingredient => {
                        if (ingredient.ingredient.toLowerCase().includes(actualTag[1].toLowerCase())) {
                            booleanElement = true;
                        }
                    });
                    if (booleanElement == false){
                        booleanGlobal = false;
                    }
                }
        })
        //Si le boolean global est toujours à true, alors la recette correspond à tous les critéres et peut être ajouté au tableau
        if (booleanGlobal === true){
            newArrayTag.push(recipe);
        }
        //Si le tableau des tags est vide alors on repart du tableau searchArray
        if(tagArray.length === 0){
            newArrayTag = searchArray;}
    });
    recipeArrayTag = newArrayTag;

    //Si le tableau de recette est vide c'est que le recherche ne trouve aucune recette et on affiche donc un message d'erreur
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

//Fonction lancée au chargement de la page qui affiche toutes les recettes et tous les éléments
function init () {
  displayRecette(fullArray);
  displayElements(fullArray);
}

init ();
