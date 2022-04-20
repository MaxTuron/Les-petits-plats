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
        <h1>${this.name}</h1>
        <p>Temps: ${this.time}<i class="fas fa-clock"></i></p>`;
        
        const ingedientsRecipe = document.createElement("div");
        detailRecipe.appendChild(ingedientsRecipe);
        this.ingredients.forEach((ingredient) =>{
            const ingedients = document.createElement("div");
            ingedientsRecipe.appendChild(ingedients);

            
            if (ingredient.quantity===undefined){
                ingredient.quantity="";
            } 
            if (ingredient.unit===undefined){
                ingredient.unit="";
            }
            ingedients.innerHTML = `${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}`;
        });

        const descriptionRecipe = document.createElement("p");
        detailRecipe.appendChild(descriptionRecipe);
        descriptionRecipe.innerHTML=`${this.description}`;

        return infoRecipe;
    }
}