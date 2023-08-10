onEvent('recipes', e => {
    let IdPrefix = 'kubejs:create_crushing/';

    e.replaceInput({type: 'create:crushing'}, 'minecraft:deepslate_iron_ore', ['minecraft:deepslate_iron_ore', 'omniores:iron_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:iron_ore', '#forge:ores/iron');
    e.replaceInput({type: 'create:crushing'}, 'minecraft:deepslate_coal_ore', ['minecraft:deepslate_coal_ore', 'omniores:coal_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:coal_ore', '#forge:ores/coal');
    e.replaceInput({type: 'create:crushing'}, 'minecraft:deepslate_copper_ore', ['minecraft:deepslate_copper_ore', 'omniores:copper_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:copper_ore', '#forge:ores/copper');
    e.replaceInput({type: 'create:crushing'}, 'minecraft:deepslate_gold_ore', ['minecraft:deepslate_gold_ore', 'omniores:gold_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:gold_ore', '#forge:ores/gold');
    e.replaceInput({type: 'create:crushing'}, 'minecraft:deepslate_redstone_ore', ['minecraft:deepslate_redstone_ore', 'omniores:redstone_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:redstone_ore', '#forge:ores/redstone');
    e.replaceInput({type: 'create:crushing'}, 'minecraft:deepslate_emerald_ore', ['minecraft:deepslate_emerald_ore', 'omniores:emerald_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:emerald_ore', '#forge:ores/emerald');
    e.replaceInput({type: 'create:crushing'}, 'minecraft:deepslate_lapis_ore', ['minecraft:deepslate_lapis_ore', 'omniores:lapis_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:lapis_ore', '#forge:ores/lapis');
    e.replaceInput({type: 'create:crushing'}, 'minecraft:deepslate_diamond_ore', ['minecraft:deepslate_diamond_ore', 'omniores:diamond_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:diamond_ore', '#forge:ores/diamond');
    e.replaceInput({type: 'create:crushing'}, 'minecraft:nether_gold_ore', ['minecraft:nether_gold_ore', 'omniores:gold_ore_netherrack']);
    e.replaceInput({type: 'create:crushing'}, 'minecraft:nether_quartz_ore', '#forge:ores/quartz');
    e.replaceInput({type: 'create:crushing'}, 'create:deepslate_zinc_ore', ['create:deepslate_zinc_ore', 'omniores:zinc_ore_deepslate']);
    e.replaceInput({type: 'create:crushing'}, 'create:zinc_ore', '#forge:ores/zinc');

    // e.recipes.create.crushing(['2x create:crushed_osmium_ore', Item.of('create:crushed_osmium_ore').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:deepslate').withChance(0.12)], 'omniores:osmium_ore_deepslate').id(IdPrefix+'osmium_ore_deepslate');
    // e.recipes.create.crushing(['2x create:crushed_silver_ore', Item.of('create:crushed_silver_ore').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:deepslate').withChance(0.12)], 'omniores:silver_ore_deepslate').id(IdPrefix+'silver_ore_deepslate');
    // e.recipes.create.crushing(['2x create:crushed_tin_ore', Item.of('create:crushed_tin_ore').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:deepslate').withChance(0.12)], 'omniores:tin_ore_deepslate').id(IdPrefix+'tin_ore_deepslate');
    // e.recipes.create.crushing(['2x create:crushed_lead_ore', Item.of('create:crushed_lead_ore').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:deepslate').withChance(0.12)], 'omniores:lead_ore_deepslate').id(IdPrefix+'lead_ore_deepslate');
    // e.recipes.create.crushing(['2x create:crushed_aluminum_ore', Item.of('create:crushed_aluminum_ore').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:deepslate').withChance(0.12)], 'omniores:aluminum_ore_deepslate').id(IdPrefix+'aluminum_ore_deepslate');
    // e.recipes.create.crushing(['2x create:crushed_uranium_ore', Item.of('create:crushed_uranium_ore').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:deepslate').withChance(0.12)], 'omniores:uranium_ore_deepslate').id(IdPrefix+'uranium_ore_deepslate');
    // e.recipes.create.crushing(['2x create:crushed_nickel_ore', Item.of('create:crushed_nickel_ore').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:deepslate').withChance(0.12)], 'omniores:nickel_ore_deepslate').id(IdPrefix+'nickel_ore_deepslate');
})