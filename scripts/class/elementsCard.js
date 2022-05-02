class recipesElements {
    constructor(data) {
        this.ingredients = data.ingredients
        this.appliance = data.appliance
        this.ustensils = data.ustensils
    }

    applianceDom() {
        const allAppliance = document.createElement("ul");

        const appliance = document.createElement("li");
        allAppliance.appendChild(appliance);
        appliance.innerHTML = `${this.appliance}`;

        return allAppliance;
    }

    ustensilsDom() {
        const allUstensils = document.createElement("ul");

        const ustensils = document.createElement("li");
        allUstensils.appendChild(ustensils);
        ustensils.innerHTML = `${this.ustensils}`;

        return allUstensils;
    }

    ingredientDom(data) {
        const {ingredient} = data;
        const allIngredients = document.createElement("ul");

        const ingredients = document.createElement("li");
        allIngredients.appendChild(ingredients);
        ingredients.innerHTML = `${ingredient}`;
        
        return allIngredients;
    }
}