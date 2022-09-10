onEvent("recipes", event => {
    function thermalPress(output, input, id){
        event.recipes.thermal.press(output, input).id("kubejs:thermal_press/"+id);
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
})