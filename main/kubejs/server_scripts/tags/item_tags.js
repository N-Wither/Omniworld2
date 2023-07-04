// priority: 9

onEvent("tags.items", event => {
    event.add("forge:circuits/basic", ["ftbic:electronic_circuit", 'pneumaticcraft:printed_circuit_board']);
    event.add("forge:circuits/advanced", "ftbic:advanced_circuit");
    event.add("forge:circuits/elite", "ftbic:iridium_circuit");
    event.add("forge:rubber", ["ftbic:rubber", "thermal:cured_rubber"]);
    event.add("forge:raw_rubber", ["myrtrees:latex", "thermal:rubber"]);
    event.add("forge:wires/copper", "ftbic:copper_wire");
    event.add("forge:wires/gold", "ftbic:gold_wire");
    event.add("forge:wires/enderium", "ftbic:enderium_wire");
    event.add("forge:wires/aluminum", "ftbic:aluminum_wire");
    event.add("forge:dusts/ender_pearl", "ftbic:ender_dust");
    event.add("refinedstorage:disks", /refinedstorage:.*storage_disk/);
    event.add("refinedstorage:disks/items", /refinedstorage:.*k_storage_disk/);
    event.add("refinedstorage:disks/fluids", /refinedstorage:.*fluid_storage_disk/);
    event.add("forge:ingots/quartz_enriched_iron", "refinedstorage:quartz_enriched_iron");
    event.add("forge:storage_blocks/quartz_enriched_iron", "refinedstorage:quartz_enriched_iron_block")
    event.add("forge:ingots", "refinedstorage:quartz_enriched_iron");
    event.add("forge:storage_blocks", "refinedstorage:quartz_enriched_iron_block");
    event.add("minecraft:planks/mahogany", ["biomesoplenty:mahogany_planks", /*"hexerei:mahogany_planks"*/]);
    event.add("minecraft:planks/willow", ["biomesoplenty:willow_planks", /*"hexerei:willow_planks",*/ "biomemakeover:willow_planks"]);
    event.add("minecraft:logs/willow", ["biomesoplenty:willow_log", /*"hexerei:willow_log",*/ "biomemakeover:willow_log"]);
    event.add("minecraft:logs/mahogany", ["biomesoplenty:mahogany_log", /*"hexerei:mahogany_log"*/]);
    event.add("forge:milks", ["farmersdelight:milk_bottle", /*"hexerei:milk_bottle"*/]);
    event.add("forge:milk", ["croptopia:milk_bottle", /*"hexerei:milk_bottle"*/]);
    event.add("forge:salts", "mekanism:salt");
    event.add("forge:tool_pot", "croptopia:cooking_pot");
    event.add("forge:tool_skillet", "croptopia:frying_pan");
    event.add("forge:tool_juicer", "croptopia:food_press");
    event.add("forge:tool_grinder", "croptopia:mortar_and_pestle");
    event.add("forge:dragon_scales", ["quark:dragon_scale", "tconstruct:dragon_scale", "mysticalagradditions:dragon_scale"]);
    event.add("culturaldelights:avocados", "croptopia:avocado");
    event.add("forge:crops/eggplant", "culturaldelights:eggplant");
    event.add("forge:crops/cucumber", "culturaldelights:cucumber");
    event.add("culturaldelights:avocados", "croptopia:avocado");
    event.add("culturaldelights:cucumbers", "croptopia:cucumber");
    event.add("forge:steamed_rices", "farmersdelight:cooked_rice");
    event.add("forge:seeds/corn", "culturaldelights:corn_kernels");
    event.add("forge:plastic", ["pneumaticcraft:plastic", "immersiveengineering:plate_duroplast", "mekanism:hdpe_sheet"]);
    event.add("forge:raw_materials/rose_quartz", ["biomesoplenty:rose_quartz_shard", "create:rose_quartz"]);
    event.add('forge:dyes/yellow', '#forge:dusts/sulfur');
    event.add('forge:dyes', '#forge:dusts/sulfur');
    event.add('forge:crops/coconut', 'ecologics:coconut_slice');
    event.add('forge:fruits/coconut', 'ecologics:coconut_slice');
    event.add('forge:cheeses', ["beyond_earth:cheese", "sakura:cheese"]);
    event.add('forge:cheese', 'croptopia:cheese');
    event.add("materialis:plastic_material", "immersiveengineering:plate_duroplast");
    event.add('forge:tallow', [/*'hexerei:animal_fat',*/'delightful:animal_fat']);
    event.add('forge:flour', "pneumaticcraft:wheat_flour");
    event.add("minecraft:music_discs", [
        'wildbackport:music_disc_5',
        "arsomega:demon_dance_music_disc",
        "arsomega:blocky_hills_music_disc",
        "mowziesmobs:music_disc_petiole",
        "infernalexp:music_disc_flush",
        "infernalexp:music_disc_soul_spunk",
        "nethers_exoticism:music_disc_forest",
        "the_bumblezone:music_disc_flight_of_the_bumblebee_rimsky_korsakov",
        "the_bumblezone:music_disc_honey_bee_rat_faced_boy"
    ]);
    event.add('forge:rope', "druidcraftrg:rope");
    event.add("tinker_rapier:casts/multi_use/slender_blade", "tinker_rapier:slender_blade_cast");
    event.add("tinker_rapier:casts/single_use/slender_blade", ["tinker_rapier:slender_blade_red_sand_cast", "tinker_rapier:slender_blade_sand_cast"]);
    event.add("forge:crops/vanilla", "neapolitan:dried_vanilla_pods");
    event.add("forge:vanilla", "neapolitan:dried_vanilla_pods");
    event.add("minecraft:logs_that_burn", "myrtrees:rubberwood_log");
    event.add('forge:gems/coal_petcoke', "immersivepetroleum:petcoke");

    event.add("diet:fruits", ["culturaldelights:avocado", "nethers_exoticism:jaboticaba", "nethers_exoticism:kiwano", "nethers_exoticism:pitaya", "nethers_exoticism:ramboutan", "nethers_exoticism:bouddha_s_hand"]);
    event.add("diet:vegetables", ["culturaldelights:cucumber", "culturaldelights:eggplant", "culturaldelights:white_eggplant", "nethersdelight:propelpearl", "nethersdelight:plate_of_stuffed_hoglin_ham", "nethersdelight:plate_of_stuffed_hoglin_roast", "nethersdelight:plate_of_stuffed_hoglin_snout"]);
    event.add("diet:proteins", ["culturaldelights:squid", "culturaldelights:glow_squid", "culturaldelights:raw_calamari", /*"hexerei:blood_bottle",*/ "nethersdelight:hoglin_ear", "nethersdelight:hoglin_loin", "nethersdelight:strider_slice", "nethersdelight:propelpearl", "nethersdelight:plate_of_stuffed_hoglin_ham", "nethersdelight:plate_of_stuffed_hoglin_roast", "nethersdelight:plate_of_stuffed_hoglin_snout"]);
    event.add("diet:ingredients", ["nethersdelight:hoglin_hide", "nethersdelight:raw_stuffed_hoglin"]);

    event.add('forge:affix_appliable', /.*_(sword|axe|pickaxe|shovel|paxel|aiot|helmet|chestplate|leggings|pants|boots|knife)/);
    event.add('forge:affix_appliable', ['#tconstruct:modifiable', '#forge:tools/axes']);
    event.add('forge:affix_appliable', /mekanism:mekasuit.*/);
    event.add('forge:affix_appliable', 'kubejs:engulfing_lightning');

    event.add("curios:hands", 'kubejs:rhythm_gamers_glove')

    event.add('forge:farmland/tier_1', [/mysticalagriculture:.*_farmland/, "mysticalagradditions:insanium_farmland"]);
    event.add('forge:farmland/tier_2', ["mysticalagriculture:prudentium_farmland", "mysticalagriculture:tertium_farmland", "mysticalagriculture:imperium_farmland", "mysticalagriculture:supremium_farmland", "mysticalagradditions:insanium_farmland"]);
    event.add('forge:farmland/tier_3', ["mysticalagriculture:tertium_farmland", "mysticalagriculture:imperium_farmland", "mysticalagriculture:supremium_farmland", "mysticalagradditions:insanium_farmland"]);
    event.add('forge:farmland/tier_4', ["mysticalagriculture:imperium_farmland", "mysticalagriculture:supremium_farmland", "mysticalagradditions:insanium_farmland"]);
    event.add('forge:farmland/tier_5', ["mysticalagriculture:supremium_farmland", "mysticalagradditions:insanium_farmland"]);
    event.add('forge:farmland/tier_6', ["mysticalagradditions:insanium_farmland"]);

    event.add('forge:creative_items/energy', ["mekanism:creative_energy_cube", "powah:energy_cell_creative", "createaddition:creative_energy", "ftbic:creative_battery", "immersiveengineering:capacitor_creative", "integrateddynamics:energy_battery_creative", "draconicevolution:creative_op_capacitor", "draconicevolution:creative_capacitor"]);
    event.add('forge:creative_items/fluid', ["create:creative_fluid_tank", "mekanism:creative_fluid_tank"])
    event.add('forge:creative_items/item', ["create:creative_crate", "mekanism:creative_bin"])

    event.add('twilightforest:banned_uncraftables', ["tconstruct:tinkers_anvil", "tconstruct:scorched_anvil"]),

    event.add('mm:ports/energy/in', ['mm:energy_input_port', 'mm:large_energy_input_port'])
    event.add('mm:ports/fluid/in', ["mm:fluid_input_port", "mm:large_fluid_input_port"])
    event.add('mm:ports/fluid/out', ["mm:fluid_output_port", "mm:large_fluid_output_port"])
    event.add('mm:ports/fluid', /mm:.*fluid.*port/)
    event.add('mm:ports/gas/in', ["mm:gas_input_port"])
    event.add('mm:ports/gas/out', ["mm:gas_output_port"])
    event.add('mm:ports/item/in', /mm:.*item_input_port/)
    event.add('mm:ports/item/out', /mm:.*item_output_port/)
    event.add('mm:ports', [/mm:.*port/, 'mm:base_machine_block'])
})