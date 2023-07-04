onEvent('recipes', e => {
    e.recipes.thermal.insolator_catalyst("immersiveengineering:fertilizer").primaryMod(2.0).secondaryMod(2.0).energyMod(0.8).useChance(0.5)
    e.recipes.thermal.insolator_catalyst("mysticalagriculture:fertilized_essence").primaryMod(1.8).secondaryMod(1.8).energyMod(0.8).useChance(0.5)
    e.recipes.thermal.insolator_catalyst("mysticalagriculture:mystical_fertilizer").primaryMod(5.0).secondaryMod(5.0).energyMod(0.4).useChance(0.8)
    e.recipes.thermal.insolator_catalyst("industrialforegoing:fertilizer").primaryMod(1.75).secondaryMod(1.5).energyMod(0.6).useChance(0.3)

    /**
     * @param {Internal.ArrayOrSelf_<Internal.ItemStackJS_>} output 
     * @param {Internal.IngredientJS_} input 
     * @param {number} water 
     * @param {number} energy 
     * @param {string} id 
     * @returns {Internal.InsolatorRecipeJS}
     */
    function ThermalInsolator(output, input, water, energy, id){
        water = water || 1000 // KubeJS don't allow me use 'water = 1000' in parameters or I just don't know how to do that.
        energy = energy || 60000 // ↑ Look that.
        id = id || input.split(':')[1]
        e.recipes.thermal.insolator(output, input).water(water).energy(energy).id('kubejs:thermal_insolator/' + id)
    }

    /**
     * @param {Item} sapling 
     * @param {Item[]} output 
     */
    function ILikeTrees_Insolator(sapling, output){
        let realOutput = [];
        if(output.length == 1){
            realOutput.push(output[0])
        }else{
            output.forEach(item => {
                realOutput.push(item)
            })
        }
        realOutput.push(Item.withChance(sapling, 1.1));
        ThermalInsolator(realOutput, sapling);
    }

    /**
     * @param {string} crop 
     * @param {string} wood 
     */
    function CroptopiaTrees_Insolator(crop, wood){
        let log = `4x minecraft:${wood}_log`;
        let sapling = `croptopia:${crop}_sapling`;
        ThermalInsolator([Item.withChance(log, 1), Item.withChance(`2x croptopia:${crop}`, 1), Item.withChance(sapling, 1.1)], sapling);
    }

    ThermalInsolator([Item.withChance("6x ars_elemental:yellow_archwood_log", 1.0), Item.withChance("ars_elemental:yellow_archwood_sapling", 1.1)], "ars_elemental:yellow_archwood_sapling")
    ThermalInsolator([Item.withChance("6x ars_nouveau:red_archwood_log", 1.0), Item.withChance("ars_nouveau:red_archwood_sapling", 1.1)], "ars_nouveau:red_archwood_sapling")
    ThermalInsolator([Item.withChance("6x ars_nouveau:blue_archwood_log", 1.0), Item.withChance("ars_nouveau:blue_archwood_sapling", 1.1)], "ars_nouveau:blue_archwood_sapling")
    ThermalInsolator([Item.withChance("6x ars_nouveau:green_archwood_log", 1.0), Item.withChance("ars_nouveau:green_archwood_sapling", 1.1)], "ars_nouveau:green_archwood_sapling")
    ThermalInsolator([Item.withChance("6x ars_nouveau:purple_archwood_log", 1.0), Item.withChance("ars_nouveau:purple_archwood_sapling", 1.1)], "ars_nouveau:purple_archwood_sapling")
    ThermalInsolator([Item.withChance("6x biomemakeover:blighted_balsa_log", 1), Item.withChance("biomemakeover:blighted_balsa_sapling", 1.1)], "biomemakeover:blighted_balsa_sapling")
    ILikeTrees_Insolator("biomemakeover:willow_sapling", [Item.withChance("6x biomemakeover:willow_log", 1)])
    ILikeTrees_Insolator("biomemakeover:swamp_cypress_sapling", [Item.withChance("6x biomemakeover:swamp_cypress_log", 1)])
    ILikeTrees_Insolator("biomemakeover:ancient_oak_sapling", [Item.withChance("6x biomemakeover:ancient_oak_log", 1)])
    ILikeTrees_Insolator("blue_skies:bluebright_sapling", [Item.withChance("6x blue_skies:bluebright_log", 1)])
    ILikeTrees_Insolator("blue_skies:starlit_sapling", [Item.withChance("6x blue_skies:starlit_log", 1)])
    ILikeTrees_Insolator("blue_skies:frostbright_sapling", [Item.withChance("6x blue_skies:frostbright_log", 1)])
    ILikeTrees_Insolator("blue_skies:lunar_sapling", [Item.withChance("6x blue_skies:lunar_log", 1)])
    ILikeTrees_Insolator("blue_skies:dusk_sapling", [Item.withChance("6x blue_skies:dusk_log", 1)])
    ILikeTrees_Insolator("blue_skies:maple_sapling", [Item.withChance("6x blue_skies:maple_log", 1)])
    ILikeTrees_Insolator("blue_skies:cherry_sapling", [Item.withChance("6x blue_skies:cherry_log", 1)])
    ThermalInsolator([Item.withChance("6x blue_skies:dusk_log", 1), Item.withChance("2x blue_skies:crescent_fruit", 1), Item.withChance("blue_skies:crescent_fruit_sapling", 1.1)], "blue_skies:crescent_fruit_sapling")
    CroptopiaTrees_Insolator('almond', 'dark_oak')
    ThermalInsolator([Item.withChance('4x minecraft:oak_log', 1), Item.withChance('2x minecraft:apple', 1), Item.withChance('croptopia:apple_sapling', 1.1)], 'croptopia:apple_sapling')
    CroptopiaTrees_Insolator('apricot', 'oak')
    CroptopiaTrees_Insolator('avocado', 'spruce')
    CroptopiaTrees_Insolator('banana', 'jungle')
    CroptopiaTrees_Insolator('cashew', 'dark_oak')
    CroptopiaTrees_Insolator('cherry', 'oak')
    CroptopiaTrees_Insolator('coconut', 'jungle')
    CroptopiaTrees_Insolator('date', 'jungle')
    CroptopiaTrees_Insolator('dragonfruit', 'jungle')
    CroptopiaTrees_Insolator('fig', 'jungle')
    CroptopiaTrees_Insolator('grapefruit', 'jungle')
    CroptopiaTrees_Insolator('kumquat', 'jungle')
    CroptopiaTrees_Insolator('lemon', 'oak')
    CroptopiaTrees_Insolator('lime', 'oak')
    CroptopiaTrees_Insolator('mango', 'jungle')
    CroptopiaTrees_Insolator('nectarine', 'oak')
    CroptopiaTrees_Insolator('nutmeg', 'jungle')
    CroptopiaTrees_Insolator('orange', 'oak')
    CroptopiaTrees_Insolator('peach', 'oak')
    CroptopiaTrees_Insolator('pear', 'oak')
    CroptopiaTrees_Insolator('pecan', 'dark_oak')
    CroptopiaTrees_Insolator('persimmon', 'jungle')
    CroptopiaTrees_Insolator('plum', 'jungle')
    CroptopiaTrees_Insolator('starfruit', 'oak')
    CroptopiaTrees_Insolator('walnut', 'dark_oak')
    ThermalInsolator([Item.withChance("4x croptopia:cinnamon_log", 1), Item.withChance("2x croptopia:cinnamon", 1), Item.withChance('croptopia:cinnamon_sapling', 1.1)], 'croptopia:cinnamon_sapling')
    ThermalInsolator([Item.withChance("6x ecologics:coconut_log", 1), Item.withChance("ecologics:coconut", 1.5), Item.withChance("ecologics:coconut_seedling", 1.1)], "ecologics:coconut_seedling")
    ThermalInsolator([Item.withChance("6x ecologics:walnut_log", 1), Item.withChance("ecologics:walnut", 1.5), Item.withChance("ecologics:walnut_sapling", 1.1)], "ecologics:walnut_sapling")
    ILikeTrees_Insolator("phantasm:pream_sapling", [Item.withChance('6x phantasm:pream_log', 1), Item.withChance('phantasm:pream_berry', 1.2)])
    ILikeTrees_Insolator("forbidden_arcanus:cherrywood_sapling", [Item.withChance("4x forbidden_arcanus:cherrywood_log", 1), Item.withChance("forbidden_arcanus:cherry_flower_vines", 0.2), Item.withChance("forbidden_arcanus:cherry_peach", 0.5)])
    ILikeTrees_Insolator("forbidden_arcanus:mysterywood_sapling", [Item.withChance("6x forbidden_arcanus:mysterywood_log", 1), Item.withChance('minecraft:gold_nugget', 1)])
    // ILikeTrees_Insolator("hexerei:mahogany_sapling", [Item.withChance("6x hexerei:mahogany_log", 1)])
    // ILikeTrees_Insolator("hexerei:willow_sapling", [Item.withChance("6x hexerei:willow_log", 1)])
    ILikeTrees_Insolator("integrateddynamics:menril_sapling", [Item.withChance("6x integrateddynamics:menril_log", 1), Item.withChance("2x integrateddynamics:menril_berries", 1), Item.withChance("integrateddynamics:menril_log_filled", 1)])
    ILikeTrees_Insolator("malum:runewood_sapling", [Item.withChance("6x malum:runewood_log", 1), Item.withChance("malum:exposed_runewood_log", 0.4)])
    ILikeTrees_Insolator("malum:soulwood_growth", [Item.withChance("6x malum:soulwood_log", 1), Item.withChance("malum:exposed_runewood_log", 0.4)])
    ILikeTrees_Insolator("myrtrees:rubberwood_sapling", [Item.withChance("6x myrtrees:rubberwood_log", 1), Item.withChance('minecraft:apple', 0.25)])
    ILikeTrees_Insolator("occultism:otherworld_sapling", [Item.withChance("6x occultism:otherworld_log", 1)])
    ILikeTrees_Insolator("sakura:sakura_sapling", [Item.withChance("6x sakura:sakura_log", 1)])
    ILikeTrees_Insolator("sakura:maple_sapling_green", [Item.withChance("6x sakura:maple_log", 1)])
    ILikeTrees_Insolator("sakura:maple_sapling_orange", [Item.withChance("6x sakura:maple_log", 1)])
    ILikeTrees_Insolator("sakura:maple_sapling_yellow", [Item.withChance("6x sakura:maple_log", 1)])
    ILikeTrees_Insolator("sakura:maple_sapling_red", [Item.withChance("6x sakura:maple_log", 1)])
    ILikeTrees_Insolator("silentgear:netherwood_sapling", [Item.withChance("6x silentgear:netherwood_log", 1), Item.withChance("silentgear:netherwood_stick", 0.9), Item.withChance("silentgear:nether_banana", 0.5)])
    ILikeTrees_Insolator("twilightforest:twilight_oak_sapling", [ChanceItem("6x twilightforest:twilight_oak_log"), ChanceItem("twilightforest:hollow_oak_sapling", 0.01)])
    ILikeTrees_Insolator("twilightforest:canopy_sapling", [ChanceItem("6x twilightforest:canopy_log")])
    ILikeTrees_Insolator("twilightforest:mangrove_sapling", [ChanceItem("6x twilightforest:mangrove_log")])
    ILikeTrees_Insolator("twilightforest:darkwood_sapling", [ChanceItem("6x twilightforest:dark_log")])
    ILikeTrees_Insolator("twilightforest:time_sapling", [ChanceItem("6x twilightforest:time_log"), ChanceItem("twilightforest:time_log_core", 0.05)])
    ILikeTrees_Insolator("twilightforest:transformation_sapling", [ChanceItem("6x twilightforest:transformation_log"), ChanceItem("twilightforest:transformation_log_core", 0.05)])
    ILikeTrees_Insolator("twilightforest:sorting_sapling", [ChanceItem("6x twilightforest:sorting_log"), ChanceItem("twilightforest:sorting_log_core", 0.05)])
    ILikeTrees_Insolator("twilightforest:mining_sapling", [ChanceItem("6x twilightforest:mining_log"), ChanceItem("twilightforest:mining_log_core", 0.05)])
    ILikeTrees_Insolator("twilightforest:rainbow_oak_sapling", [ChanceItem("6x twilightforest:twilight_oak_log")])
    ILikeTrees_Insolator("undergarden:grongle_sapling", [ChanceItem("6x undergarden:grongle_log")])
    ILikeTrees_Insolator("undergarden:smogstem_sapling", [ChanceItem("6x undergarden:smogstem_log")])
    ILikeTrees_Insolator("undergarden:wigglewood_sapling", [ChanceItem("6x undergarden:wigglewood_log")])

})