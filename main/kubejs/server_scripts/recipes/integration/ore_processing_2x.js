onEvent('recipes', event => {
    function oreProcess2x(output, input, id){
        event.recipes.thermal.pulverizer(output, input).id('kubejs:integration/ore_processing_2x/thermal_pulverizer/'+id);
        event.recipes.create.crushing(output, input).id('kubejs:integration/ore_processing_2x/create_crushing/'+id);
        event.recipes.create.milling(output, input).id('kubejs:integration/ore_processing_2x/create_milling/'+id);
        event.recipes.mekanismEnriching(output[0], input).id('kubejs:integration/ore_processing_2x/mekansim_enriching/'+id);
        if(output.length > 1){
            let ieCrushingSecondaries = new Array;
            for(i = 1; i <= output.length - 1; i++){
                ieCrushingSecondaries = ieCrushingSecondaries.concat(output[i]);
            };
            event.recipes.immersiveengineeringCrusher(output[0], input, ieCrushingSecondaries).id('kubejs:integration/ore_processing_2x/ie_crushing/'+id)
        }
        else event.recipes.immersiveengineeringCrusher(output[0], input).id('kubejs:integration/ore_processing_2x/ie_crushing/'+id)
    }

    oreProcess2x(["2x gobber2:gobber2_globette"], "#gobber2:gobber2_ore", "gobber_globette");
    oreProcess2x(["2x gobber2:gobber2_globette_nether"], "gobber2:gobber2_ore_nether", "gobber_globette_nether");
    oreProcess2x(["2x gobber2:gobber2_globette_end"], "gobber2:gobber2_ore_end", "gobber_globette_end");
    oreProcess2x(["2x beyond_earth:cheese"], "#forge:ores/cheese", "cheese")
})