onEvent("recipes", event => {
    function thermalPress(output, input, id, energy){
        if(energy == undefined) {
            event.recipes.thermal.press(output, input).id("kubejs:thermal_press/"+id);
        }
        else {
            event.recipes.thermal.press(output, input).id("kubejs:thermal_press/"+id).energy(energy);
        }
    }
    let rip = 'kubejs:thermal_press/'

    thermalPress("ftbic:dense_copper_plate", "8x #forge:plates/copper", "dense_copper_plate");
    thermalPress("minecraft:diamond", "ftbic:graphene", "graphene");
    thermalPress("ftbic:compressed_coal_ball", "ftbic:coal_ball", "compressed_coal_ball");
    thermalPress("ftbic:carbon_plate", "ftbic:carbon_fiber_mesh", "carbon_plate");
    thermalPress('omniores:copper_plate', '#forge:ingots/copper', 'copper_plate')
    event.recipes.thermal.press('9x omniores:bronze_ingot', ['#forge:storage_blocks/bronze', 'thermal:press_unpacking_die']).id(rip + 'unpacking/from_bronze_block').energy(400);
    event.recipes.thermal.press('omniores:bronze_ingot', ['9x #forge:nuggets/bronze', 'thermal:press_packing_3x3_die']).id(rip + 'packing/from_bronze_nugget').energy(400);
    event.recipes.thermal.press('9x omniores:bronze_nugget', ['#forge:ingots/bronze', 'thermal:press_unpacking_die']).id(rip + 'unpacking/from_bronze_ingot').energy(400);
    event.recipes.thermal.press('omniores:bronze_block', ['9x #forge:ingots/bronze', 'thermal:press_packing_3x3_die']).id(rip + 'packing/from_bronze_ingot').energy(400);
    thermalPress('omniores:steel_plate', '#forge:ingots/steel', 'steel_plate', 2400);
    thermalPress('omniores:emerald_gear', [GEM(4, 'emerald'), "thermal:press_gear_die"], 'emerald_gear', 2400);
    thermalPress('omniores:diamond_gear', [GEM(4, 'diamond'), "thermal:press_gear_die"], 'diamond_gear', 2400);
    thermalPress('omniores:ruby_gear', [GEM(4, 'ruby'), "thermal:press_gear_die"], 'ruby_gear', 2400);
    thermalPress('omniores:sapphire_gear', [GEM(4, 'sapphire'), "thermal:press_gear_die"], 'sapphire_gear', 2400);
    thermalPress('omniores:lapis_gear', [GEM(4, 'lapis'), "thermal:press_gear_die"], 'lapis_gear', 2400);
    thermalPress('omniores:quartz_gear', [GEM(4, 'quartz'), "thermal:press_gear_die"], 'quartz_gear', 2400);
    thermalPress('omniores:iron_gear', [INGOT(4, 'iron'), 'thermal:press_gear_die'], 'iron_gear', 2400);
    thermalPress('omniores:copper_gear', [INGOT(4, 'copper'), 'thermal:press_gear_die'], 'copper_gear', 2400);
    thermalPress('omniores:gold_gear', [INGOT(4, 'gold'), 'thermal:press_gear_die'], 'gold_gear', 2400);

})