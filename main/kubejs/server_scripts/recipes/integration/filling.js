onEvent('recipes', event => {
    function filling(input, fluid, output, id){
        event.recipes.thermal.bottler(output, [fluid, input]).id('kubejs:integration/filling/thermal_bottler/'+id);
        /*
        event.custom({
            "type":"immersiveengineering:bottling_machine",
            "result":{"item": output},
            "input":input.toJson,
            "fluid":fluid.toJson
        }).id('kubejs:integration/filling/immersiveengineering_bottling_machine/'+id);
        */
       /*{
        "type":"immersiveengineering:bottling_machine",
        "result":{"item":"minecraft:wet_sponge"},
        "input":{"item":"minecraft:sponge"},
        "fluid":{"tag":"minecraft:water","amount":1000}}
        */
        event.recipes.createFilling(output, [input, fluid]).id('kubejs:integration/filling/create_filling/'+id);
    }
    
    // filling("minecraft:glass_bottle", Fluid.of('#tconstruct:blood', 250), "hexerei:blood_bottle", 'blood_bottle_tconstruct');
    // filling("minecraft:glass_bottle", Fluid.of('biomesoplenty:blood', 250), "hexerei:blood_bottle", 'blood_bottle_biomesoplenty');
    // filling("minecraft:glass_bottle", Fluid.of('hexerei:blood_fluid', 250), "hexerei:blood_bottle", 'blood_bottle');
    // filling("minecraft:glass_bottle", Fluid.of('hexerei:quicksilver_fluid', 250), "hexerei:quicksilver_bottle", 'quicksilver_bottle');
    // filling("minecraft:glass_bottle", Fluid.of('hexerei:tallow_fluid', 250), "hexerei:tallow_bottle", 'tallow_bottle');
    // filling("minecraft:glass_bottle", Fluid.of('minecraft:lava', 250), "hexerei:lava_bottle", 'lava_bottle');
    // filling("minecraft:glass_bottle", Fluid.of('minecraft:milk', 250), "hexerei:milk_bottle", 'milk_bottle');
})