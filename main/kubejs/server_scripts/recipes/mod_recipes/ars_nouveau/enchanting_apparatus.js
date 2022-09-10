onEvent("recipes", event => {
    let recipeIdPrefix = "kubejs:enchanting_apparatus/";
    /*
    event.recipes.ars_nouveau.enchanting_apparatus("mysticalagriculture:infusion_altar", "mysticalagriculture:infusion_pedestal", [
        "mysticalagriculture:imperium_gemstone", "ars_nouveau:wixie_charm", "#forge:ingots/elementium", "#forge:ingots/steeleaf"
    ]).id(recipeIdPrefix+"infusion_table");
    */
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
          {"item": "mysticalagriculture:infusion_pedestal"}
        ],
        "pedestalItems": [
          {"item": {"item": "mysticalagriculture:imperium_gemstone"}},
          {"item": {"item": "ars_nouveau:wixie_charm"}},
          {"item": {"tag": "forge:ingots/elementium"}},
          {"item": {"tag": "forge:ingots/steeleaf"}}
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
        {"item": {"item": "apotheosis:gem"}},
        {"item": {"item": "apotheosis:gem"}},
        {"item": {"item": "apotheosis:gem"}},
        {"item": {"item": "minecraft:ender_pearl"}}
      ],
      "output": {"item": "kubejs:affix_gem"},
      "sourceCost": 1000,
      "keepNbtOfReagent": false
    }).id(recipeIdPrefix + 'affix_gem');
})