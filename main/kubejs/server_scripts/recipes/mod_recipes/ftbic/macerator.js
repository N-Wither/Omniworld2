onEvent("recipes", event => {;
    let recipeIdPrefix = 'kubejs:ftbic_macerator/'

    event.recipes.ftbic.macerating("jaopca:dusts.peridot", "#forge:gems/peridot").id(recipeIdPrefix+'peridot_dust');
})