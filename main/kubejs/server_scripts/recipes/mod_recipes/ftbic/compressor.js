onEvent('recipes', e => {
    let rip = 'kubejs:ftbic_compressor/';

    e.recipes.ftbic.compressing('omniores:nickel_plate', INGOT(1, 'nickel')).id(rip + 'nickel_plate');
    e.recipes.ftbic.compressing('omniores:zinc_plate', INGOT(1, 'zinc')).id(rip + 'zinc_plate');
    e.recipes.ftbic.compressing('omniores:silver_plate', INGOT(1, 'silver')).id(rip + 'silver_plate');
    e.recipes.ftbic.compressing('omniores:cobalt_plate', INGOT(1, 'cobalt')).id(rip + 'cobalt_plate');
    e.recipes.ftbic.compressing('omniores:osmium_plate', INGOT(1, 'osmium')).id(rip + 'osmium_plate');
    e.recipes.ftbic.compressing('omniores:brass_plate', INGOT(1, 'brass')).id(rip + 'brass_plate');
    e.recipes.ftbic.compressing('omniores:steel_plate', INGOT(1, 'steel')).id(rip + 'steel_plate');
    e.recipes.ftbic.compressing('omniores:electrum_plate', INGOT(1, 'electrum')).id(rip + 'electrum_plate');
    e.recipes.ftbic.compressing('omniores:invar_plate', INGOT(1, 'invar')).id(rip + 'invar_plate');
    e.recipes.ftbic.compressing('omniores:constantan_plate', INGOT(1, 'constantan')).id(rip + 'constantan_plate');
    e.recipes.ftbic.compressing('omniores:signalum_plate', INGOT(1, 'signalum')).id(rip + 'signalum_plate');
    e.recipes.ftbic.compressing('omniores:lumium_plate', INGOT(1, 'lumium')).id(rip + 'lumium_plate');
    e.recipes.ftbic.compressing('omniores:netherite_plate', INGOT(1, 'netherite')).id(rip + 'netherite_plate');
    e.recipes.ftbic.compressing('omniores:lapis_plate', GEM(1, 'lapis')).id(rip + 'lapis_plate');
    e.recipes.ftbic.compressing('omniores:diamond_plate', GEM(1, 'diamond')).id(rip + 'diamond_plate');
    e.recipes.ftbic.compressing('omniores:emerald_plate', GEM(1, 'emerald')).id(rip + 'emerald_plate');
    e.recipes.ftbic.compressing('omniores:ruby_plate', GEM(1, 'ruby')).id(rip + 'ruby_plate');
    e.recipes.ftbic.compressing('omniores:sapphire_plate', GEM(1, 'sapphire')).id(rip + 'sapphire_plate');
    e.recipes.ftbic.compressing("immersiveengineering:dust_hop_graphite", DUST(8, 'coal_coke')).id(rip + 'hop_graphite_dust_1')
    e.recipes.ftbic.compressing("immersiveengineering:dust_hop_graphite", DUST(8, 'coal_petcoke')).id(rip + 'hop_graphite_dust_2')
})