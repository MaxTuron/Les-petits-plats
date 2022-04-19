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

    //CREATION DES CARTES DES RECETTES
    creaCarteDom(){
        const article = document.createElement("article");
        article.innerHTML = `
        <p>ID: ${this.id}</p>
        <p>Nom: ${this.name}</p>
        <p>Personnes: ${this.servings}</p>
        <p>${this.ingredients}</p> 
        <p>Temps: ${this.time}</p>
        <p>Description: ${this.description}</p>
        <p>Ustensiles: ${this.ustensils}</p>
        <p>---------------------------------------------------------------------------------------------------------</p>
        `;


        return article;
    }
}