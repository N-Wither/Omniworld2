onEvent("recipes", event => {
    let recipeIdPrefix = 'kubejs:alloy_smelter/';
    // Mod Integration
    event.recipes.immersiveengineeringAlloy('4x refinedstorage:quartz_enriched_iron', '3x #forge:ingots/iron', '#forge:gems/quartz').id(recipeIdPrefix+'quartz_enriched_iron');
})