onEvent('worldgen.add', event => {
    const {anchors} = event;

    let end = '^the_end';

    function genOre(id, biomes, material, count, minHeight, maxHeight, maxSize){
        event.addOre(ore => {
            ore.id = id;
            ore.biomes= biomes;
            ore.addTarget("minecraft:end_stone", `omniores:${material}_ore_end_stone`);
            ore.count([count, count]).squared().uniformHeight(anchors.absolute(minHeight), anchors.absolute(maxHeight));
            ore.size = maxSize;
            ore.worldgenLayer = 'underground_ores';
        })
    }

    // Coal
    genOre('kubejs:coal_ore_end', end, 'coal', 8, 0, 96, 8);

    // Copper
    genOre('kubejs:copper_ore_end', end, 'copper', 10, 0, 96, 6);

    // Iron
    genOre('kubejs:iron_ore_end', end, 'iron', 16, 0, 96, 12);

    // Gold
    genOre('kubejs:gold_ore_end', end, 'gold', 8, 0, 96, 10);

    // Quartz
    genOre('kubejs:quartz_ore_end', end, 'quartz', 10, 0, 96, 12);

    // Lapis
    genOre('kubejs:lapis_ore_end', end, 'lapis', 6, 0, 48, 6);

    // Redstone
    genOre('kubejs:redstone_ore_end', end, 'redstone', 8, 0, 32, 8);

    // Diamond
    genOre('kubejs:diamond_ore_end', end, 'diamond', 6, 0, 30, 8);

    // Emerald
    genOre('kubejs:emerald_ore_end', end, 'emerald', 3, 0, 96, 1);

    // Tin
    genOre('kubejs:tin_ore_end', end, 'tin', 10, 0, 96, 8);

    // Lead
    genOre('kubejs:lead_ore_end', end, 'lead', 10, 0, 72, 9);

    // Nickel
    genOre('kubejs:nickel_ore_end', end, 'nickel', 8, 0, 92, 8);

    // Silver
    genOre('kubejs:silver_ore_end', end, 'silver', 12, 0, 100, 9);

    // Cobalt
    genOre('kubejs:cobalt_ore_end', end, 'cobalt', 8, 0, 96, 6);

    // Osmium
    genOre('kubejs:osmium_ore_end', end, 'osmium', 12, 0, 48, 8);

    // Iridium
    genOre('kubejs:iridium_ore_end', end, 'iridium', 16, 0, 64, 8);

    // Uranium
    genOre('kubejs:uranium_ore_end', end, 'uranium', 8, 0, 64, 10);

    // Aluminum
    genOre('kubejs:aluminum_ore_end', end, 'aluminum', 8, 0, 98, 9);

    // Cinnabar
    genOre('kubejs:cinnabar_ore_end', end, 'cinnabar', 10, 0, 96, 6);

    // Sulfur
    genOre('kubejs:sulfur_ore_end', end, 'sulfur', 10, 0, 96, 10);

    // Potassium Nitrate
    genOre('kubejs:potassium_nitrate_ore_end', end, 'potassium_nitrate', 8, 0, 96, 8);

    // Fluorite
    genOre('kubejs:fluorite_ore_end', end, 'fluorite', 8, 0, 36, 10);
})