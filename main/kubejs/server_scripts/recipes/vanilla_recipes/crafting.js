// priority: 1

onEvent('recipes', event => {
    /**
     * @param {Item} output 
     * @param {[String]} pattern 
     * @param {object} key 
     * @param {String} id 
     */
    function shaped(output, pattern, key, id){
        id = id || output.split(':')[1];
        event.shaped(output, pattern, key).id('kubejs:crafting_shaped/'+id);
    }
    /**
     * @param {Item} output 
     * @param {Ingredient} input 
     * @param {String} id 
     */
    function shapeless(output, input, id){
        event.shapeless(output, input).id('kubejs:crafting_shapeless/'+id);
    }

    // Minecraft
    shaped('minecraft:hopper', ['ILI', 'ILI', ' I '], {
        I: '#forge:ingots/iron',
        L: '#minecraft:logs'
    }, 'hopper_from_log');
    shaped('16x minecraft:stick', ['L', 'L'], {
        L: '#minecraft:logs'
    }, 'stick_from_log');
    shaped('minecraft:chest', ['PPP', 'P P', 'PPP'], {
        P: '#minecraft:planks'
    }, 'chest');

    // Mekanism
    shaped('mekanism:steel_casing', ['SCS', 'HOH', 'SCS'], {
        S: 'immersiveengineering:component_steel',
        H: '#thermal:glass/hardened',
        O: '#forge:ingots/osmium',
        C: '#forge:circuits/basic'
    }, 'steel_casing');
    shaped("mekanism:metallurgic_infuser", ['OFO', 'RCR', 'OFO'], {
        O: '#forge:ingots/osmium',
        F: 'ftbic:powered_furnace',
        R: '#forge:dusts/redstone',
        C: 'mekanism:steel_casing'
    }, 'metallurgic_infuser');
    
    // FTB Industrial Contraptions
    shapeless("ftbic:enderium_wire", ["#forge:plates/enderium", "#immersiveengineering:tools/wirecutters"], "enderium_wire");

    // Avaritia
    shapeless('9x avaritia:neutronium_ingot', '#forge:storage_blocks/neutronium', 'neutronium_ingot_from_block');
    shapeless('9x avaritia:crystal_matrix_ingot', '#forge:storage_blocks/crystal_matrix', 'crystal_matrix_ingot_from_block');

    // Guidebooks
    shapeless(akashicTome, "eccentrictome:tome", 'full_eccentric_tome');
    shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:omniguide"}'), ['3x #forge:rods/wooden', 'minecraft:dirt'], 'omniguide')

    // PipeZ
    shaped("2x pipez:basic_upgrade", ['IGI', 'VRV'], {
        I: "#forge:nuggets/iron",
        G: "#forge:glass",
        V: "#forge:ingots/invar",
        R: "#forge:dusts/redstone"
    }, 'basic_upgrade');
    shaped("2x pipez:improved_upgrade", ['IGI', 'ERE'], {
        I: "#forge:nuggets/iron",
        G: "#forge:glass",
        E: "#forge:ingots/electrum",
        R: "#forge:dusts/redstone"
    }, 'improved_upgrade');
    shaped("2x pipez:advanced_upgrade", ['IGI', 'SRS'], {
        I: "#forge:nuggets/iron",
        G: "#forge:glass",
        S: "#forge:ingots/signalum",
        R: "#forge:dusts/redstone"
    }, 'advanced_upgrade');
    shaped("2x pipez:ultimate_upgrade", ['IGI', 'ERE'], {
        I: "#forge:nuggets/iron",
        G: "#forge:glass",
        E: "#forge:ingots/enderium",
        R: "#forge:dusts/redstone"
    }, 'ultimate_upgrade');
    shaped("64x pipez:infinity_upgrade", ['NGN', 'CIC'], {
        N: "#forge:nuggets/neutronium",
        G: "#forge:glass",
        C: "#forge:ingots/crystal_matrix",
        I: "#forge:ingots/infinity"
    }, 'infinity_upgrade')
    shapeless("pipez:improved_upgrade", ["pipez:basic_upgrade", "#forge:ingots/electrum"], 'improved_upgrade_alt');
    shapeless("pipez:advanced_upgrade", [["pipez:basic_upgrade", "pipez:improved_upgrade"], "#forge:ingots/signalum"], 'advanced_upgrade_alt');
    shapeless("pipez:ultimate_upgrade", [["pipez:basic_upgrade", "pipez:improved_upgrade", "pipez:advanced_upgrade"], "#forge:ingots/enderium"], 'ultimate_upgrade_alt');

    // Gems & Jewels
    shaped("gemsnjewels:pale_diamond_helmet", ['DDD', 'D D'], {D: "#forge:gems/pale_diamond"}, 'pale_diamond_helmet');
    shaped("gemsnjewels:pale_diamond_chestplate", ['D D', 'DDD', 'DDD'], {D: "#forge:gems/pale_diamond"}, 'pale_diamond_chestplate');
    shaped("gemsnjewels:pale_diamond_leggings", ['DDD', 'D D', 'D D'], {D: "#forge:gems/pale_diamond"}, 'pale_diamond_leggings');
    shaped("gemsnjewels:pale_diamond_boots", ['D D', 'D D'], {D: "#forge:gems/pale_diamond"}, 'pale_diamond_boots');

    // Common Materials
    shapeless('2x omniores:brass_dust', ['#forge:dusts/copper', '#forge:dusts/zinc'], 'brass_dust');
    shapeless('4x omniores:bronze_dust', ['3x #forge:dusts/copper', '#forge:dusts/tin'], 'bronze_dust');

    // KubeJS
    shapeless('kubejs:taiyaki', ['#forge:flour', '#forge:flour', 'neapolitan:roasted_adzuki_beans'], 'taiyaki');

    // Reborn Storage
    shaped("rebornstorage:super_wireless_crafting_grid", ['ICI', 'WFW', 'IMI'], {
        I: 'refinedstorage:quartz_enriched_iron',
        C: 'refinedstorageaddons:wireless_crafting_grid',
        W: 'extradisks:withering_processor',
        F: 'refinedstorage:wireless_fluid_grid',
        M: 'refinedstorage:wireless_crafting_monitor'
    }, 'super_grid');

    // Immersive Petroleum
    event.shaped("8x immersivepetroleum:asphalt", ['SBS', 'GWG', 'SBS'], {
        S: '#forge:sand',
        B: '#forge:bitumen',
        G: '#forge:gravel',
        W: "minecraft:water_bucket"
    }).id("immersivepetroleum:asphalt");

    event.shaped("12x immersivepetroleum:asphalt", ['SBS', 'GWG', 'SBS'], {
        S: '#forge:slag',
        B: '#forge:bitumen',
        G: '#forge:gravel',
        W: "minecraft:water_bucket"
    }).id("immersivepetroleum:asphalt2");

    // Antimatter to other items
    /**
     * @param {Item} item 
     * @param {[String]} pattern 
     * @param {String} id 
     */
    let antimatter = (item, pattern, id) => {
        if(id == undefined) {id = item.split(':')[1]}
        event.recipes.cucumber.shaped_no_mirror(item, pattern, {a: "ftbic:antimatter"}).id('kubejs:antimatter/'+ id);
    }
    antimatter("64x minecraft:dirt", ['a  ', '   ', '   ']);
    antimatter("64x minecraft:stone", [' a ', '   ', '   ']);
    antimatter('64x minecraft:cobblestone', ['  a', '   ', '   ']);
    antimatter("32x minecraft:oak_log", ['   ', 'a  ', '   ']);
    antimatter("64x minecraft:sand", ['   ', ' a ', '   ']);
    antimatter("64x minecraft:gravel", ['   ', '  a', '   ']);
    antimatter("32x minecraft:obsidian", ['aa ', 'aa ', '   ']);
    antimatter("4x minecraft:diamond", ['aaa', 'a a', 'aaa']);
    antimatter('48x minecraft:iron_ingot', ['aaa', '   ', '   ']);
    antimatter('32x minecraft:gold_ingot', ['   ', 'aaa', '   ']);
    antimatter("48x minecraft:amethyst_shard", ['  a', ' a ', 'a  ']);
    antimatter("minecraft:ancient_debris", ['aaa', 'aaa', 'aaa']);
    antimatter("24x minecraft:redstone", ['   ', ' a ', 'aaa']);

    // Mystical Agriculture
    shaped('2x occultism:iesnium_ingot', ['EEE', 'E E', 'EEE'], {E: "mysticalagriculture:iesnium_essence"}, 'essence/iesnium')

    // Solar Flux Reborn
    if(Platform.isLoaded('solarflux')){
        shaped("2x solarflux:sp_custom_wyvern", ['ABA', 'BCB', 'ABA'], {A: "solarflux:sp_8", B: "draconicevolution:wyvern_energy_core", C: "draconicevolution:wyvern_core"}, 'wyvern_panel')
    }

    // Bugfix
    shapeless("minecraft:copper_ingot", '9x #forge:nuggets/copper', 'copper_ingot')

    // Masterful Machinery
    shaped("mm:base_machine_block", [' I ', 'S S', ' I '], {I: '#forge:plates/iron', S: '#forge:plates/steel'}, 'base_machine_block')
    shaped("mm:energy_input_port", ['E', 'B'], {E: "thermal:rf_coil", B: "mm:base_machine_block"})
    shaped("mm:energy_output_port", ['b', 'e'], {e: "thermal:rf_coil", b: "mm:base_machine_block"})
    shaped("mm:fluid_input_port", ['k', 'b'], {k: "minecraft:bucket", b: "mm:base_machine_block"})
    shaped("mm:fluid_output_port", ['b', 'k'], {b: "mm:base_machine_block", k: 'minecraft:bucket'})
    shaped("mm:gas_input_port", ['a', 'b'], {b: "mm:base_machine_block", a: "mekanism:alloy_infused"})
    shaped("mm:gas_output_port", ['b', 'a'], {b: "mm:base_machine_block", a: "mekanism:alloy_infused"})
    shaped("mm:item_input_port", ['c', 'b'], {b: "mm:base_machine_block", c: "#forge:chests/wooden"})
    shaped("mm:item_output_port", ['b', 'c'], {b: "mm:base_machine_block", c: '#forge:chests/wooden'})
    shaped("mm:large_energy_input_port", ['e', 'p', 'e'], {e: "mekanism:energy_tablet", p: "mm:energy_input_port"})
    shaped("mm:large_energy_output_port", ['e', 'p', 'e'], {e: "mekanism:energy_tablet", p: "mm:energy_output_port"})
    shaped("mm:large_fluid_input_port", ['e', 'p', 'e'], {e: "minecraft:bucket", p: "mm:fluid_input_port"})
    shaped("mm:large_fluid_output_port", ['e', 'p', 'e'], {e: "minecraft:bucket", p: "mm:fluid_output_port"})
    shaped("mm:large_item_input_port", ['e', 'p', 'e'], {e: "#forge:chests/wooden", p: "mm:item_input_port"})
    shaped("mm:large_item_output_port", ['e', 'p', 'e'], {e: "#forge:chests/wooden", p: "mm:item_output_port"})
    shaped("mm:laser_input_port", ['m', 'b'], {b: "mm:base_machine_block", m: "mekanismgenerators:laser_focus_matrix"})
    shaped("mm:laser_output_port", ['b', 'm'], {b: "mm:base_machine_block", m: "mekanismgenerators:laser_focus_matrix"})
    shaped("mm:rot_input_port", ['m', 'b'], {b: "mm:base_machine_block", m: "create:cogwheel"})
    shaped("mm:rot_output_port", ['b', 'm'], {b: "mm:base_machine_block", m: "create:cogwheel"})

    shaped("mm:heavy_water_plant_controller", [' S ', 'EBE', ' C '], {
        S: "immersiveengineering:sheetmetal_steel",
        E: 'minecraft:bucket',
        B: "mm:base_machine_block",
        C: "#forge:circuits/elite"
    })
    shaped("mm:air_separation_unit_controller", [' S ', 'PBP', ' C '], {
        S: "immersiveengineering:sheetmetal_iron",
        P: "pneumaticcraft:pressure_tube",
        B: "mm:base_machine_block",
        C: '#forge:circuits/elite'
    })
    shaped('mm:industrial_machine_controller', [' C ', 'CBC', ' C '], {C: '#forge:circuits/basic', B: 'mm:base_machine_block'})

    // Druidcraft
    event.shaped("4x druidcraftrg:beam", ['L', 'R', 'L'], {L: '#minecraft:logs', R: '#forge:rope'}).id('druidcraftrg:beam')

    // Cyclic
    event.shapeless('4x minecraft:nether_wart', 'minecraft:nether_wart_block').id('cyclic:crafting/nether_wart_reverse')
})