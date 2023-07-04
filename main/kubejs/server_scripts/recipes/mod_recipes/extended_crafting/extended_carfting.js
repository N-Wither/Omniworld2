onEvent('recipes', event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " AAAAAAA ", "AAAABAAAA", "AA  C  AA", "    C    ", "    C    ", "    C    ", "    C    ", "    C    ", "    C    "
    ],
    "key": {
      "A": { "tag": "forge:ingots/infinity" },
      "B": { "tag": "forge:storage_blocks/crystal_matrix" },
      "C": { "tag": "forge:ingots/neutronium" }
    },
    "result": Item.of('avaritia:infinity_pickaxe').enchant('minecraft:fortune', 10).toResultJson()
  }).id(kjs + exc + '/infinity_pickaxe');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "      AAA", "     AABA", "      AAA", "     C A ", "    C    ", "   C     ", "  C      ", " C       ", "C        "
    ],
    "key": {
      "A": { "tag": "forge:ingots/infinity" },
      "B": { "item": "avaritia:infinity_catalyst" },
      "C": { "tag": "forge:ingots/neutronium" }
    },
    "result": { "item": "avaritia:infinity_shovel" }
  }).id(kjs + exc + '/infinity_shovel');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "     A   ", "   BBBB  ", "  BBBBB  ", "  B  CB  ", "     A   ", "     A   ", "     A   ", "     A   ", "     A   "
    ],
    "key": {
      "A": { "tag": "forge:ingots/neutronium" },
      "B": { "tag": "forge:ingots/infinity" },
      "C": { "item": "avaritia:infinity_catalyst" }
    },
    "result": { "item": "avaritia:infinity_hoe" }
  }).id(kjs + exc + '/infinity_hoe');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "   A     ", "  AAAAA  ", "  AABA   ", "   AC    ", "    C    ", "    C    ", "    C    ", "    C    ", "    C    "
    ],
    "key": {
      "A": { "tag": "forge:ingots/infinity" },
      "B": { "item": "avaritia:infinity_catalyst" },
      "C": { "tag": "forge:ingots/neutronium" }
    },
    "result": { "item": "avaritia:infinity_axe" }
  }).id(kjs + exc + '/infinity_axe');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       AA", "      AAA", "     AAA ", "    AAA  ", " B AAA   ", "  BAA    ", "  CB     ", " C  B    ", "D        "
    ],
    "key": {
      "A": { "tag": "forge:ingots/infinity" },
      "B": { "tag": "forge:storage_blocks/crystal_matrix" },
      "C": { "tag": "forge:ingots/neutronium" },
      "D": { "item": "avaritia:infinity_catalyst" }
    },
    "result": { "item": "avaritia:infinity_sword" }
  }).id(kjs + exc + '/infinity_sword');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       AB", "      ABA", "     ABA ", "    ABA  ", " C ABA   ", "  CBA    ", "  DC     ", " D  C    ", "E        "
    ],
    "key": {
      "A": { "tag": "forge:ingots/crystal_matrix" },
      "B": { "tag": "forge:dusts/blaze" },
      "C": { "item": "minecraft:bone" },
      "D": { "tag": "minecraft:logs" },
      "E": { "tag": "forge:nether_stars" }
    },
    "result": { "item": "avaritia:skullfire_sword" }
  }).id(kjs + exc + '/skullfire_sword');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "     AA  ", "    A B  ", "   A  B  ", "  A   B  ", "  C   B  ", "  A   B  ", "   A  B  ", "    A B  ", "     AA  "
    ],
    "key": {
      "A": { "tag": "forge:ingots/infinity" },
      "B": { "tag": "minecraft:wool" },
      "C": { "tag": "forge:storage_blocks/crystal_matrix" }
    },
    "result": { "item": "avaritia:infinity_bow" }
  }).id(kjs + exc + '/infinity_bow');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ", "  AAAAA  ", " ABBBBBA ", " A CBC A ", " ABBDBBA ", " ABBBBBA ", " AB B BA ", "         ", "         "
    ],
    "key": {
      "A": { "tag": "forge:ingots/neutronium" },
      "B": { "tag": "forge:ingots/infinity" },
      "C": { "item": "avaritia:infinity_catalyst" },
      "D": { "item": "mekanism:mekasuit_helmet"}
    },
    "result": { "item": "avaritia:infinity_helmet" }
  }).id(kjs + exc + '/infinity_helmet');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " AA   AA ", "AAA   AAA", "AAA   AAA", " ABBBBBA ", " ABBCBBA ", " ABBDBBA ", " ABBBBBA ", " ABBBBBA ", "  AAAAA  "
    ],
    "key": {
      "A": { "tag": "forge:ingots/neutronium" },
      "B": { "tag": "forge:ingots/infinity" },
      "C": { "tag": "forge:storage_blocks/crystal_matrix" },
      "D": { "item": "mekanism:mekasuit_bodyarmor"}
    },
    "result": { "item": "avaritia:infinity_chestplate" }
  }).id(kjs + exc + '/infinity_chestplate');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA", "ABBBEBBBA", "ABAACAABA", "ABA   ABA", "ADA   ADA", "ABA   ABA", "ABA   ABA", "ABA   ABA", "AAA   AAA"
    ],
    "key": {
      "A": { "tag": "forge:ingots/neutronium" },
      "B": { "tag": "forge:ingots/infinity" },
      "C": { "item": "avaritia:infinity_catalyst" },
      "D": { "tag": "forge:storage_blocks/crystal_matrix" },
      "E": { "item": "mekanism:mekasuit_pants"}
    },
    "result": { "item": "avaritia:infinity_legs" }
  }).id(kjs + exc + '/infinity_legs');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ", " AAA AAA ", " ABA ABA ", " ABA ABA ", "AABA ABAA", "ABBADABBA", "AAAA AAAA", "         ", "         "
    ],
    "key": {
      "A": { "tag": "forge:ingots/neutronium" },
      "B": { "tag": "forge:ingots/infinity" },
      "D": { "item": "mekanism:mekasuit_boots"}
    },
    "result": { "item": "avaritia:infinity_boots" }
  }).id(kjs + exc + '/infinity_boots');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ", "         ", "AAAAAAAAA", "ABCCBCCBA", "ACBBCBBCA", "ABCCBCCBA", "AAAAAAAAA", "         ", "         "
    ],
    "key": {
      "A": { "tag": "forge:ingots/neutronium" },
      "B": { "tag": "forge:ingots/crystal_matrix" },
      "C": { "item": "avaritia:infinity_catalyst" }
    },
    "result": { "item": "avaritia:infinity_ingot" }
  }).id(kjs + exc + '/infinity_ingot');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "   AAA   ", " AABBBAA ", " ABBBBBA ", "ABBBCBBBA", "ABBCDCBBA", "ABBBCBBBA", " ABBBBBA ", " AABBBAA ", "   AAA   "
    ],
    "key": {
      "A": { "tag": "forge:end_stones" },
      "B": { "item": "minecraft:ender_pearl" },
      "C": { "tag": "forge:ingots/neutronium" },
      "D": { "tag": "forge:nether_stars" }
    },
    "result": { "item": "avaritia:endest_pearl" }
  }).id(kjs + exc + '/endest_pearl');

  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "ingredients": [
      { "item": "minecraft:porkchop" },
      { "item": "minecraft:beef" },
      { "item": "minecraft:mutton" },
      { "item": "farmersdelight:ham"},
      { "item": "farmersdelight:bacon"},
      { "item": "blue_skies:carabeef"},
      { "item": "nethersdelight:hoglin_loin"},
      { "item": "twilightforest:raw_meef"},
      { "item": "twilightforest:hydra_chop"},
      { "item": "minecraft:cod" },
      { "item": "minecraft:salmon" },
      { "item": "minecraft:tropical_fish" },
      { "item": "minecraft:pufferfish" },
      { "item": "minecraft:rabbit" },
      { "item": "minecraft:chicken" },
      { "item": "minecraft:rotten_flesh" },
      { "item": "minecraft:spider_eye" },
      { "item": "undergarden:raw_gwibling"},
      { "item": "blue_skies:grittle_flatfish"},
      { "tag": "forge:eggs" },
      { "tag": "forge:nuggets/neutronium" }
    ],
    "result": {
      "item": "avaritia:cosmic_meatballs"
    }
  }).id(kjs + exc + '/cosmic_meatballs');

  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "ingredients": [
      { "item": "minecraft:apple" },
      { "item": "minecraft:golden_apple" },
      { "item": "minecraft:bread" },
      { "item": "minecraft:kelp" },
      { "item": "minecraft:cocoa_beans" },
      { "item": "minecraft:cake" },
      { "item": "minecraft:glistering_melon_slice" },
      { "item": "minecraft:carrot" },
      { "item": "minecraft:poisonous_potato" },
      { "item": "minecraft:chorus_fruit" },
      { "item": "minecraft:beetroot" },
      { "tag": "forge:crops/tomato"},
      { "tag": "forge:crops/onion"},
      { "tag": "forge:rice"},
      { "tag": "forge:crops/cabbage"},
      { "tag": "forge:crops/corn"},
      { "tag": "forge:crops/greenbean"},
      { "tag": "forge:crops/greenonion"},
      { "tag": "forge:crops/honeydew"},
      { "tag": "forge:crops/pepper"},
      { "tag": "forge:fruits/strawberry"},
      { "tag": "forge:fruits/cherry"},
      { "tag": "forge:crops/coconut"},
      { "item": "nethers_exoticism:jaboticaba"},
      { "item": "nethers_exoticism:kiwano"},
      { "item": "nethers_exoticism:ramboutan"},
      { "item": "nethers_exoticism:bouddha_s_hand"},
      { "item": "farmersdelight:hot_cocoa"},
      { "item": "create:builders_tea"},
      { "item": "minecraft:mushroom_stew" },
      { "item": "minecraft:honey_bottle" },
      { "item": "minecraft:sweet_berries" },
      { "tag": "forge:nuggets/neutronium" }
    ],
    "result": {
      "item": "avaritia:ultimate_stew"
    }
  }).id(kjs + exc + '/ultimate_stew');

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABBBBBAA", "A BBBBB A", "A  CCC  A", "D CCCCC D", "A CCDCC A", "D CCCCC D", "A  CCC  A", "A       A", "AAADADAAA"
    ],
    "key": {
      "A": { "tag": "forge:storage_blocks/iron" },
      "B": { "tag": "forge:storage_blocks/quartz" },
      "C": { "tag": "forge:storage_blocks/redstone" },
      "D": { "tag": "forge:ingots/crystal_matrix" }
    },
    "result": { "item": "avaritia:neutron_collector" }
  }).id(kjs + exc + '/neutron_collector');

  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "ingredients": [
      { "item": "extendedcrafting:ultimate_singularity" },
      { "tag": "forge:ingots/crystal_matrix" },
      { "tag": "forge:ingots/neutronium" },
      { "item": "avaritia:cosmic_meatballs" },
      { "item": "avaritia:ultimate_stew" },
      { "item": "avaritia:endest_pearl" },
      { "item": "avaritia:record_fragment" },
      { "item": "extendedcrafting:ender_star" },
      { "item": "extendedcrafting:the_ultimate_ingot" },
      { "item": "mekanism:pellet_antimatter" },
      { "item": "extradisks:withering_processor" },
      { "item": "botania:gaia_ingot" },
      { "item": "ars_nouveau:wilden_tribute" },
      { "item": "occultism:iesnium_block" },
      { "item": "mysticalagradditions:insanium_block" },
      { "item": "gobber2:dragon_star" },
      { "item": "cyclic:gem_obsidian" },
      { "item": "apotheosis:rectifier_t3" },
      { "item": "forbidden_arcanus:eternal_stella" },
      { "item": "forbidden_arcanus:smelter_prism" },
      { "item": "undergarden:masticator_scales"},
      { "item": "bloodmagic:etherealslate"},
      { "item": "naturesaura:clock_hand"},
      { "item": "cacao:golden_chocolate"},
      { "item": "twilightforest:magic_beans"},
      { "item": "alexsmobs:straddlite_block"},
      { "tag": "artifacts:artifacts"},
      { "item": "biomemakeover:illunite_shard"},
      { "item": "cyclic:heart"},
      { "item": "apotheosis:mythic_material"},
      { "item": "arsomega:enchanted_diamond_block"},
      { "item": "draconicevolution:chaotic_core"}
    ],
    "result": {
      "item": "avaritia:infinity_catalyst",
      "count": 4
    }
  }).id(kjs + exc + '/infinity_catalyst')

  if (Platform.isLoaded('solarflux')) {
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  AA AA  ", " ABBCBBA ", "AB  D  BA", "AB EEE BA", " CDEFEDC ", "AB EEE BA", "AB  D  BA", " ABBCBBA ", "  AA AA  "
      ],
      "key": {
        "A": { "tag": "forge:ingots/neutronium" },
        "B": { "tag": "forge:ingots/crystal_matrix" },
        "C": { "item": "solarflux:sp_8" },
        "D": { "tag": "forge:nuggets/neutronium" },
        "E": { "item": "avaritia:neutron_pile" },
        "F": { "item": "avaritia:infinity_catalyst" }
      },
      "result": { "item": "solarflux:sp_custom_neutronium", "count": 2 }
    }).id(kjs + exc + '/neutronium_solar_panel');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  AA AA  ", " ABBCBBA ", "AB  D  BA", "AB EFE BA", " CDFGFDC ", "AB EFE BA", "AB  D  BA", " ABBCBBA ", "  AA AA  "
      ],
      "key": {
        "A": { "tag": "forge:ingots/neutronium" },
        "B": { "tag": "forge:ingots/crystal_matrix" },
        "C": { "tag": "forge:storage_blocks/neutronium" },
        "D": { "tag": "forge:nuggets/neutronium" },
        "E": { "item": "avaritia:neutron_pile" },
        "F": { "tag": "forge:ingots/infinity" },
        "G": { "item": "solarflux:sp_custom_neutronium" }
      },
      "result": { "item": "solarflux:sp_custom_infinity", "count": 3 }
    }).id(kjs + exc + '/infinity_solar_panel');
  }

  event.recipes.extendedcrafting.shapelessTable("extendedcrafting:the_ultimate_ingot", [
    'minecraft:netherite_ingot',
    'gobber2:gobber2_ingot_end',
    'mysticalagradditions:insanium_ingot',
    'mysticalagriculture:soulium_ingot',
    'occultism:iesnium_ingot',
    'undergarden:cloggrum_ingot',
    'undergarden:froststeel_ingot',
    'undergarden:forgotten_ingot',
    'blue_skies:falsite_ingot',
    'blue_skies:ventium_ingot',
    'blue_skies:horizonite_ingot',
    'empatic:milkonstantan_ingot',
    'materialis:fairy_ingot',
    'twilightforest:ironwood_ingot',
    'twilightforest:fiery_ingot',
    'twilightforest:knightmetal_ingot',
    'naturesaura:infused_iron',
    'naturesaura:tainted_gold',
    'industrialforegoing:pink_slime_ingot',
    'malum:hallowed_gold_ingot',
    'malum:soul_stained_steel_ingot',
    'mekanism:ingot_refined_obsidian',
    'mekanism:ingot_refined_glowstone',
    'tconstruct:slimesteel_ingot',
    'tconstruct:pig_iron_ingot',
    'tconstruct:queens_slime_ingot',
    'tconstruct:manyullyn_ingot',
    // 'arsarsenal:source_steel_ingot',
    'botania:elementium_ingot',
    'mythicbotany:alfsteel_ingot',
    'botania:gaia_ingot',
    'forbidden_arcanus:arcane_gold_ingot',
    'forbidden_arcanus:obsidian_ingot',
    'immersiveengineering:ingot_hop_graphite',
    'beyond_earth:desh_ingot',
    'beyond_earth:ostrum_ingot',
    'beyond_earth:calorite_ingot',
    'tinkers_reforged:gausum_ingot',
    'tinkers_reforged:durasteel_ingot',
    'tinkers_reforged:cyber_steel_ingot',
    'bloodsmeltery:bloodbrass_ingot',
    'pneumaticcraft:ingot_iron_compressed',
    'redstone_arsenal:flux_ingot',
    'thermal_extra:shellite_ingot',
    'thermal_extra:twinite_ingot',
    'thermal_extra:soul_infused_ingot',
    'thermal_extra:dragonsteel_ingot',
    'draconicevolution:awakened_draconium_ingot'
  ]).id(kjs+exc+'/ultimate_ingot');

  event.recipes.extendedcrafting.shapedTable("mysticalagradditions:creative_essence",
  ["ABCDDDEBA",  "BCDFGHDEB", "CDFGGGHDE", "DFIJKLMHD", "DIINDOMMD", "DPIQRSMTD", "UDPVVVTDW", "BUDPVTDWB", "ABUDDDWBA"],
  {
    A: "mysticalagriculture:fertilized_essence",
    B: "extendedcrafting:luminessence",
    C: "mysticalagriculture:air_essence",
    D: "mysticalagradditions:insanium_essence",
    E: "mysticalagriculture:earth_essence",
    F: "mysticalagriculture:nether_star_essence",
    G: "mysticalagriculture:electrum_essence",
    H: "mysticalagriculture:dragon_egg_essence",
    I: "mysticalagriculture:blazing_crystal_essence",
    J: "mysticalagriculture:terrasteel_essence",
    K: "mysticalagriculture:lumium_essence",
    L: "mysticalagriculture:iesnium_essence",
    M: "mysticalagriculture:experience_essence",
    N: "mysticalagriculture:manyullyn_essence",
    O: "mysticalagriculture:uraninite_essence",
    P: "mysticalagriculture:nitro_crystal_essence",
    Q: "mysticalagriculture:spider_essence",
    R: "mysticalagriculture:pig_iron_essence",
    S: "mysticalagriculture:enderium_essence",
    T: "mysticalagriculture:netherite_essence",
    U: "mysticalagriculture:water_essence",
    V: "mysticalagriculture:fiery_ingot_essence",
    W: "mysticalagriculture:fire_essence"
  }
  ).id(kjs+exc+'/creative_essence')

  event.recipes.extendedcrafting.shapedTable("avaritia:infinity_ingot",
  ['DDDDDDDDD', 'DDDDDDDDD', 'DDDDDDDDD', 'DDDDDDDDD', 'DDDDCDDDD', 'DDDDDDDDD', 'DDDDDDDDD', 'DDDDDDDDD', 'DDDDDDDDD'],
  {
    D: 'kubejs:infinity_drop',
    C: "extendedcrafting:ultimate_singularity"
  }
  ).id(kjs + exc + '/infinity_ingot_from_drop')
})