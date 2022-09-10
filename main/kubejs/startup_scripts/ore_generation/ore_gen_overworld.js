onEvent('worldgen.add', event => {
    const {anchors} = event;

    function genOre(id, biomes, material, count, isTriangle, minHeight, maxHeight, maxSize, noSurface){
        event.addOre(ore => {
            ore.id = id;
            ore.biomes= biomes;
            ore.addTarget('minecraft:stone', `omniores:${material}_ore_stone`);
            ore.addTarget(`minecraft:andesite`, `omniores:${material}_ore_andesite`);
            ore.addTarget(`minecraft:diorite`, `omniores:${material}_ore_diorite`);
            ore.addTarget(`minecraft:granite`, `omniores:${material}_ore_granite`);
            ore.addTarget(`minecraft:calcite`, `omniores:${material}_ore_calcite`);
            ore.addTarget(`minecraft:stone`, `omniores:${material}_ore_stone`);
            ore.addTarget(`minecraft:tuff`, `omniores:${material}_ore_tuff`);
            ore.addTarget(`minecraft:deepslate`, `omniores:${material}_ore_deepslate`);
            // ore.addTarget(`minecraft:netherrack`, `omniores:${material}_ore_netherrack`);
            // ore.addTarget(`minecraft:basalt`, `omniores:${material}_ore_basalt`);
            // ore.addTarget(`minecraft:blackstone`, `omniores:${material}_ore_blackstone`);
            // ore.addTarget(`minecraft:end_stone`, `omniores:${material}_ore_end_stone`);
            ore.addTarget(`create:limestone`, `omniores:${material}_ore_create_limestone`);
            ore.addTarget(`create:scorchia`, `omniores:${material}_ore_create_scorchia`);
            ore.addTarget(`create:scoria`, `omniores:${material}_ore_create_scoria`);
            ore.addTarget(`quark:jasper`, `omniores:${material}_ore_quark_jasper`);
            ore.addTarget(`quark:limestone`, `omniores:${material}_ore_quark_limestone`);
            ore.addTarget(`quark:shale`, `omniores:${material}_ore_quark_shale`);
            if(isTriangle){
                ore.count([count, count]).squared().triangleHeight(anchors.absolute(minHeight), anchors.absolute(maxHeight));
            }
            else {
                ore.count([count, count]).squared().uniformHeight(anchors.absolute(minHeight), anchors.absolute(maxHeight));
            }
            ore.size = maxSize;
            if(noSurface != undefined){
                ore.noSurface = noSurface;
            }
            ore.worldgenLayer = 'underground_ores';
        })
    }

    // Coal

    event.addOre(ore => {
        ore.id = 'kubejs:coal_ore_overworld_1';
        ore.biomes = {not: '^nether'};
        ore.addTarget('minecraft:stone', "omniores:coal_ore_stone");
        ore.addTarget("minecraft:andesite", "omniores:coal_ore_andesite");
        ore.addTarget("minecraft:diorite", "omniores:coal_ore_diorite");
        ore.addTarget("minecraft:granite", "omniores:coal_ore_granite");
        ore.addTarget("minecraft:calcite", "omniores:coal_ore_calcite");
        ore.addTarget("minecraft:stone", "omniores:coal_ore_stone");
        ore.addTarget("minecraft:tuff", "omniores:coal_ore_tuff");
        ore.addTarget("minecraft:deepslate", "omniores:coal_ore_deepslate");
        // ore.addTarget("minecraft:netherrack", "omniores:coal_ore_netherrack");
        // ore.addTarget("minecraft:basalt", "omniores:coal_ore_basalt");
        // ore.addTarget("minecraft:blackstone", "omniores:coal_ore_blackstone");
        // ore.addTarget("minecraft:end_stone", "omniores:coal_ore_end_stone");
        ore.addTarget("create:limestone", "omniores:coal_ore_create_limestone");
        ore.addTarget("create:scorchia", "omniores:coal_ore_create_scorchia");
        ore.addTarget("create:scoria", "omniores:coal_ore_create_scoria");
        ore.addTarget("quark:jasper", "omniores:coal_ore_quark_jasper");
        ore.addTarget("quark:limestone", "omniores:coal_ore_quark_limestone");
        ore.addTarget("quark:shale", "omniores:coal_ore_quark_shale");
        ore.count([10,16])
            .squared()
            .uniformHeight(
                anchors.absolute(136),
                anchors.absolute(320)
            );
        ore.size = 20;
        ore.worldgenLayer = "underground_ores";
    })

    event.addOre(ore => {
        ore.id = 'kubejs:coal_ore_overworld_2';
        ore.biomes = {not: '^nether'};
        ore.addTarget('minecraft:stone', "omniores:coal_ore_stone");
        ore.addTarget("minecraft:andesite", "omniores:coal_ore_andesite");
        ore.addTarget("minecraft:diorite", "omniores:coal_ore_diorite");
        ore.addTarget("minecraft:granite", "omniores:coal_ore_granite");
        ore.addTarget("minecraft:calcite", "omniores:coal_ore_calcite");
        ore.addTarget("minecraft:stone", "omniores:coal_ore_stone");
        ore.addTarget("minecraft:tuff", "omniores:coal_ore_tuff");
        ore.addTarget("minecraft:deepslate", "omniores:coal_ore_deepslate");
        // ore.addTarget("minecraft:netherrack", "omniores:coal_ore_netherrack");
        // ore.addTarget("minecraft:basalt", "omniores:coal_ore_basalt");
        // ore.addTarget("minecraft:blackstone", "omniores:coal_ore_blackstone");
        // ore.addTarget("minecraft:end_stone", "omniores:coal_ore_end_stone");
        ore.addTarget("create:limestone", "omniores:coal_ore_create_limestone");
        ore.addTarget("create:scorchia", "omniores:coal_ore_create_scorchia");
        ore.addTarget("create:scoria", "omniores:coal_ore_create_scoria");
        ore.addTarget("quark:jasper", "omniores:coal_ore_quark_jasper");
        ore.addTarget("quark:limestone", "omniores:coal_ore_quark_limestone");
        ore.addTarget("quark:shale", "omniores:coal_ore_quark_shale");
        ore.count([8,12])
            .squared()
            .triangleHeight(
                anchors.absolute(0),
                anchors.absolute(190)
            );
        ore.size = 20;
        ore.noSurface = 0.5;
        ore.worldgenLayer = "underground_ores";
    })

    // Iron
    genOre('kubejs:iron_ore_overworld_1', {not: '^nether'}, 'iron', 40, true, 80, 320, 13);
    genOre('kubejs:iron_ore_overworld_2', {not: '^nether'}, 'iron', 24, true, -24, 72, 13);
    genOre('kubejs:iron_ore_overworld_3', {not: '^nether'}, 'iron', 18, false, -63, 64, 10);

    // Copper
    genOre('kubejs:copper_ore_overworld', {not: 'minecraft:dripstone_caves', not: '^nether'}, 'copper', 16, true, 0, 96, 12);
    genOre('kubejs:copper_ore_dripstone', 'minecraft:dripstone_caves', 'copper', 20, true, 0, 96, 24);

    // Gold
    genOre('kubejs:gold_ore_overworld_1', {not: '^nether'}, 'gold', 8, true, -64, 32, 12, 0.5);
    genOre('kubejs:gold_ore_overworld_2', {not: '^nether'}, 'gold', 8, false, -64, -32, 12, 0.5);
    genOre('kubejs:gold_ore_overworld_mesa', '^mesa', 'gold', 50, false, 32, 256, 12);

    // Lapis
    genOre('kubejs:lapis_ore_overworld_1', {not: '^nether'}, 'lapis', 4, true, -32, 30, 12);
    genOre('kubejs:lapis_ore_overworld_2', {not: '^nether'}, 'lapis', 8, false, -64, 64, 12, 1.0);

    // Diamond
    genOre('kubejs:diamond_ore_overworld_1', {not: '^nether'}, 'diamond', 12, true, -142, 14, 6, 0.3); // Set minHeight to -142 to make sure diamonds are more common downwards.
    event.addOre(ore => {
        ore.id = 'kubejs:diamond_ore_overworld_2';
        ore.biomes = {not: '^nether'};
        ore.addTarget('minecraft:stone', "omniores:diamond_ore_stone");
        ore.addTarget("minecraft:andesite", "omniores:diamond_ore_andesite");
        ore.addTarget("minecraft:diorite", "omniores:diamond_ore_diorite");
        ore.addTarget("minecraft:granite", "omniores:diamond_ore_granite");
        ore.addTarget("minecraft:calcite", "omniores:diamond_ore_calcite");
        ore.addTarget("minecraft:stone", "omniores:diamond_ore_stone");
        ore.addTarget("minecraft:tuff", "omniores:diamond_ore_tuff");
        ore.addTarget("minecraft:deepslate", "omniores:diamond_ore_deepslate");
        // ore.addTarget("minecraft:netherrack", "omniores:diamond_ore_netherrack");
        // ore.addTarget("minecraft:basalt", "omniores:diamond_ore_basalt");
        // ore.addTarget("minecraft:blackstone", "omniores:diamond_ore_blackstone");
        // ore.addTarget("minecraft:end_stone", "omniores:diamond_ore_end_stone");
        ore.addTarget("create:limestone", "omniores:diamond_ore_create_limestone");
        ore.addTarget("create:scorchia", "omniores:diamond_ore_create_scorchia");
        ore.addTarget("create:scoria", "omniores:diamond_ore_create_scoria");
        ore.addTarget("quark:jasper", "omniores:diamond_ore_quark_jasper");
        ore.addTarget("quark:limestone", "omniores:diamond_ore_quark_limestone");
        ore.addTarget("quark:shale", "omniores:diamond_ore_quark_shale");
        ore.squared()
            .triangleHeight(
                anchors.absolute(-142),
                anchors.absolute(14)
            )
        ore.size = 18;
        ore.noSurface = 0.5;
        ore.chance = 9;
        ore.worldgenLayer = "underground_ores";
    })
    genOre('kubejs:diamond_ore_overworld_3', {not: '^nether'}, 'diamond', 8, true, -142, 14, 12, 0.7);

    // Redstone
    genOre('kubejs:redstone_ore_overworld_1', {not: '^nether'}, 'redstone', 8, false, -63, 15, 12);
    genOre('kubejs:redstone_ore_overworld_2', {not: '^nether'}, 'redstone', 16, true, -92, -34, 10);

    // Emerald
    genOre('kubejs:emerald_ore_overworld', '^extreme_hills', 'emerald', 50, true, -16, 320, 1);

    // Tin
    genOre('kubejs:tin_ore_overworld_1', {not: '^nether'}, 'tin', 14, true, -16, 96, 10);
    genOre('kubejs:tin_ore_overworld_2', {not: '^nether'}, 'tin', 10, false, -16, 96, 8);

    // Lead
    genOre('kubejs:lead_ore_overworld_1', {not: '^nether'}, 'lead', 10, true, -120, 16, 10);
    genOre('kubejs:lead_ore_overworld_2', {not: '^nether'}, 'lead', 8, false, -63, 16, 6);

    // Zinc
    genOre('kubejs:zinc_ore_overworld_1', {not: '^nether'}, 'zinc', 10, true, -196, 70, 10);
    genOre('kubejs:zinc_ore_overworld_2', {not: '^nether'}, 'zinc', 8, false, -63, 70, 6);

    // Nickel
    genOre('kubejs:nickel_ore_overworld_1', {not: '^nether'}, 'nickel', 10, true, -32, 72, 10);
    genOre('kubejs:nickel_ore_overworld_2', {not: '^nether'}, 'nickel', 6, false, -32, 72, 6);

    // Silver
    genOre('kubejs:silver_ore_overworld_1', {not: '^nether'}, 'silver', 10, true, -63, 32, 8);
    genOre('kubejs:silver_ore_overworld_2', {not: '^nether'}, 'silver', 12, false, -63, 32, 6);

    // Osmium
    genOre('kubejs:osmium_ore_overworld_1', {not: '^nether'}, 'osmium', 14, true, -127, 32, 8);
    genOre('kubejs:osmium_ore_overworld_2', {not: '^nether'}, 'osmium', 10, false, -63, 32, 8);

    // Iridium
    genOre('kubejs:iridium_ore_overworld_1', {not: '^nether'}, 'iridium', 10, true, -127, 0, 6);
    genOre('kubejs:iridium_ore_overworld_2', {not: '^nether'}, 'iridium', 4, false, -63, 0, 4);

    // Uranium
    genOre('kubejs:uranium_ore_overworld_1', {not: '^nether'}, 'uranium', 8, true, -32, 63, 10);
    genOre('kubejs:uranium_ore_overworld_2', {not: '^nether'}, 'uranium', 8, false, -32, 63, 8);

    // Aluminum
    genOre('kubejs:aluminum_ore_overworld_1', {not: '^nether'}, 'aluminum', 12, true, 0, 72, 8);
    genOre('kubejs:aluminum_ore_overworld_2', {not: '^nether'}, 'aluminum', 8, false, 0, 72, 6);

    // Cinnabar
    genOre('kubejs:cinnabar_ore_overworld_1', {not: '^nether'}, 'cinnabar', 8, true, -63, -16, 8);
    genOre('kubejs:cinnabar_ore_overworld_2', {not: '^nether'}, 'cinnabar', 6, false, -63, -16, 4);

    // Sulfur
    genOre('kubejs:sulfur_ore_overworld_1', {not: '^nether'}, 'sulfur', 6, true, -48, 0, 10);
    genOre('kubejs:sulfur_ore_overworld_2', {not: '^nether'}, 'sulfur', 4, false, -48, 0, 8);

    // Fluorite
    genOre('kubejs:fluorite_ore_overworld_1', {not: '^nether'}, 'fluorite', 8, true, -32, 16, 10);
    genOre('kubejs:fluorite_ore_overworld_2', {not: '^nether'}, 'fluorite', 6, false, -32, 16, 8);

    // Potassium Nitrate
    genOre('kubejs:potassium_nitrate_ore_overworld_1', {not: '^nether'}, 'potassium_nitrate', 6, true, 8, 48, 8);
    genOre('kubejs:potassium_nitrate_ore_overworld_2', {not: '^nether'}, 'potassium_nitrate', 4, false, 8, 48, 6);

    // Apatite
    genOre('kubejs:apatite_ore_overworld_1', {not: '^nether'}, 'apatite', 6, true, 0, 72, 16);
    genOre('kubejs:apatite_ore_overworld_2', {not: '^nether'}, 'apatite', 4, false, 0, 72, 10);
})