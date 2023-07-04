onEvent('recipes', e => {
    let recipe = {
        output: "{FluidName:\"minecraft:lava\",Amount:100}",
        rarity: [
            {
                whitelist: {
                    type: "minecraft:worldgen/biome",
                    values: [
                        "minecraft:nether_wastes",
                        "minecraft:basalt_deltas",
                        "minecraft:warped_forest",
                        "minecraft:crimson_forest",
                        "minecraft:soul_sand_valley"
                    ]
                },
                blacklist: {},
                depth_min: 5,
                depth_max: 20,
                weight: 8
            }
        ],
        pointer: 0,
        catalyst: {
            item: "industrialforegoing:laser_lens1"
        },
        entity: "minecraft:empty",
        type: "industrialforegoing:laser_drill_fluid"
    }

    e.custom({
        output: '{FluidName:"mekanism:sulfuric_acid",Amount:1000}',
        rarity: [
            {
                whitelist: {
                    type: "minecraft:worldgen/biome",
                    values: [
                        'beyond_earth:infernal_venus_barrens',
                        'beyond_earth:venus_desert'
                    ]
                },
                blacklist: {},
                depth_min: 0,
                depth_max: 128,
                weight: 10
            }
        ],
        pointer: 0,
        catalyst: {
            item: "industrialforegoing:laser_lens4"
        },
        entity: "minecraft:empty",
        type: "industrialforegoing:laser_drill_fluid"
    }).id('kubejs:laser_drill_fluid/sulfuric_acid')
})