onEvent("recipes", event => {
    let recipeIdPrefix = 'kubejs:alloy_smelter/';
    // Mod Integration
    event.recipes.immersiveengineeringAlloy('4x refinedstorage:quartz_enriched_iron', [INGOT(3,'iron'), DUST(3,'iron')], [GEM(1,'quartz'), DUST(1,'quartz')]).id(recipeIdPrefix+'quartz_enriched_iron');
})