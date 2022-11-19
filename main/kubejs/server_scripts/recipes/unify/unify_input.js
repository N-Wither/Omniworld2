// priority: 0

onEvent('recipes', event => {
    event.replaceInput("refinedstorage:silicon", "#forge:silicon");

    event.replaceInput("ftbic:electronic_circuit", "#forge:circuits/basic");
    event.replaceInput("ftbic:advanced_circuit", "#forge:circuits/advanced");
    event.replaceInput("ftbic:iridium_circuit", "#forge:circuits/elite");
    event.replaceInput("ftbic:rubber", "#forge:rubber");
    event.replaceInput({ id: "ftbic:campfire_cooking/rubber" }, "#forge:slimeballs", "myrtrees:latex");
    event.replaceInput({ id: "ftbic:smelting/rubber" }, "#forge:slimeballs", "myrtrees:latex");
    event.replaceInput({ id: "ftbic:smoking/rubber" }, "#forge:slimeballs", "myrtrees:latex");
    event.replaceInput("ftbic:copper_wire", "#forge:wires/copper");
    event.replaceInput("ftbic:gold_wire", "#forge:wires/gold");
    event.replaceInput("ftbic:aluminum_wire", "#forge:wires/aluminum");
    event.replaceInput("ftbic:ender_dust", "#forge:dusts/ender_pearl");
    event.replaceInput("thermal:cured_rubber", "#forge:rubber");
    event.replaceInput("create:rose_quartz", "#forge:raw_materials/rose_quartz");
    event.replaceInput({ type: "hexerei:mixingcauldron" }, "hexerei:mahogany_planks", "#minecraft:planks/mahogany");
    event.replaceInput({ type: "hexerei:mixingcauldron" }, "hexerei:mahogany_log", "#minecraft:logs/mahogany");
    event.replaceInput({ type: "hexerei:mixingcauldron" }, "hexerei:willow_log", "#minecraft:logs/willow");
    event.replaceInput("tconstruct:dragon_scale", "#forge:dragon_scales");
    event.replaceInput("mysticalagradditions:dragon_scale", "#forge:dragon_scales");
    event.replaceInput("quark:dragon_scale", "#forge:dragon_scales");
    event.replaceInput({id: 'create:crushing/obsidian'}, 'minecraft:obsidian', '#forge:obsidian');
    event.replaceInput('create:powdered_obsidian', 'omniores:obsidian_dust');
    event.replaceInput("immersiveengineering:storage_aluminum", '#forge:storage_blocks/aluminum');
    event.replaceInput("immersiveengineering:storage_lead", '#forge:storage_blocks/lead');
    event.replaceInput("immersiveengineering:storage_silver", '#forge:storage_blocks/silver');
    event.replaceInput("immersiveengineering:storage_nickel", '#forge:storage_blocks/nickel');
    event.replaceInput("immersiveengineering:storage_uranium", '#forge:storage_blocks/uranium');
    event.replaceInput("immersiveengineering:storage_constantan", '#forge:storage_blocks/constantan');
    event.replaceInput("immersiveengineering:storage_steel", '#forge:storage_blocks/steel');
    event.replaceInput("immersiveengineering:storage_electrum", '#forge:storage_blocks/electrum');
    event.replaceInput('mysticalworld:sapphire_block', '#forge:storage_blocks/sapphire');
    event.replaceInput('mysticalworld:lead_block', '#forge:storage_blocks/lead');
    event.replaceInput('mysticalworld:silver_block', '#forge:storage_blocks/silver');
    event.replaceInput('mysticalworld:tin_block', '#forge:storage_blocks/tin');
    event.replaceInput({type: 'thermal:smelter_catalyst'}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceInput({type: 'thermal:smelter_catalyst'}, 'thermal:cinnabar_dust', '#forge:dusts/cinnabar');
    event.replaceInput('thermal:raw_lead', '#forge:raw_materials/lead');
    event.replaceInput('thermal:raw_nickel', '#forge:raw_materials/nickel');
    event.replaceInput('thermal:raw_silver', '#forge:raw_materials/silver');
    event.replaceInput('thermal:raw_tin', '#forge:raw_materials/tin');
    event.replaceInput({type: 'thermal:smelter'}, 'create:zinc_ingot', ['#forge:ingots/zinc', '#forge:dusts/zinc']);
    event.replaceInput("immersiveengineering:slag", '#forge:slag');
    event.replaceInput("immersiveengineering:ingot_steel", '#forge:ingots/steel');
    event.replaceInput("neapolitan:dried_vanilla_pods", "#forge:vanilla")
})