function applianceTagFactory(data) {
    let appliance = data;

    function applianceTagDOM() {

        let appliancesTag = document.createElement("p");
        appliancesTag.innerHTML = `${appliance} <i class="fas fa-times close"></i>`;
        appliance.className="tag";
        appliancesTag.setAttribute("data-tagtype","applianceTag");
        
        return (appliancesTag);
    }
    return {appliance, applianceTagDOM}
}

function ustensilsTagFactory(data) {
    let ustensil = data;

    function ustensilsTagDOM() {

        let ustensilsTag = document.createElement("p");
        ustensilsTag.innerHTML = `${ustensil} <i class="fas fa-times close"></i>`;
        ustensil.className="tag";
        ustensilsTag.setAttribute("data-tagtype","ustensilsTag");
        
        return (ustensilsTag);
    }
    return {ustensil, ustensilsTagDOM}
}

function ingredientsTagFactory(data) {
    let ingredient = data;

    function ingredientsTagDOM() {

        let ingredientsTag = document.createElement("p");
        ingredientsTag.innerHTML = `${ingredient} <i class="fas fa-times close"></i>`;
        ingredient.className="tag";
        ingredientsTag.setAttribute("data-tagtype","ingredientsTag");
        
        return (ingredientsTag);
    }
    return {ingredient, ingredientsTagDOM}
}