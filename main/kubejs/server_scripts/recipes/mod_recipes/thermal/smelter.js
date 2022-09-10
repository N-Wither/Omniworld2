onEvent('recipes', e => {
    let rip = 'kubejs:thermal_smelter/';

    e.recipes.thermal.smelter('4x omniores:bronze_ingot', [['3x forge:ingots/copper', '3x #forge:dusts/copper'], ['#forge:dusts/tin', '#forge:ingots/tin']]).id(rip+'bronze_ingot');
    
})