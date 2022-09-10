onEvent('worldgen.add', event => {
    const {anchors} = event;

    function genOre(id, biomes, material, count, minHeight, maxHeight, maxSize){
        event.addOre(ore => {
            ore.id = id;
            ore.biomes= biomes;
            ore.addTarget(`minecraft:netherrack`, `omniores:${material}_ore_netherrack`);
            ore.addTarget(`minecraft:basalt`, `omniores:${material}_ore_basalt`);
            ore.addTarget(`minecraft:blackstone`, `omniores:${material}_ore_blackstone`);
            ore.addTarget(`create:scorchia`, `omniores:${material}_ore_create_scorchia`);
            ore.addTarget(`create:scoria`, `omniores:${material}_ore_create_scoria`);
            ore.count([count, count]).squared().uniformHeight(anchors.absolute(minHeight), anchors.absolute(maxHeight));
            ore.size = maxSize;
            ore.worldgenLayer = 'underground_ores';
        })
    }

    // Coal
    genOre('kubejs:coal_ore_nether', '^nether', 'coal', 16, 0, 127, 16);

    // Copper
    genOre('kubejs:copper_ore_nether', '^nether', 'copper', 18, 0, 127, 10);

    // Iron
    genOre('kubejs:iron_ore_nether', '^nether', 'iron', 18, 0, 127, 13);

    // Gold
    genOre('kubejs:gold_ore_nether', '^nether', 'gold', 24, 0, 127, 10);

    // Quartz
    genOre('kubejs:quartz_ore_nether', '^nether', 'quartz', 24, 0, 127, 18);

    // Lapis
    genOre('kubejs:lapis_ore_nether', '^nether', 'lapis', 8, 0, 48, 8);

    // Redstone
    genOre('kubejs:redstone_ore_nether', '^nether', 'redstone', 10, 0, 32, 10);

    // Diamond
    genOre('kubejs:diamond_ore_nether', '^nether', 'diamond', 6, 0, 16, 10);

    // Emerald
    genOre('kubejs:emerald_ore_nether', '^nether', 'emerald', 4, 0, 127, 1);

    // Tin
    genOre('kubejs:tin_ore_nether', '^nether', 'tin', 16, 0, 127, 8);

    // Lead
    genOre('kubejs:lead_ore_nether', '^nether', 'lead', 12, 0, 72, 9);

    // Nickel
    genOre('kubejs:nickel_ore_nether', '^nether', 'nickel', 12, 0, 92, 8);

    // Silver
    genOre('kubejs:silver_ore_nether', '^nether', 'silver', 16, 0, 100, 9);

    // Cobalt
    genOre('kubejs:cobalt_ore_nether', '^nether', 'cobalt', 24, 0, 127, 6);

    // Osmium
    genOre('kubejs:osmium_ore_nether', '^nether', 'osmium', 24, 0, 64, 8);

    // Iridium
    genOre('kubejs:iridium_ore_nether', '^nether', 'iridium', 24, 0, 64, 6);

    // Uranium
    genOre('kubejs:uranium_ore_nether', '^nether', 'uranium', 12, 0, 64, 10);

    // Aluminum
    genOre('kubejs:aluminum_ore_nether', '^nether', 'aluminum', 12, 0, 98, 9);

    // Cinnabar
    genOre('kubejs:cinnabar_ore_nether', '^nether', 'cinnabar', 20, 0, 127, 6);

    // Sulfur
    genOre('kubejs:sulfur_ore_nether', '^nether', 'sulfur', 20, 0, 127, 10);

    // Potassium Nitrate
    genOre('kubejs:potassium_nitrate_ore_nether', '^nether', 'potassium_nitrate', 20, 0, 127, 8);

    // Fluorite
    genOre('kubejs:fluorite_ore_nether', '^nether', 'fluorite', 10, 0, 36, 10);


})