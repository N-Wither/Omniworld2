onEvent("worldgen.remove", event => {
    event.removeOres(ores => {
        ores.biomes = {
            not: /^twilightforest:.*/
        }

        ores.blocks = [
            "tinkers_reforged:aluminum_ore",
            "tinkers_reforged:deepslate_aluminum_ore",
            "minecraft:coal_ore",
            "minecraft:deepslate_coal_ore",
            "minecraft:iron_ore",
            "minecraft:deepslate_iron_ore",
            "minecraft:gold_ore",
            "minecraft:deepslate_gold_ore",
            "minecraft:lapis_ore",
            "minecraft:deepslate_lapis_ore",
            "minecraft:redstone_ore",
            "minecraft:deepslate_redstone_ore",
            "minecraft:copper_ore",
            "minecraft:deepslate_copper_ore",
            "minecraft:diamond_ore",
            "minecraft:deepslate_diamond_ore",
            "minecraft:emerald_ore",
            "minecraft:deepslate_emerald_ore"
        ]

        ores.worldgenLayer = 'underground_ores'
    })

    event.removeOres(ores => {
        ores.blocks = [
            "miniutilities:ender_ore",
            'ftbic:aluminum_ore',
            'ftbic:deepslate_aluminum_ore',
            'ftbic:deepslate_iridium_ore',
            'ftbic:deepslate_lead_ore',
            'ftbic:deepslate_tin_ore',
            'ftbic:deepslate_uranium_ore',
            'ftbic:iridium_ore',
            'ftbic:lead_ore',
            'ftbic:tin_ore',
            'ftbic:uranium_ore',
            "minecraft:nether_gold_ore",
            "minecraft:nether_quartz_ore"
        ];

        ores.worldgenLayer = 'underground_ores'
    })
})