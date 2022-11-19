onEvent('recipes', event => {
    function grinding(output, input, id, exception) {
        let thr = true;
        let cre = true;
        let mek = true;
        let ime = true;
        let fic = true;

        for (let i = 0; i < exception.length; i++) {
            if (exception[i] == 'thermal') thr = false;
            else if (exception[i] == 'create') cre = false;
            else if (exception[i] == 'mekanism') mek = false;
            else if (exception[i] == 'immersive') ime = false;
            else if (exception[i] == 'ftbic') fic = false;
        }
        
        if (thr) { event.recipes.thermal.pulverizer(output, input).id('kubejs:integration/grinding/thermal_pulverizer/' + id); }
        if (cre) {
            event.recipes.create.crushing(output, input).id('kubejs:integration/grinding/create_crushing/' + id);
            event.recipes.create.milling(output, input).id('kubejs:integration/grinding/create_milling/' + id);
        }
        if (mek) { event.recipes.mekanismCrushing(output[0], input).id('kubejs:integration/grinding/mekansim_crushing/' + id); }
        if (ime) {
            if (output.length > 1) {
                let ieCrushingSecondaries = new Array;
                for (let j = 1; j < output.length; j++) {
                    ieCrushingSecondaries = ieCrushingSecondaries.concat(output[j]);
                };
                event.recipes.immersiveengineeringCrusher(output[0], input, ieCrushingSecondaries).id('kubejs:integration/grinding/ie_crushing/' + id);
            }
            else event.recipes.immersiveengineeringCrusher(output[0], input).id('kubejs:integration/grinding/ie_crushing/' + id);
        }
        if (fic) {
            if (output.length > 1) {
                event.recipes.ftbic.macerating([output[0], output[1]], input).id('kubejs:integration/grinding/ftbic_macerating/' + id);
            }
            else event.recipes.ftbic.macerating(output[0], input).id('kubejs:integration/grinding/ftbic_macerating/' + id);
        }
        
    }

    grinding(["omniores:sulfur_gem", Item.of("omniores:sulfur_gem").withChance(0.4), Item.of("2x omniores:sulfur_dust").withChance(0.5)], "biomesoplenty:brimstone", "brimstone", [""]);
    grinding(["3x thermal:basalz_powder", Item.of("thermal:slag").withChance(0.25)], "thermal:basalz_rod", "basalz_powder", ["thermal"]);
    grinding(["3x thermal:blizz_powder", Item.of("minecraft:snowball").withChance(0.25)], "thermal:blizz_rod", "blizz_powder", ["thermal"]);
    grinding(["3x thermal:blitz_powder", Item.of("omniores:potassium_nitrate_gem").withChance(0.25)], "thermal:blitz_rod", "blitz_powder", ["thermal"]);
    grinding(['omniores:charcoal_dust'], 'minecraft:charcoal', 'charcoal_dust', ['mekanism']);
    grinding(['omniores:obsidian_dust', Item.of('minecraft:obsidian').withChance(0.75)], '#forge:obsidian', 'obsidian_dust', ['mekanism', 'create']);
    grinding(["2x sakura:surimi", Item.of('sakura:surimi').withChance(0.2)], '#forge:fishes', 'surimi', [""]);
    grinding(["omniores:quartz_dust"], "#forge:gems/quartz", 'quartz_dust', ['mekanism', 'thermal', 'immersive']);
    grinding(["omniores:ender_dust"], "minecraft:ender_pearl", 'ender_dust', ['thermal', 'ftbic']);
})