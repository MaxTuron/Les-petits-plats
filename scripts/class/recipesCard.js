class recipesInfos {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.servings = data.servings
        this.ingredients = data.ingredients
        this.quantity = data.quantity
        this.unit = data.unit
        this.time = data.time
        this.description = data.description
        this.appliance = data.appliance
        this.ustensils = data.ustensils
    }

    carteDom() {
        const infoRecipe = document.createElement("article");
        infoRecipe.className=("recipeCards");

        const detailRecipe = document.createElement("div");
        infoRecipe.appendChild(detailRecipe);
        detailRecipe.className=("detailRecipe");
        detailRecipe.innerHTML = `
        <h2 class="recipeTitle">${this.name}</h2>        
        <p class="recipeTime"><b>${this.time}</b><i class="fas fa-clock"></i></p>`;

        const ingedientsRecipe = document.createElement("div");
        ingedientsRecipe.className="recipeIngredients";
        detailRecipe.appendChild(ingedientsRecipe);
        this.ingredients.forEach((ingredient) =>{
            const ingedients = document.createElement("div");
            ingedientsRecipe.appendChild(ingedients);


            if (ingredient.quantity===undefined && ingredient.unit===undefined){
                ingedients.innerHTML = `<b>${ingredient.ingredient}</b>`;
            } else if (ingredient.unit===undefined){
                ingedients.innerHTML = `<b>${ingredient.ingredient}</b> : ${ingredient.quantity}`;
            }else if (ingredient.quantity===undefined){
                ingedients.innerHTML = `<b>${ingredient.ingredient}</b> ${ingredient.unit}`;
            } else {
                ingedients.innerHTML = `<b>${ingredient.ingredient}</b> : ${ingredient.quantity} ${ingredient.unit}`;
            }

        });

        const descriptionRecipe = document.createElement("p");
        descriptionRecipe.className="recipeDescription";
        detailRecipe.appendChild(descriptionRecipe);
        descriptionRecipe.innerHTML=`${this.description}`;

        return infoRecipe;
    }
}