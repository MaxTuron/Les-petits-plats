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
        const allUstensils = document.createElement("ul");

        const ustensil = document.createElement("li");
        allUstensils.appendChild(ustensil);
        ustensil.innerHTML = `${ustensils}`;

        return allUstensils;
    }
    return {ustensils, ustensilsDOM}
}

function ingredientFactory(data) {
    let ingredient = data;

    function ingredientDOM() {
        const allIngredients = document.createElement("ul");

        const ingredients = document.createElement("li");
        allIngredients.appendChild(ingredients);
        ingredients.innerHTML = `${ingredient}`;

        return allIngredients;
    }
    return {ingredient, ingredientDOM}
}