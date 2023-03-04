onEvent('recipes', event => {
    let recipeIdPrefix = "kubejs:thermal_bottler/"

    event.recipes.thermal.bottler('simplyjetpacks:unit_glowstone', ['simplyjetpacks:unit_glowstone_empty', Fluid.of('thermal:glowstone', 1000)]).id(recipeIdPrefix + 'unit_glowstone')
    event.recipes.thermal.bottler("simplyjetpacks:unit_cryotheum", ["simplyjetpacks:unit_cryotheum_empty", Fluid.of('kubejs:cryotheum', 1000)]).id(recipeIdPrefix + 'unit_cryotheum')
})