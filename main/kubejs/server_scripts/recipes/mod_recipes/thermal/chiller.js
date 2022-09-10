onEvent('recipes', event => {
    let recipeIdPrefix = 'kubejs:thermal_chiller/';

    event.recipes.thermal.chiller("pneumaticcraft:plastic", Fluid.of('#pneumaticcraft:plastic', 1000)).id(recipeIdPrefix+'plastic');
    event.recipes.thermal.chiller("omniores:bronze_ingot", [Fluid.of('tconstruct:molten_bronze', 90), 'thermal:chiller_ingot_cast']).energy(4800).id(recipeIdPrefix + 'bronze_ingot');
})