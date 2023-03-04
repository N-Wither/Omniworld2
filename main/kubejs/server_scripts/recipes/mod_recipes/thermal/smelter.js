onEvent('recipes', e => {
    let rip = 'kubejs:thermal_smelter/';

    e.recipes.thermal.smelter('4x omniores:bronze_ingot', [['3x forge:ingots/copper', '3x #forge:dusts/copper'], ['#forge:dusts/tin', '#forge:ingots/tin']]).id(rip+'bronze_ingot');
    e.recipes.thermal.smelter(['omniores:steel_ingot', 'thermal:slag'], [['#forge:ingots/iron', '#forge:dusts/iron'], ['#forge:coal_coke', '#forge:dusts/coal_coke']]).id(rip+'steel_ingot');
    e.recipes.thermal.smelter('simplyjetpacks:armorplating_te2', ['simplyjetpacks:armorplating_te1', '4x #forge:ingots/bronze']).id(rip + 'armorplating_te2');
    e.recipes.thermal.smelter('simplyjetpacks:armorplating_te3', ['simplyjetpacks:armorplating_te2', '4x #forge:ingots/invar']).id(rip + 'armorplating_te3');
    e.recipes.thermal.smelter('simplyjetpacks:armorplating_te4', ['simplyjetpacks:armorplating_te3', '4x #forge:ingots/enderium']).id(rip + 'armorplating_te4');
})