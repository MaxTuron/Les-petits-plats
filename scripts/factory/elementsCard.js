function applianceFactory(data) {
    let appliance = data;
    
    function applianceDOM() {
        
        let appliances = document.createElement("li");
        appliances.className="elementAppliance";
        appliances.innerHTML = `${appliance}`;

        
        
        return (appliances);
    }
    return {appliance, applianceDOM}
}


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