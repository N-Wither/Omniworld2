// priority: -1

onEvent("recipes", event => {
    let recipeTypeBlacklist1 = {not: {type: 'cucumber:shaped_tag'}};
    let recipeTypeBlacklist2 = {not: {mod: 'malum'}};

    // event.customFilter()

    function replaceOut(type, beReplaced, target){
        event.replaceOutput(type, beReplaced, target);
    };

    // Iron
    let ironDust = Ingredient.of('#forge:dusts/iron').getItemIds();
    ironDust.forEach(item => { event.replaceOutput(item, 'omniores:iron_dust') });
    let ironRod = Ingredient.of('#forge:rods/iron').getItemIds();
    ironRod.forEach(item => { event.replaceOutput(item, 'omniores:iron_rod') });
    let ironPlate = Ingredient.of('#forge:plates/iron').getItemIds();
    ironPlate.forEach(item => { event.replaceOutput(item, 'omniores:iron_plate') });
    let ironGear = Ingredient.of('#forge:gears/iron').getItemIds();
    ironGear.forEach(item => { event.replaceOutput(item, 'omniores:iron_gear') });
    replaceOut({type: 'mekanism:combining'}, "minecraft:iron_ore", "omniores:iron_ore_stone");
    replaceOut({type: 'mekanism:combining'}, "minecraft:deepslate_iron_ore", "omniores:iron_ore_deepslate");

    // Gold
    let dustGold = Ingredient.of('#forge:dusts/gold').getItemIds();
    dustGold.forEach(item => { event.replaceOutput(item, 'omniores:gold_dust') });
    let rodGold = Ingredient.of('#forge:rods/gold').getItemIds();
    rodGold.forEach(item => { event.replaceOutput(item, 'omniores:gold_rod') });
    let plateGold = Ingredient.of('#forge:plates/gold').getItemIds();
    plateGold.forEach(item => { event.replaceOutput(item, 'omniores:gold_plate') });
    let gearGold = Ingredient.of('#forge:gears/gold').getItemIds();
    gearGold.forEach(item => { event.replaceOutput(item, 'omniores:gold_gear') });
    event.replaceOutput("ftbic:gold_gear", "omniores:gold_gear");
    replaceOut({type: 'mekanism:combining'}, "minecraft:gold_ore", "omniores:gold_ore_stone");
    replaceOut({type: 'mekanism:combining'}, "minecraft:deepslate_gold_ore", "omniores:gold_ore_deepslate");

    // Copper
    let nuggetCopper = Ingredient.of('#forge:nuggets/copper').getItemIds();
    nuggetCopper.forEach(item => { event.replaceOutput(item, 'omniores:copper_nugget') });
    let dustCopper = Ingredient.of('#forge:dusts/copper').getItemIds();
    dustCopper.forEach(item => { event.replaceOutput(item, 'omniores:copper_dust') });
    let rodCopper = Ingredient.of('#forge:rods/copper').getItemIds();
    rodCopper.forEach(item => { event.replaceOutput(item, 'omniores:copper_rod') });
    let plateCopper = Ingredient.of('#forge:plates/copper').getItemIds();
    plateCopper.forEach(item => { event.replaceOutput(item, 'omniores:copper_plate') });
    let gearCopper = Ingredient.of('#forge:gears/copper').getItemIds();
    gearCopper.forEach(item => { event.replaceOutput(item, 'omniores:copper_gear') });
    replaceOut({type: 'mekanism:combining'}, "minecraft:copper_ore", "omniores:copper_ore_stone");
    replaceOut({type: 'mekanism:combining'}, "minecraft:deepslate_copper_ore", "omniores:copper_ore_deepslate");

    // Diamond
    let diamondDust = Ingredient.of('#forge:dusts/diamond').getItemIds();
    diamondDust.forEach(item => { event.replaceOutput(item, 'omniores:diamond_dust') });
    let diamondGear = Ingredient.of('#forge:gears/diamond').getItemIds();
    diamondGear.forEach(item => { event.replaceOutput(item, 'omniores:diamond_gear') });
    replaceOut({type: 'mekanism:combining'}, "minecraft:diamond_ore", "omniores:diamond_ore_stone");
    replaceOut({type: 'mekanism:combining'}, "minecraft:deepslate_diamond_ore", "omniores:diamond_ore_deepslate");

    // Emerald
    let emeraldDust = Ingredient.of('#forge:dusts/emerald').getItemIds();
    emeraldDust.forEach(item => { event.replaceOutput(item, 'omniores:emerald_dust') });
    let emeraldGear = Ingredient.of('#forge:gears/emerald').getItemIds();
    emeraldGear.forEach(item => { event.replaceOutput(item, 'omniores:emerald_gear') });
    replaceOut({type: 'mekanism:combining'}, "minecraft:emerald_ore", "omniores:emerald_ore_stone");
    replaceOut({type: 'mekanism:combining'}, "minecraft:deepslate_emerald_ore", "omniores:emerald_ore_deepslate");

    // Coal(Charcoal, Coke)
    let coalDust = Ingredient.of('#forge:dusts/coal').getItemIds();
    coalDust.forEach(item => { event.replaceOutput(item, 'omniores:coal_dust') });
    let charcoalDust = Ingredient.of('#forge:dusts/charcoal').getItemIds();
    charcoalDust.forEach(item => { event.replaceOutput(item, 'omniores:charcoal_dust') });
    let charcoalBlock = Ingredient.of('#forge:storage_blocks/charcoal').getItemIds();
    charcoalBlock.forEach(item => { event.replaceOutput(item, 'omniores:charcoal_block') });
    let cokeGem = Ingredient.of('#forge:coal_coke').getItemIds();
    cokeGem.forEach(item => { event.replaceOutput(item, 'omniores:coal_coke_gem') });
    let cokeBlock = Ingredient.of('#forge:storage_blocks/coal_coke').getItemIds();
    cokeBlock.forEach(item => { event.replaceOutput(item, 'omniores:coal_coke_block') });
    replaceOut({type: 'mekanism:combining'}, "minecraft:coal_ore", "omniores:coal_ore_stone");
    replaceOut({type: 'mekanism:combining'}, "minecraft:deepslate_coal_ore", "omniores:coal_ore_deepslate");

    // Quartz
    let quartzDust = Ingredient.of('#forge:dusts/quartz').getItemIds();
    quartzDust.forEach(item => { event.replaceOutput(item, 'omniores:quartz_dust') });
    replaceOut({}, 'thermal:quartz_gear', 'omniores:quartz_gear');
    replaceOut({type: 'mekanism:combining'}, "minecraft:nether_quartz_ore", "omniores:quartz_ore_netherrack");

    // Netherite
    let netheriteNugget = Ingredient.of('#forge:nuggets/netherite').getItemIds();
    netheriteNugget.forEach(item => { event.replaceOutput(item, 'omniores:netherite_nugget') });
    let netheriteDust = Ingredient.of('#forge:dusts/netherite').getItemIds();
    netheriteDust.forEach(item => { event.replaceOutput(item, 'omniores:netherite_dust') });
    event.replaceOutput("thermal:netherite_gear", "omniores:netherite_gear");
    event.replaceOutput("thermal:netherite_plate", "omniores:netherite_plate");

    // Ender
    event.replaceOutput("thermal:ender_pearl_dust", "omniores:ender_dust");
    event.replaceOutput("ftbic:ender_dust", "omniores:ender_dust");
    event.replaceOutput("miniutilities:ender_dust", "omniores:ender_dust");

    // Obsidian
    replaceOut({}, '#forge:dusts/obsidian', 'omniores:obsidian_dust');

    // Wood
    replaceOut({}, '#forge:dusts/wood', 'omniores:wood_dust');

    // Tin
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/tin', 'omniores:tin_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/tin', 'omniores:tin_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/tin', 'omniores:tin_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/tin', 'omniores:raw_tin');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/tin', 'omniores:tin_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/tin', 'omniores:tin_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/tin', 'omniores:tin_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/tin', 'omniores:tin_rod');
    replaceOut({}, "mekanism:tin_ore", "omniores:tin_ore_stone");
    replaceOut({}, "mekanism:deepslate_tin_ore", "omniores:tin_ore_deepslate");

    // Lead
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/lead', 'omniores:lead_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/lead', 'omniores:lead_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/lead', 'omniores:lead_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/lead', 'omniores:raw_lead');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/lead', 'omniores:lead_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/lead', 'omniores:lead_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/lead', 'omniores:lead_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/lead', 'omniores:lead_rod');
    replaceOut({}, "mekanism:lead_ore", "omniores:lead_ore_stone");
    replaceOut({}, "mekanism:deepslate_lead_ore", "omniores:lead_ore_deepslate");

    // Nickel
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/nickel', 'omniores:nickel_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/nickel', 'omniores:nickel_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/nickel', 'omniores:nickel_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/nickel', 'omniores:raw_nickel');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/nickel', 'omniores:nickel_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/nickel', 'omniores:nickel_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/nickel', 'omniores:nickel_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/nickel', 'omniores:nickel_rod');

    // Zinc
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/zinc', 'omniores:zinc_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/zinc', 'omniores:zinc_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/zinc', 'omniores:zinc_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/zinc', 'omniores:raw_zinc');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/zinc', 'omniores:zinc_plate');

    // Aluminum
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/aluminum', 'omniores:aluminum_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/aluminum', 'omniores:aluminum_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/aluminum', 'omniores:aluminum_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/aluminum', 'omniores:raw_aluminum');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/aluminum', 'omniores:aluminum_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/aluminum', 'omniores:aluminum_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/aluminum', 'omniores:aluminum_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/aluminum', 'omniores:aluminum_rod');

    // Silver
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/silver', 'omniores:silver_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/silver', 'omniores:silver_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/silver', 'omniores:silver_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/silver', 'omniores:raw_silver');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/silver', 'omniores:silver_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/silver', 'omniores:silver_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/silver', 'omniores:silver_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/silver', 'omniores:silver_rod');

    // Cobalt
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/cobalt', 'omniores:cobalt_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/cobalt', 'omniores:cobalt_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/cobalt', 'omniores:cobalt_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/cobalt', 'omniores:raw_cobalt');

    // Osmium
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/osmium', 'omniores:osmium_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/osmium', 'omniores:osmium_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/osmium', 'omniores:osmium_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/osmium', 'omniores:raw_osmium');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/osmium', 'omniores:osmium_dust');
    replaceOut({}, "mekanism:osmium_ore", "omniores:osmium_ore_stone");
    replaceOut({}, "mekanism:deepslate_osmium_ore", "omniores:osmium_ore_deepslate");

    // Iridium
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/iridium', 'omniores:iridium_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/iridium', 'omniores:iridium_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/iridium', 'omniores:iridium_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/iridium', 'omniores:raw_iridium');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/iridium', 'omniores:iridium_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/iridium', 'omniores:iridium_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/iridium', 'omniores:iridium_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/iridium', 'omniores:iridium_rod');

    // Uranium
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/uranium', 'omniores:uranium_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/uranium', 'omniores:uranium_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/uranium', 'omniores:uranium_block');
    replaceOut(recipeTypeBlacklist1, '#forge:raw_materials/uranium', 'omniores:raw_uranium');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/uranium', 'omniores:uranium_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/uranium', 'omniores:uranium_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/uranium', 'omniores:uranium_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/uranium', 'omniores:uranium_rod');
    replaceOut({}, "mekanism:uranium_ore", "omniores:uranium_ore_stone");
    replaceOut({}, "mekanism:deepslate_uranium_ore", "omniores:uranium_ore_deepslate");

    // lumium
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/lumium', 'omniores:lumium_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/lumium', 'omniores:lumium_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/lumium', 'omniores:lumium_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/lumium', 'omniores:lumium_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/lumium', 'omniores:lumium_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/lumium', 'omniores:lumium_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/lumium', 'omniores:lumium_rod');

    // Brass
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/brass', 'omniores:brass_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/brass', 'omniores:brass_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/brass', 'omniores:brass_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/brass', 'omniores:brass_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/brass', 'omniores:brass_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/brass', 'omniores:brass_rod');

    // Steel
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/steel', 'omniores:steel_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/steel', 'omniores:steel_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/steel', 'omniores:steel_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/steel', 'omniores:steel_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/steel', 'omniores:steel_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/steel', 'omniores:steel_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/steel', 'omniores:steel_rod');

    // Electrum
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/electrum', 'omniores:electrum_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/electrum', 'omniores:electrum_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/electrum', 'omniores:electrum_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/electrum', 'omniores:electrum_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/electrum', 'omniores:electrum_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/electrum', 'omniores:electrum_gear');
    
    // Invar
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/invar', 'omniores:invar_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/invar', 'omniores:invar_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/invar', 'omniores:invar_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/invar', 'omniores:invar_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/invar', 'omniores:invar_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/invar', 'omniores:invar_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/invar', 'omniores:invar_rod');

    // Constantan
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/constantan', 'omniores:constantan_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/constantan', 'omniores:constantan_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/constantan', 'omniores:constantan_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/constantan', 'omniores:constantan_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/constantan', 'omniores:constantan_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/constantan', 'omniores:constantan_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/constantan', 'omniores:constantan_rod');

    // Signalum
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/signalum', 'omniores:signalum_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/signalum', 'omniores:signalum_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/signalum', 'omniores:signalum_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/signalum', 'omniores:signalum_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/signalum', 'omniores:signalum_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/signalum', 'omniores:signalum_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/signalum', 'omniores:signalum_rod');

    // Lumium
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/lumium', 'omniores:lumium_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/lumium', 'omniores:lumium_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/lumium', 'omniores:lumium_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/lumium', 'omniores:lumium_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/lumium', 'omniores:lumium_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/lumium', 'omniores:lumium_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/lumium', 'omniores:lumium_rod');

    // Enderium
    replaceOut(recipeTypeBlacklist1, '#forge:ingots/enderium', 'omniores:enderium_ingot');
    replaceOut(recipeTypeBlacklist2, '#forge:nuggets/enderium', 'omniores:enderium_nugget');
    replaceOut(recipeTypeBlacklist1, '#forge:storage_blocks/enderium', 'omniores:enderium_block');
    replaceOut(recipeTypeBlacklist1, '#forge:dusts/enderium', 'omniores:enderium_dust');
    replaceOut(recipeTypeBlacklist1, '#forge:plates/enderium', 'omniores:enderium_plate');
    replaceOut(recipeTypeBlacklist1, '#forge:gears/enderium', 'omniores:enderium_gear');
    replaceOut(recipeTypeBlacklist1, '#forge:rods/enderium', 'omniores:enderium_rod');

    // Lapis
    replaceOut({}, "#forge:dusts/lapis", 'omniores:lapis_dust');
    replaceOut({}, '#forge:gears/lapis', 'omniores:lapis_gear');
    replaceOut({type: 'mekanism:combining'}, "minecraft:lapis_ore", "omniores:lapis_ore_stone");
    replaceOut({type: 'mekanism:combining'}, "minecraft:deepslate_lapis_ore", "omniores:lapis_ore_deepslate");

    // Sulfur
    replaceOut(recipeTypeBlacklist1, "#forge:dusts/sulfur", 'omniores:sulfur_dust');
    replaceOut({}, '#forge:storage_blocks/sulfur', 'omniores:sulfur_block');
    replaceOut({}, '#forge:gems/sulfur', 'omniores:sulfur_gem');

    // Cinnabar
    replaceOut({}, "#forge:dusts/cinnabar", 'omniores:cinnabar_dust');
    replaceOut({}, '#forge:storage_blocks/cinnabar', 'omniores:cinnabar_block');
    replaceOut({}, '#forge:gems/cinnabar', 'omniores:cinnabar_gem');

    // Niter
    replaceOut(recipeTypeBlacklist1, "#forge:dusts/niter", 'omniores:potassium_nitrate_dust');
    replaceOut({}, '#forge:storage_blocks/niter', 'omniores:potassium_nitrate_block');
    replaceOut({}, '#forge:gems/niter', 'omniores:potassium_nitrate_gem');

    // Apatite
    replaceOut({}, "#forge:dusts/apatite", 'omniores:apatite_dust');
    replaceOut({}, '#forge:storage_blocks/apatite', 'omniores:apatite_block');
    replaceOut(recipeTypeBlacklist1, '#forge:gems/apatite', 'omniores:apatite_gem');

    // Fluorite
    replaceOut({}, "#forge:dusts/fluorite", 'omniores:fluorite_dust');
    replaceOut({}, '#forge:storage_blocks/fluorite', 'omniores:fluorite_block');
    replaceOut({}, '#forge:gems/fluorite', 'omniores:fluorite_gem');
    replaceOut({}, "mekanism:fluorite_ore", "omniores:fluorite_ore_stone");
    replaceOut({}, "mekanism:deepslate_fluorite_ore", "omniores:fluorite_ore_deepslate");
    
    // Silicon
    replaceOut({}, '#forge:silicon', 'omniores:silicon');
})