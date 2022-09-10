// priority: 9

onEvent('recipes', event => {
    global.disabledItems.forEach(item => {
        event.remove({output: item})
    })

    global.disabledFluids.forEach(fluid => {
        event.remove({output: Fluid.of(fluid)})
    })
    
    let idToRemove = [
        'mekanism:processing/tin/ingot/from_dust_smelting',
        'mysticalworld:tin_ingot_from_smelting_dust',
        'ftbic:smelting/dusts/tin_to_ingot',
        'mekanism:processing/tin/ingot/from_dust_blasting',
        'mysticalworld:tin_ingot_from_blasting_dust',
        'ftbic:blasting/dusts/tin_to_ingot',

        'mekanism:processing/lead/ingot/from_dust_smelting',
        'mysticalworld:lead_ingot_from_smelting_dust',
        'ftbic:smelting/dusts/lead_to_ingot',
        'immersiveengineering:smelting/ingot_lead_from_dust',
        'mekanism:processing/lead/ingot/from_dust_blasting',
        'mysticalworld:lead_ingot_from_blasting_dust',
        'ftbic:blasting/dusts/lead_to_ingot',
        'immersiveengineering:smelting/ingot_lead_from_dust_from_blasting',

        'thermal:smelting/nickel_ingot_from_dust_smelting',
        'immersiveengineering:smelting/ingot_nickel_from_dust',
        'thermal:smelting/nickel_ingot_from_dust_blasting',
        'immersiveengineering:smelting/ingot_nickel_from_dust_from_blasting',

        'ftbic:smelting/dusts/aluminum_to_ingot',
        'immersiveengineering:smelting/ingot_aluminum_from_dust',
        'ftbic:blasting/dusts/aluminum_to_ingot',
        'immersiveengineering:smelting/ingot_aluminum_from_dust_from_blasting',

        'ftbic:smelting/dusts/silver_to_ingot',
        'immersiveengineering:smelting/ingot_silver_from_dust',
        'ftbic:blasting/dusts/silver_to_ingot',
        'immersiveengineering:smelting/ingot_silver_from_dust_from_blasting',

        'mekanism:processing/osmium/ingot/from_dust_blasting',
        'mekanism:processing/osmium/ingot/from_dust_blasting',

        'mekanism:processing/uranium/ingot/from_dust_blasting',
        'mekanism:processing/uranium/ingot/from_dust_blasting',

        'mekanism:infusion_conversion/carbon/from_coal',
        'mekanism:infusion_conversion/carbon/from_coal_block'
    ]

    idToRemove.forEach(item => {
        event.remove({id: item});
    })

    event.remove({type: 'avaritia:shaped_extreme_craft'});
    event.remove({type: 'avaritia:shapeless_extreme_craft'});
    event.remove({output: "mekanism:steel_casing"});
    event.remove({output: /ftbic:.*wire/, type: "minecraft:crafting_shaped"});
    event.remove({output: "mysticalagriculture:infusion_altar"});
    event.remove({id: "refinedstorage:quartz_enriched_iron"});
    event.remove({id: "beyond_earth:iron_stick"});
    event.remove({id: "immersiveengineering:crafting/stick_iron"});
    event.remove({id: "buildersaddition:iron_rod"});
    event.remove({id: /industrialforegoing:.*gear/});
    event.remove({id: /(cyclic|create|immersiveengineering|tconstruct|thermal).*(copper_ingot)/});
    event.remove({id: "majobroom:majo_broom"});
    event.remove({output: "pipez:basic_upgrade"});
    event.remove({output: "pipez:improved_upgrade"});
    event.remove({output: "pipez:advanced_upgrade"});
    event.remove({output: "pipez:ultimate_upgrade"});
    event.remove({id: "gemsnjewels:amethyst_shards_to_gem"});
    event.remove({id: "beyond_earth:steel_ingot_blasting"});
    event.remove({id: 'mekanism:metallurgic_infuser'});
    event.remove({id: /thermal:fire_charge.*glass/});
})