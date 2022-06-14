//Fonction permettant l'affichage des appliances dans la liste
function applianceFactory(data) {
    let appliance = data;

    function applianceDOM() {
        //Création de la balise <li> et remplissage avec les éléments
        let appliances = document.createElement("li");
        appliances.className="elementAppliance";
        appliances.innerHTML = `${appliance}`;

        return (appliances);
    }
    return {appliance, applianceDOM}
}

//Fonction permettant l'affichage des ustensiles dans la liste
function ustensilsFactory(data) {
    let ustensils = data;

    function ustensilsDOM() {

        let ustensil = document.createElement("li");
        ustensil.className="elementUstensil";
        ustensil.innerHTML = `${ustensils}`;

        return ustensil;
    }
    return {ustensils, ustensilsDOM}
}

//Fonction permettant l'affichage des ingredients dans la liste
function ingredientFactory(data) {
    let ingredient = data;

    function ingredientDOM() {

        let ingredients = document.createElement("li");
        ingredients.className="elementIngredients";
        ingredients.innerHTML = `${ingredient}`;

        return ingredients;

    }
    return {ingredient, ingredientDOM}
}