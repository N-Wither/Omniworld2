onEvent("recipes", event => {
    let recipeIdPrefix = "kubejs:enchanting_apparatus/";
    
    /* event.recipes.ars_nouveau.enchanting_apparatus("mysticalagriculture:infusion_altar", "mysticalagriculture:infusion_pedestal", [
        "mysticalagriculture:imperium_gemstone", "ars_nouveau:wixie_charm", "#forge:ingots/elementium", "#forge:ingots/steeleaf"
    ]).id(recipeIdPrefix+"infusion_table"); */

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
          {"item": "mysticalagriculture:infusion_pedestal"}
        ],
        "pedestalItems": [
          {"item": {"item": "mysticalagriculture:imperium_gemstone"}},
          {"item": {"item": "ars_nouveau:wixie_charm"}},
          {"item": {"item": "mythicbotany:alfheim_rune"}},
          {"item": {"tag": "forge:ingots/steeleaf"}},
          {"item": {"item": "ars_nouveau:earth_essence"}},
          {"item": {"item": "ars_nouveau:air_essence"}},
          {"item": {"item": "ars_nouveau:fire_essence"}},
          {"item": {"item": "ars_nouveau:water_essence"}},
        ],
        "output": {"item": "mysticalagriculture:infusion_altar"},
        "sourceCost": 2000,
        "keepNbtOfReagent": false
    }).id(recipeIdPrefix+"infusion_table");

    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "reagent": [{"item": "ars_nouveau:source_gem"}],
      "pedestalItems": [
        {"item": {"item": "occultism:spirit_attuned_crystal"}},
        {"item": {"item": "apotheosis:gem_dust"}},
        {"item": {"item": "apotheosis:gem_dust"}},
        {"item": {"item": "apotheosis:gem_dust"}},
        {"item": {"item": "minecraft:ender_pearl"}}
      ],
      "output": {"item": "kubejs:affix_gem"},
      "sourceCost": 1000,
      "keepNbtOfReagent": false
    }).id(recipeIdPrefix + 'affix_gem');

    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "reagent": [{"item": "ars_nouveau:archmage_spell_book"}],
      "pedestalItems": [
        {"item": {"item": "avaritia:infinity_catalyst"}},
        {"item": {"item": "arsomega:enchanted_demonic_gem"}},
        {"item": {"item": "avaritia:infinity_catalyst"}},
        {"item": {"item": "arsomega:arcane_clay_block"}}
      ],
      "output": {"item": "ars_nouveau:creative_spell_book"},
      "sourceCost": 8000,
      "keepNbtOfReagent": true
    }).id(recipeIdPrefix + 'creative_spell_book');

    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "reagent": [{"item": "ars_nouveau:source_jar"}],
      "pedestalItems": [
        {"item": {"item": "avaritia:infinity_catalyst"}},
        {"item": {"item": "ars_nouveau:vitalic_sourcelink"}},
        {"item": {"item": "ars_nouveau:source_gem_block"}},
        {"item": {"item": "avaritia:infinity_catalyst"}},
        {"item": {"item": "ars_nouveau:alchemical_sourcelink"}},
        {"item": {"item": "ars_nouveau:source_gem_block"}},
        {"item": {"item": "avaritia:infinity_catalyst"}},
        {"item": {"item": "ars_nouveau:agronomic_sourcelink"}},
        {"item": {"item": "ars_nouveau:source_gem_block"}}
      ],
      "output": {"item": "ars_nouveau:creative_source_jar"},
      "sourceCost": 10000,
      "keepNbtOfReagent": false
    }).id(recipeIdPrefix + 'creative_source_jar');

    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "reagent": [{"tag": "forge:gems/amethyst"}],
      "pedestalItems": [
        {"item": {"tag": 'forge:dusts/amethyst'}},
        {"item": {"tag": 'forge:dusts/amethyst'}}
      ],
      "output": {"item": "hexcasting:charged_amethyst"},
      "sourceCost": 1000,
      "keepNbtOfReagent": false
    }).id(recipeIdPrefix + 'charged_amethyst');
})