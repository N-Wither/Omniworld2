onEvent('recipes', e => {
    // Create
    e.recipes.createMechanicalCrafting('create:creative_motor', [
        ' EEEEE ',
        'GDAAADH',
        'GACBCAH',
        'GABSBAH',
        'GACBCAH',
        'GDAAADH',
        ' FFFFF '
    ], {
        A: 'create:cogwheel',
        B: 'create:large_cogwheel',
        C: 'create:precision_mechanism',
        D: 'create:gearbox',
        E: "create:railway_casing",
        F: 'create:brass_casing',
        G: "create:copper_casing",
        H: "compressedcreativity:compressed_iron_casing",
        S: "avaritia:infinity_block"
    }).id('kubejs:creative_motor')

    e.recipes.createMixing('create:creative_blaze_cake', [
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:blaze_cake"}'),
        'create:blaze_cake_base', "avaritia:infinity_catalyst",
        Fluid.of('minecraft:lava', 1000)
    ]).superheated().id('kubejs:creative_blaze_cake')

    e.stonecutting("create:creative_fluid_tank", '#forge:creative_items/fluid');
    e.stonecutting("create:creative_crate", '#forge:creative_items/item');

    e.recipes.createMechanicalCrafting("create:handheld_worldshaper", [
      'TTTCM',
      '  PEP'
    ], {
      T: "pneumaticcraft:cannon_barrel",
      C: "create:creative_crate",
      M: "create:creative_motor",
      P: "create:precision_mechanism",
      E: "immersiveengineering:railgun"
    }).id('kubejs:handheld_worldshaper')

    // Botania
    e.custom(
        {
          "type": "mythicbotany:infusion",
          "group": "infuser",
          "output": {
            "item": "botania:creative_pool"
          },
          "mana": 10000000,
          "ingredients": [
            {"item": "mythicbotany:asgard_rune"},
            {"item": "mythicbotany:vanaheim_rune"},
            {"item": "mythicbotany:alfheim_rune"},
            {"item": "mythicbotany:midgard_rune"},
            {"item": "mythicbotany:joetunheim_rune"},
            {"item": "mythicbotany:muspelheim_rune"},
            {"item": "mythicbotany:niflheim_rune"},
            {"item": "mythicbotany:nidavellir_rune"},
            {"item": "mythicbotany:helheim_rune"},
            {"item": "botania:fabulous_pool"},
            {"item": "avaritia:infinity_block"}
          ],
          "fromColor": 65535,
          "toColor": 16750080
        }
    ).id('kubejs:creative_pool')

    // Refined Storage

    // Mekanism
    e.shapeless('mekanism:creative_fluid_tank', ['mekanism:creative_fluid_tank']).id('kubejs:mekanism/creative_fluid_tank_empty')

    e.shapeless('mekanism:creative_chemical_tank', ['mekanism:creative_chemical_tank']).id('kubejs:mekanism/creative_chemical_tank_empty')

    e.recipes.mekanism.combining("mekanism:creative_fluid_tank", "mekanism:ultimate_fluid_tank", "thermal:fluid_tank_creative_augment").id('kubejs:combining/creative_fluid_tank')
    e.recipes.mekanism.combining("mekanism:creative_chemical_tank", "mekanism:ultimate_chemical_tank", "thermal:fluid_tank_creative_augment").id('kubejs:combining/creative_chemical_tank')
    e.recipes.mekanism.combining("mekanism:creative_bin", "mekanism:ultimate_bin", "functionalstorage:creative_vending_upgrade").id('kubejs:combining/creative_bin')

    e.stonecutting("mekanism:creative_fluid_tank", '#forge:creative_items/fluid');

    // Thermal
    e.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": ["AAAAAAAAA", "ABBBBBBBA", "ABCDDDCBA", "ABDEFEDBA", "ABDGHIDBA", "ABDEFEDBA", "ABCDDDCBA", "ABBBBBBBA", "AAAAAAAAA"],
        "key": {
          "A": {"item": "mysticalagradditions:creative_essence"},
          "B": {"item": "thermal:enderium_glass"},
          "C": {"item": "extendedcrafting:ultimate_singularity"},
          "D": {"item": "thermal:rf_coil"},
          "E": {"item": "avaritia:infinity_ingot"},
          "F": {"item": "thermal_extra:advanced_rf_coil_augment"},
          "G": {"item": "thermal_extra:advanced_rf_coil_xfer_augment"},
          "H": {"item": "avaritia:infinity_block"},
          "I": {"item": "thermal_extra:advanced_rf_coil_storage_augment"}
        },
        "result": {"item": "thermal:rf_coil_creative_augment"}
      }
    ).id(kjs + exc + '/rf_coil_creative_augment');

    e.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": ["AEEEEEEEA", "EFBBBBBFE", "EBCDDDCBE", "EBDGFGDBE", "EBDFGFDBE", "EBDGFGDBE", "EBCDDDCBE", "EFBBBBBFE", "AEEEEEEEA"],
        "key": {
          "A": {"item": "mysticalagradditions:creative_essence"},
          "B": {"item": "thermal:fluid_cell_frame"},
          "C": {"item": "thermal_extra:dragon_enderium_ingot"},
          "D": {"item": "thermal_extra:bigger_fluid_tank_augment"},
          "E": {"item": "avaritia:infinity_ingot"},
          "F": {"item": "avaritia:infinity_catalyst"},
          "G": {"item": "avaritia:infinity_block"}
        },
        "result": {"item": "thermal:fluid_tank_creative_augment"}
      }
    ).id(kjs + exc + '/fluid_tank_creative_augment');

    e.shapeless("6x thermal:machine_efficiency_creative_augment", "thermal:rf_coil_creative_augment").id(kjs + '/machine_efficiency_creative_augment');
    e.shapeless("thermal:machine_catalyst_creative_augment", "thermal:machine_efficiency_creative_augment").id(kjs + '/machine_catalyst_creative_augment');

  // Tinkers Construct

  e.recipes.extendedcrafting.shapedTable(Item.of('tconstruct:creative_slot', '{slot:"upgrades"}'),
    ["AAAAAAAAA", "ABBBBBBBA", "ABCCCCCBA", "ABCDEDCBA", "ABCFGHCBA", "ABCDIDCBA", "ABCCCCCBA", "ABBBBBBBA", "AAAAAAAAA"],
    {
      A: "tconstruct:seared_reinforcement",
      B: "tconstruct:slimesteel_reinforcement",
      C: "tconstruct:bronze_reinforcement",
      D: "mysticalagradditions:creative_essence",
      E: '#forge:heads',
      F: "minecraft:writable_book",
      G: Item.of("tconstruct:large_plate", '{Material:"tconstruct:manyullyn"}'),
      H: "#minecraft:music_discs",
      I: "minecraft:end_crystal"
    }
  ).id(kjs + exc + '/creative_upgrade_slot')

  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": ["AAAAAAAAA", "ABBBBBBBA", "ABCCDEEBA", "ABCFGFEBA", "ABHGIGJBA", "ABKFGFLBA", "ABKKMLLBA", "ABBBBBBBA", "AAAAAAAAA"],
      "key": {
        "A": { "item": "tconstruct:emerald_reinforcement" },
        "B": { "item": "tconstruct:gold_reinforcement" },
        "C": { "item": "tconstruct:manyullyn_ingot" },
        "D": { "item": "tconstruct:earth_slime_crystal" },
        "E": { "item": "tconstruct:pig_iron_ingot" },
        "F": { "item": "mysticalagradditions:creative_essence" },
        "G": { "item": "botania:dragonstone" },
        "H": { "item": "tconstruct:sky_slime_crystal" },
        "I": { "item": "minecraft:dragon_head" },
        "J": { "item": "tconstruct:ichor_slime_crystal" },
        "K": { "item": "tconstruct:queens_slime_ingot" },
        "L": { "item": "tconstruct:hepatizon_ingot" },
        "M": { "item": "tconstruct:ender_slime_crystal" }
      },
      "result": {
        "type": "forge:nbt",
        "item": "tconstruct:creative_slot",
        "count": 1,
        "nbt": "{slot:\"abilities\"}"
      }
    }
  ).id(kjs + exc + '/creative_abllity_slot')

  // Infinity Energy
  let inf_energy = [
    "mekanism:creative_energy_cube",
    "powah:energy_cell_creative",
    "createaddition:creative_energy",
    "ftbic:creative_battery",
    "immersiveengineering:capacitor_creative",
    "integrateddynamics:energy_battery_creative",
    "draconicevolution:creative_op_capacitor",
    "draconicevolution:creative_capacitor"
  ]
  inf_energy.forEach(item => {
    e.stonecutting(item, '#forge:creative_items/energy')
  });
  e.shapeless(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'), "mekanism:creative_energy_cube").id('kubejs:creative_energy_cube_charge');

  // Powah
  e.custom(
    {
      "type": "extendedcrafting:combination",
      "powerCost": 2147483647,
      "powerRate": 2000000,
      "input": {
        "item": "powah:energy_cell_nitro"
      },
      "ingredients": [
        {"item": "thermal:rf_coil_creative_augment"},
        {"item": "avaritia:infinity_ingot"},
        {"item": "avaritia:infinity_catalyst"},
        {"item": "avaritia:infinity_ingot"},
        {"item": "avaritia:infinity_catalyst"},
        {"item": "avaritia:infinity_ingot"},
        {"item": "thermal:rf_coil_creative_augment"},
        {"item": "mekanism:ultimate_induction_cell"},
        {"item": "mekanism:ultimate_induction_provider"},
        {"item": "mekanism:ultimate_induction_cell"},
        {"item": "mekanism:ultimate_induction_provider"},
        {"item": "mekanism:supercharged_coil"}
      ],
      "result": {
        "item": "powah:energy_cell_creative"
      }
    }
  ).id(kjs + exc + '/energy_cell_creative');

  // PneumaticCraft
  e.shaped("pneumaticcraft:creative_upgrade", ['LCL', 'CVC', 'LCL'], {
    L: "#pneumaticcraft:upgrade_components",
    C: "pneumaticcraft:smart_chest",
    V: "functionalstorage:creative_vending_upgrade"
  }).id('kubejs:pnc_creative_upgrade')

  // Refined Storage
  e.custom(
    {
      "type": "extendedcrafting:combination",
      "powerCost": 512000000,
      "powerRate": 2000000,
      "input": {
        "item": "refinedstorage:controller"
      },
      "ingredients": [
        {"item": "avaritia:infinity_ingot"},
        {"item": "avaritia:infinity_catalyst"},
        {"item": "refinedstorage:advanced_processor"},
        {"item": "avaritia:infinity_ingot"},
        {"item": "avaritia:infinity_catalyst"},
        {"item": "extradisks:withering_processor"},
        {"item": "avaritia:infinity_ingot"},
        {"item": "avaritia:infinity_catalyst"},
        {"item": "extrastorage:neural_processor"},
      ],
      "result": {
        "item": "refinedstorage:creative_controller"
      }
    }
  ).id(kjs + '/creative_controller')

  // Simply Jetpacks 2
  e.custom(
    {
      "type": "extendedcrafting:combination",
      "powerCost": 600000000,
      "powerRate": 2000000,
      "input": {
        "tag": "simplyjetpacks:jetpack"
      },
      "ingredients": [
        {"item": "avaritia:infinity_ingot"},
        {"item": "avaritia:infinity_catalyst"},
        {"item": "simplyjetpacks:thruster_vanilla4"},
        {"item": "avaritia:infinity_ingot"},
        {"item": "avaritia:infinity_catalyst"},
        {"item": "simplyjetpacks:thruster_mek4"},
        {"item": "avaritia:infinity_ingot"},
        {"item": "avaritia:infinity_catalyst"},
        {"item": "simplyjetpacks:thruster_te5"},
      ],
      "result": {
        "item": "simplyjetpacks:jetpack_creative"
      }
    }
  ).id(kjs + '/creative_jetpack')

  // Functional Storage
  e.custom(
    {
      "type": "extendedcrafting:combination",
      "powerCost": 2147483647,
      "powerRate": 10000000,
      "input": {
        "item": "functionalstorage:netherite_upgrade"
      },
      "ingredients": [
        {"item": "pneumaticcraft:creative_compressor"},
        {"item": "mekanism:creative_fluid_tank"},
        {"item": "avaritia:infinity_block"},
        {"item": "avaritia:infinity_block"},
        {"item": "avaritia:infinity_block"},
        {"item": "avaritia:infinity_block"},
        {"item": "pneumaticcraft:creative_compressed_iron_block"},
        {"item": "create:creative_motor"},
        {"item": "avaritia:infinity_block"},
        {"item": "avaritia:infinity_block"},
        {"item": "avaritia:infinity_block"},
        {"item": "mekanism:creative_chemical_tank"},
        {"item": "ars_nouveau:creative_source_jar"},
        {"item": "avaritia:infinity_block"},
        {"item": "avaritia:infinity_block"},
        {"item": "powah:energy_cell_creative"},
        {"item": "botania:creative_pool"},
        {"item": "avaritia:infinity_block"},
        {"item": "avaritia:infinity_block"},
        {"item": "avaritia:infinity_block"}
      ],
      "result": {
        "item": "functionalstorage:creative_vending_upgrade"
      }
    }
  ).id(kjs + '/creative_vending_upgrade')
})