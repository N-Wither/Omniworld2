// priority: -1

// NOTE
// For unknown reason, some recipes that should accept #forge:seeds now only accept #forge:corn_seeds.
// This script is to end this.
onEvent('recipes', e => {
    e.custom({
        "type": "mob_grinding_utils:chicken_feed",
        "ingredients": [
            {
                "tag": "forge:seeds"
            },
            {
                "item": "mob_grinding_utils:mob_swab_used"
            },
            {
                "type": "mob_grinding_utils:fluid",
                "advanced": false,
                "tag": "forge:experience"
            }
        ],
        "result": {
            "item": "mob_grinding_utils:gm_chicken_feed"
        }
    }).id('mob_grinding_utils:gm_chicken_feed');

    e.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "BEB",
            "RSX",
            "BGB"
        ],
        "key": {
            "B": {
                "type": "mob_grinding_utils:fluid",
                "advanced": false,
                "tag": "forge:experience"
            },
            "E": {
                "item": "minecraft:spider_eye"
            },
            "R": {
                "item": "minecraft:rotten_flesh"
            },
            "S": {
                "tag": "forge:seeds"
            },
            "X": {
                "tag": "forge:bones"
            },
            "G": {
                "tag": "forge:gunpowder"
            }
        },
        "result": {
            "item": "mob_grinding_utils:gm_chicken_feed_cursed"
        }
    }).id('mob_grinding_utils:recipe_cursed_feed');

    e.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "BCB",
            "PSX",
            "BWB"
        ],
        "key": {
            "B": {
                "type": "mob_grinding_utils:fluid",
                "advanced": false,
                "tag": "forge:experience"
            },
            "C": {
                "item": "minecraft:carrot"
            },
            "P": {
                "item": "minecraft:potato"
            },
            "S": {
                "tag": "forge:seeds"
            },
            "X": {
                "item": "minecraft:beetroot"
            },
            "W": {
                "item": "minecraft:wheat"
            }
        },
        "result": {
            "item": "mob_grinding_utils:nutritious_chicken_feed"
        }
    }).id('mob_grinding_utils:recipe_nutritious_feed');

    e.shaped("miniutilities:ender_lily_seeds", ['EEE', 'ESE', 'EEE'], {
        E: "minecraft:ender_pearl",
        S: '#forge:seeds'
    }).id("miniutilities:ender_lily_seeds");

    e.shaped("quark:seed_pouch", [' S ', 'RDR', ' R '], {
        S: '#forge:string',
        R: "minecraft:rabbit_hide",
        D: '#forge:seeds'
    }).id('quark:tools/crafting/seed_pouch');

    e.shapeless("mysticalworld:assorted_seeds", ['4x #forge:seeds']).id('mysticalworld:assorted_seeds_recipe');

    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "tag": "forge:seeds"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:magebloom_crop"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id("ars_nouveau:magebloom_crop");

    e.recipes.create.compacting(Fluid.of("createaddition:seed_oil", 100), '#forge:seeds').id('createaddition:compacting/seed_oil')
})