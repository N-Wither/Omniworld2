onEvent('recipes', event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          " AAAAAAA ","AAAABAAAA","AA  C  AA","    C    ","    C    ","    C    ","    C    ","    C    ","    C    "
        ],
        "key": {
          "A": {"tag": "forge:ingots/infinity"},
          "B": {"tag": "forge:storage_blocks/crystal_matrix"},
          "C": {"tag": "forge:ingots/neutronium"}
        },
        "result": Item.of('avaritia:infinity_pickaxe').enchant('minecraft:fortune', 10).toResultJson()
    }).id(kjs+exc+'/infinity_pickaxe');
    
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "      AAA","     AABA","      AAA","     C A ","    C    ","   C     ","  C      "," C       ","C        "
      ],
      "key": {
        "A": {"tag": "forge:ingots/infinity"},
        "B": {"item": "avaritia:infinity_catalyst"},
        "C": {"tag": "forge:ingots/neutronium"}
      },
      "result": {"item": "avaritia:infinity_shovel"}
    }).id(kjs+exc+'/infinity_shovel');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "     A   ","   BBBB  ","  BBBBB  ","  B  CB  ","     A   ","     A   ","     A   ","     A   ","     A   "
      ],
      "key": {
        "A": {"tag": "forge:ingots/neutronium"},
        "B": {"tag": "forge:ingots/infinity"},
        "C": {"item": "avaritia:infinity_catalyst"}
      },
      "result": {"item": "avaritia:infinity_hoe"}
    }).id(kjs+exc+'/infinity_hoe');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "   A     ","  AAAAA  ","  AABA   ","   AC    ","    C    ","    C    ","    C    ","    C    ","    C    "
      ],
      "key": {
        "A": {"tag": "forge:ingots/infinity"},
        "B": {"item": "avaritia:infinity_catalyst"},
        "C": {"tag": "forge:ingots/neutronium"}
      },
      "result": {"item": "avaritia:infinity_axe"}
    }).id(kjs+exc+'/infinity_axe');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       AA","      AAA","     AAA ","    AAA  "," B AAA   ","  BAA    ","  CB     "," C  B    ","D        "
      ],
      "key": {
        "A": {"tag": "forge:ingots/infinity"},
        "B": {"tag": "forge:storage_blocks/crystal_matrix"},
        "C": {"tag": "forge:ingots/neutronium"},
        "D": {"item": "avaritia:infinity_catalyst"}
      },
      "result": {"item": "avaritia:infinity_sword"}
    }).id(kjs+exc+'/infinity_sword');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       AB","      ABA","     ABA ","    ABA  "," C ABA   ","  CBA    ","  DC     "," D  C    ","E        "
      ],
      "key": {
        "A": {"tag": "forge:ingots/crystal_matrix"},
        "B": {"tag": "forge:dusts/blaze"},
        "C": {"item": "minecraft:bone"},
        "D": {"tag": "minecraft:logs"},
        "E": {"tag": "forge:nether_stars"}
      },
      "result": {"item": "avaritia:skull_fire_sword"}
    }).id(kjs+exc+'/skull_fire_sword');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "     AA  ","    A B  ","   A  B  ","  A   B  ","  C   B  ","  A   B  ","   A  B  ","    A B  ","     AA  "
      ],
      "key": {
        "A": {"tag": "forge:ingots/infinity"},
        "B": {"tag": "minecraft:wool"},
        "C": {"tag": "forge:storage_blocks/crystal_matrix"}
      },
      "result": {"item": "avaritia:infinity_bow"}
    }).id(kjs+exc+'/infinity_bow');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ","  AAAAA  "," ABBBBBA "," A CBC A "," ABBBBBA "," ABBBBBA "," AB B BA ","         ","         "
      ],
      "key": {
        "A": {"tag": "forge:ingots/neutronium"},
        "B": {"tag": "forge:ingots/infinity"},
        "C": {"item": "avaritia:infinity_catalyst"}
      },
      "result": {"item": "avaritia:infinity_helmet"}
    }).id(kjs+exc+'/infinity_helmet');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " AA   AA ","AAA   AAA","AAA   AAA"," ABBBBBA "," ABBCBBA "," ABBBBBA "," ABBBBBA "," ABBBBBA ","  AAAAA  "
      ],
      "key": {
        "A": {"tag": "forge:ingots/neutronium"},
        "B": {"tag": "forge:ingots/infinity"},
        "C": {"tag": "forge:storage_blocks/crystal_matrix"}
      },
      "result": {"item": "avaritia:infinity_chestplate"}
    }).id(kjs+exc+'/infinity_chestplate');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAAAAAA","ABBBCBBBA","ABAACAABA","ABA   ABA","ADA   ADA","ABA   ABA","ABA   ABA","ABA   ABA","AAA   AAA"
      ],
      "key": {
        "A": {"tag": "forge:ingots/neutronium"},
        "B": {"tag": "forge:ingots/infinity"},
        "C": {"item": "avaritia:infinity_catalyst"},
        "D": {"tag": "forge:storage_blocks/crystal_matrix"}
      },
      "result": {"item": "avaritia:infinity_pants"}
    }).id(kjs+exc+'/infinity_pants');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         "," AAA AAA "," ABA ABA "," ABA ABA ","AABA ABAA","ABBA ABBA","AAAA AAAA","         ","         "
      ],
      "key": {
        "A": {"tag": "forge:ingots/neutronium"},
        "B": {"tag": "forge:ingots/infinity"}
      },
      "result": {"item": "avaritia:infinity_boots"}
    }).id(kjs+exc+'/infinity_boots');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ","         ","AAAAAAAAA","ABCCBCCBA","ACBBCBBCA","ABCCBCCBA","AAAAAAAAA","         ","         "
      ],
      "key": {
        "A": {"tag": "forge:ingots/neutronium"},
        "B": {"tag": "forge:ingots/crystal_matrix"},
        "C": {"item": "avaritia:infinity_catalyst"}
      },
      "result": {"item": "avaritia:infinity_ingot"}
    }).id(kjs+exc+'/infinity_ingot');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "   AAA   "," AABBBAA "," ABBBBBA ","ABBBCBBBA","ABBCDCBBA","ABBBCBBBA"," ABBBBBA "," AABBBAA ","   AAA   "
      ],
      "key": {
        "A": {"tag": "forge:end_stones"},
        "B": {"item": "minecraft:ender_pearl"},
        "C": {"tag": "forge:ingots/neutronium"},
        "D": {"tag": "forge:nether_stars"}
      },
      "result": {"item": "avaritia:endest_pearl"}
    }).id(kjs+exc+'/endest_pearl');

    event.custom({
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {"item": "minecraft:porkchop"},
        {"item": "minecraft:beef"},
        {"item": "minecraft:mutton"},
        {"item": "minecraft:cod"},
        {"item": "minecraft:salmon"},
        {"item": "minecraft:tropical_fish"},
        {"item": "minecraft:pufferfish"},
        {"item": "minecraft:rabbit"},
        {"item": "minecraft:chicken"},
        {"item": "minecraft:rotten_flesh"},
        {"item": "minecraft:spider_eye"},
        {"tag": "forge:eggs"},
        {"tag": "forge:nuggets/neutronium"}
      ],
      "result": {
        "item": "avaritia:cosmic_meatballs"
      }
    }).id(kjs+exc+'/cosmic_meatballs');

    event.custom({
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {"item": "minecraft:apple"},
        {"item": "minecraft:golden_apple"},
        {"item": "minecraft:bread"},
        {"item": "minecraft:kelp"},
        {"item": "minecraft:cocoa_beans"},
        {"item": "minecraft:cake"},
        {"item": "minecraft:glistering_melon_slice"},
        {"item": "minecraft:carrot"},
        {"item": "minecraft:poisonous_potato"},
        {"item": "minecraft:chorus_fruit"},
        {"item": "minecraft:beetroot"},
        {"item": "minecraft:mushroom_stew"},
        {"item": "minecraft:honey_bottle"},
        {"item": "minecraft:sweet_berries"},
        {"tag": "forge:nuggets/neutronium"}
      ],
      "result": {
        "item": "avaritia:ultimate_stew"
      }
    }).id(kjs+exc+'/ultimate_stew');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABBBBBAA","A BBBBB A","A  CCC  A","D CCCCC D","A CCDCC A","D CCCCC D","A  CCC  A","A       A","AAADADAAA"
      ],
      "key": {
        "A": {"tag": "forge:storage_blocks/iron"},
        "B": {"tag": "forge:storage_blocks/quartz"},
        "C": {"tag": "forge:storage_blocks/redstone"},
        "D": {"tag": "forge:ingots/crystal_matrix"}
      },
      "result": {"item": "avaritia:neutron_collector"}
    }).id(kjs+exc+'/neutron_collector');

    event.custom({
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {"item": "extendedcrafting:ultimate_singularity"},
        {"tag": "forge:ingots/crystal_matrix"},
        {"tag": "forge:ingots/neutronium"},
        {"item": "avaritia:cosmic_meatballs"},
        {"item": "avaritia:ultimate_stew"},
        {"item": "avaritia:endest_pearl"},
        {"item": "avaritia:record_fragment"},
        {"item": "extendedcrafting:ender_star"},
        {"item": "extendedcrafting:the_ultimate_ingot"},
        {"item": "mekanism:pellet_antimatter"},
        {"item": "extradisks:withering_processor"},
        {"item": "botania:gaia_ingot"},
        {"item": "ars_nouveau:wilden_tribute"},
        {"item": "occultism:iesnium_block"},
        {"item": "mysticalagradditions:insanium_block"},
        {"item": "gobber2:dragon_star"},
        {"item": "cyclic:gem_obsidian"},
        {"item": "apotheosis:rectifier_t3"},
        {"item": "forbidden_arcanus:eternal_stella"},
        {"item": "forbidden_arcanus:smelter_prism"}
      ],
      "result": {
        "item": "avaritia:infinity_catalyst"
      }
    }).id(kjs+exc+'/infinity_catalyst')

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  AA AA  "," ABBCBBA ","AB  D  BA","AB EEE BA"," CDEFEDC ","AB EEE BA","AB  D  BA"," ABBCBBA ","  AA AA  "
      ],
      "key": {
        "A": {"tag": "forge:ingots/neutronium"},
        "B": {"tag": "forge:ingots/crystal_matrix"},
        "C": {"item": "solarflux:sp_8"},
        "D": {"tag": "forge:nuggets/neutronium"},
        "E": {"item": "avaritia:neutron_pile"},
        "F": {"item": "avaritia:infinity_catalyst"}
      },
      "result": {"item": "solarflux:sp_custom_neutronium", "count": 2}
    }).id(kjs+exc+'/neutronium_solar_panel');

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  AA AA  "," ABBCBBA ","AB  D  BA","AB EFE BA"," CDFGFDC ","AB EFE BA","AB  D  BA"," ABBCBBA ","  AA AA  "
      ],
      "key": {
        "A": {"tag": "forge:ingots/neutronium"},
        "B": {"tag": "forge:ingots/crystal_matrix"},
        "C": {"tag": "forge:storage_blocks/neutronium"},
        "D": {"tag": "forge:nuggets/neutronium"},
        "E": {"item": "avaritia:neutron_pile"},
        "F": {"tag": "forge:ingots/infinity"},
        "G": {"item": "solarflux:sp_custom_neutronium"}
      },
      "result": {"item": "solarflux:sp_custom_infinity", "count": 3}
    }).id(kjs+exc+'/infinity_solar_panel');
})