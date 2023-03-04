// priority: 0

onEvent("recipes", e => {
    e.replaceInput('rebornstorage:super_advanced_processor', 'extradisks:withering_processor');
    e.replaceInput({output: '#forge:silicon'}, 'minecraft:quartz', '#forge:dusts/quartz');
    e.replaceInput({output: "industrialforegoing:mycelial_meatallurgic"}, "#forge:ingots", "#forge:ingots/iron");
    e.replaceInput("culturaldelights:eggplant", "#forge:crops/eggplant");
    e.replaceInput("culturaldelights:cucumber", "#forge:crops/cucumber");
    e.replaceInput("farmersdelight:cooked_rice", "#forge:steamed_rices");
    e.replaceInput("culturaldelights:corn_kernels", "#forge:seeds/corn");
    e.replaceInput({output: "thermal:machine_frame"}, "#forge:ingots/iron", "immersiveengineering:component_iron");
    e.replaceInput("create:raw_zinc", "#forge:raw_materials/zinc");
    e.replaceInput("nourished_end:cobalt", "#forge:raw_materials/cobalt");
    e.replaceOutput("nourished_end:cobalt", "omniores:raw_cobalt");
    e.replaceInput("mysticalagriculture:blank_record", ["mysticalagriculture:blank_record", "etched:blank_music_disc"]);
    e.replaceInput({mod: 'gobber2'}, 'minecraft:magenta_bed', '#minecraft:beds');
    e.replaceInput({mod: 'gobber2'}, 'minecraft:feather', '#forge:feathers');
    e.replaceInput({mod: 'gobber2'}, '#minecraft:diamond_ores', '#forge:ores/diamond');
    e.replaceInput({mod: 'gobber2'}, '#minecraft:emerald_ores', '#forge:ores/emerald');
    e.replaceInput({mod: 'gobber2'}, '#minecraft:gold_ores', '#forge:ores/gold');
    e.replaceInput({id: 'mekanism:control_circuit/basic'}, '#forge:ingots/osmium', '#forge:plates/osmium');
    e.replaceInput({id: 'mekanism:enriching/enriched/carbon'}, '#minecraft:coals', [
        'minecraft:coal',
        '#forge:dusts/coal',
        '#forge:charcoal',
        '#forge:dusts/charcoal',
        '#forge:coal_coke',
        '#forge:dusts/coal_coke',
        '#forge:coal_petcoke',
        '#forge:dusts/coal_petcoke'
    ]);
    e.replaceInput({id: 'scannable:scanner'}, '#forge:dusts/redstone', '#forge:circuits/basic');
    e.replaceInput({}, "pneumaticcraft:printed_circuit_board", '#forge:circuits/basic');
    e.replaceInput("pneumaticcraft:plastic", '#forge:plastic');
    e.replaceInput('hexerei:animal_fat', '#forge:tallow');
    e.replaceInput('delightful:animal_fat', '#forge:tallow');
    e.replaceInput({id: "gag:time_sand_pouch"}, "minecraft:nautilus_shell", "minecraft:clock");
    e.replaceInput({id: "miniutilities:angel_ring_crafting"}, '#forge:nether_stars', "gobber2:dragon_elytra");
    e.replaceInput({id: "miniutilities:angel_ring_crafting"}, '#forge:glass', "miniutilities:chorus_opinium_core");
    e.replaceInput({output: /botanypotstiers:creative.*/}, "minecraft:enchanted_golden_apple", "mysticalagradditions:creative_essence");
})