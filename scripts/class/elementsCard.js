function applianceFactory(data) {
    let appliance = data;

    function applianceDOM() {
        let allAppliance = document.createElement("ul");

        let appliances = document.createElement("li");
        allAppliance.appendChild(appliances);
        appliances.innerHTML = `${appliance}`;

        return (allAppliance);
    }
    return {appliance, applianceDOM}
}


function ustensilsFactory(data) {
    let ustensils = data;

    function ustensilsDOM() {
        let allUstensils = document.createElement("ul");

        let ustensil = document.createElement("li");
        allUstensils.appendChild(ustensil);
        ustensil.innerHTML = `${ustensils}`;

        return allUstensils;
    }
    return {ustensils, ustensilsDOM}
}

function ingredientFactory(data) {
    let ingredient = data;
    function ingredientDOM() {
        let allIngredients = document.createElement("ul");

        let ingredients = document.createElement("li");
        allIngredients.appendChild(ingredients);
        ingredients.innerHTML = `${ingredient}`;
        
        return allIngredients;
        
    }
    return {ingredient, ingredientDOM}
}