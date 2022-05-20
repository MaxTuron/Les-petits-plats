function applianceTagFactory(data) {
    let appliance = data;

    function applianceTagDOM() {

        let appliancesTag = document.createElement("p");
        appliancesTag.innerHTML = `${appliance} <i class="fas fa-times"></i>`;
        appliancesTag.setAttribute("data-tagtype","applianceTag");
        return (appliancesTag);
    }
    return {appliance, applianceTagDOM}
}