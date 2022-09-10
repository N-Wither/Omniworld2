onEvent('recipes', event => {
    // Mystical Agriculture Recipe Override
    let recipeIdPrefix = 'mysticalagriculture:essence/'
    event.recipes.cucumber.shaped_no_mirror("3x omniores:cobalt_ingot", ['EEE', 'E E', 'EEE'], {E: "mysticalagriculture:cobalt_essence"}).id(recipeIdPrefix+'tconstruct/cobalt_ingot');
    event.recipes.cucumber.shaped_no_mirror("4x omniores:osmium_ingot", ['EEE', 'E E', 'EEE'], {E: "mysticalagriculture:osmium_essence"}).id(recipeIdPrefix+'mekanism/osmium_ingot');
    event.recipes.cucumber.shaped_no_mirror("8x omniores:fluorite_gem", ['EEE', 'E E', 'EEE'], {E: "mysticalagriculture:fluorite_essence"}).id(recipeIdPrefix+'mekanism/fluorite');
})