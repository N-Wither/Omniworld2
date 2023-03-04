onEvent('recipes', event => {
    let recipeIdPrefix = 'kubejs:create_mixing/';

    event.recipes.createMixing('4x refinedstorage:quartz_enriched_iron', [INGOT(3,'iron') ,GEM(1,'quartz')]).heated().id(recipeIdPrefix+'quartz_enriched_iron');
    event.recipes.createMixing(Fluid.of("cyclic:xpjuice", 800), [Fluid.of("experienceobelisk:raw_experience", 40)]).id(recipeIdPrefix + 'xp_trans')
})