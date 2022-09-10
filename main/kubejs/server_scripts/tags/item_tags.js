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
    event.add("minecraft:planks/mahogany", ["biomesoplenty:mahogany_planks", "hexerei:mahogany_planks"]);
    event.add("minecraft:planks/willow", ["biomesoplenty:willow_planks", "hexerei:willow_planks"]);
    event.add("minecraft:logs/willow", ["biomesoplenty:willow_log", "hexerei:willow_log"]);
    event.add("minecraft:logs/mahogany", ["biomesoplenty:mahogany_log", "hexerei:mahogany_log"]);
    event.add("forge:milks", ["farmersdelight:milk_bottle", "hexerei:milk_bottle"]);
    event.add("forge:milk", ["croptopia:milk_bottle", "hexerei:milk_bottle"]);
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
    event.add("forge:raw_materials/cobalt", "nourished_end:cobalt");
    event.add('forge:dyes/yellow', '#forge:dusts/sulfur');
    event.add('forge:dyes', '#forge:dusts/sulfur');
    event.add('forge:crops/coconut', 'ecologics:coconut_slice');
    event.add('forge:fruits/coconut', 'ecologics:coconut_slice');
    event.add('forge:cheeses', ["beyond_earth:cheese", "sakura:cheese"]);
    event.add('forge:cheese', 'croptopia:cheese');
    event.add("materialis:plastic_material", "immersiveengineering:plate_duroplast");

    event.add("diet:fruits", ["culturaldelights:avocado"]);
    event.add("diet:vegetables", ["culturaldelights:cucumber", "culturaldelights:eggplant", "culturaldelights:white_eggplant", "nethersdelight:propelpearl", "nethersdelight:plate_of_stuffed_hoglin_ham", "nethersdelight:plate_of_stuffed_hoglin_roast", "nethersdelight:plate_of_stuffed_hoglin_snout"]);
    event.add("diet:proteins", ["culturaldelights:squid", "culturaldelights:glow_squid", "culturaldelights:raw_calamari", "hexerei:blood_bottle", "nethersdelight:hoglin_ear", "nethersdelight:hoglin_loin", "nethersdelight:strider_slice", "nethersdelight:propelpearl", "nethersdelight:plate_of_stuffed_hoglin_ham", "nethersdelight:plate_of_stuffed_hoglin_roast", "nethersdelight:plate_of_stuffed_hoglin_snout"]);
    event.add("diet:ingredients", ["nethersdelight:hoglin_hide", "nethersdelight:raw_stuffed_hoglin"]);

    event.add('forge:affix_appliable', /.*_(sword|axe|pickaxe|shovel|paxel|aiot|helmet|chestplate|leggings|pants|boots|knife)/);
    event.add('forge:affix_appliable', ['#tconstruct:modifiable', '#forge:tools/axes']);
    event.add('forge:affix_appliable', /mekanism:mekasuit.*/);
    event.add('forge:affix_appliable', 'kubejs:engulfing_lightning');

    /*========REMOVALS========*/
    function removeType(type, material, item){
        event.remove(`forge:${type}s`, item);
        event.remove(`forge:${type}s/${material}`, item);
    };
    removeType('ingot', 'steel', "beyond_earth:steel_ingot");
    removeType('nugget', 'steel', "beyond_earth:steel_nugget");
    removeType('storage_block', 'steel', "beyond_earth:steel_block");
})