onEvent('recipes', event => {
    let recipeIdPrefix = 'kubejs:create_mixing/';

    event.recipes.createMixing('4x refinedstorage:quartz_enriched_iron', [[INGOT(3,'iron'), DUST(3,'iron')], [GEM(1,'quartz'), DUST(1,'quartz')]]).heated().id(recipeIdPrefix+'quartz_enriched_iron');

})