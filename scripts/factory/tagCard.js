function applianceTagFactory(data) {
    let appliance = data;

    function applianceTagDOM() {

        let appliancesTag = document.createElement("p");
        appliancesTag.innerHTML = `${appliance} <i class="fas fa-times close"></i>`;
        appliance.className="tag";
        appliancesTag.setAttribute("data-tagtype","applianceTag");
        appliancesTag.addEventListener("click", event => {
            if (event.target.className.includes("close") === true) {
                
                let tagValue = appliancesTag.innerText
                
                //permet de supprimer le tag visuellement (HTML balise <p>)
                appliancesTag.remove();

                //Permet de supprimer le tag du tableau
                for (i=0; i <tagValue.length; i++){
                    if (tagArray[i] === tagValue){
                        tagArray.splice(i,1);
                    }
                }
                if (tagArray.length===0){
                    search()
                }else {
                    searchWithTag();
                }
            }
        })
        
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
        ustensilsTag.addEventListener("click", event => {
            if (event.target.className.includes("close") === true) {
                
                let tagValue = ustensilsTag.innerText

                //permet de supprimer le tag visuellement (HTML balise <p>)
                ustensilsTag.remove();

                //Permet de supprimer le tag du tableau
                for (i=0; i <tagValue.length; i++){
                    if (tagArray[i] === tagValue){
                        tagArray.splice(i,1);
                    }
                }
                if (tagArray.length===0){
                    search()
                }else {
                    searchWithTag();
                }
            }
        })
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
        ingredientsTag.addEventListener("click", event => {
            if (event.target.className.includes("close") === true) {

                let tagValue = ingredientsTag.innerText

                //permet de supprimer le tag visuellement (HTML balise <p>)
                ingredientsTag.remove();

                //Permet de supprimer le tag du tableau
                for (i=0; i <tagValue.length; i++){
                    if (tagArray[i] === tagValue){
                        tagArray.splice(i,1);
                    }
                }
                if (tagArray.length===0){
                    search()
                }else {
                    searchWithTag();
                }
            }
        })
        return (ingredientsTag);
    }
    return {ingredient, ingredientsTagDOM}
}