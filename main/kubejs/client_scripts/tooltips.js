// priority: 2

onEvent('item.tooltip', tooltip => {
    let kpf = (name) => {return 'tooltip.kubejs.' + name};

    tooltip.add("cyclic:apple_ender", textWarn(kpf('ender_apple')));

    tooltip.add("laserio:laser_wrench", [textHelp(kpf('laser_wrench_1')), textHelp(kpf('laser_wrench_2'))]);

    tooltip.addAdvanced(/pipez:.*_pipe/, (item, advanced, text) => {
        if (!tooltip.isShift()){
            text.add(1, textHelp(kpf('pipez_0')));
        }
        if (tooltip.isShift()){
            text.add(1, textHelp(kpf('pipez_1')));
            text.add(2, textHelp(kpf('pipez_2')));
            text.add(3, textHelp(kpf('pipez_3')));
            text.add(4, textHelp(kpf('pipez_4')));
            text.add(5, textHelp(kpf('pipez_5')));
        }
    });

    tooltip.add("cyclic:disenchanter", textHelp(kpf('disenchanter')));

    const sponsorItems = [
        'kubejs:taiyaki',
        'kubejs:engulfing_lightning',
        'kubejs:nwither_plush',
        'kubejs:torcherino',
        'kubejs:rhythm_gamers_glove',
        'kubejs:censer'
    ]

    sponsorItems.forEach(item => {
        tooltip.add(item, Component.translate(kpf('sponsor')).yellow());
    });

    tooltip.add(/sophisticatedstorage:iron_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_iron')));
    tooltip.add(/sophisticatedstorage:gold_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_gold')));
    tooltip.add(/sophisticatedstorage:diamond_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_diamond')));
    tooltip.add(/sophisticatedstorage:netherite_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_netherite')));
    tooltip.add(/sophisticatedstorage:.*shulker_box/, textHelp(kpf('sophisticatedstorage_shulker')));

    tooltip.add('kubejs:affix_gem', textHelp(kpf('affix_gem_1')));
    tooltip.add('kubejs:affix_gem_with_affix', textHelp(kpf('affix_gem_2')));
    tooltip.add("enderstorage:ender_tank", textWarn(kpf('ender_tank')));
    tooltip.add("thermal:compost", textHelp(kpf('compost')));
    tooltip.add("miniutilities:magical_egg", textHelp(kpf('magical_egg')));
    tooltip.add("refinedstorage:creative_wireless_grid", textHelp(kpf('wireless_grid')));
    tooltip.add("refinedstorage:creative_wireless_fluid_grid", textHelp(kpf('wireless_fluid_grid')));
    tooltip.add("refinedstorage:creative_wireless_crafting_monitor", textHelp(kpf('wireless_crafting_monitor')));
    tooltip.add("refinedstorageaddons:creative_wireless_crafting_grid", textHelp(kpf('wireless_crafting_grid')));
    tooltip.add("rebornstorage:creative_super_wireless_crafting_grid", textHelp(kpf('super_wireless_grid')));

    tooltip.add(/cyclic:.*pipe/, textWarn(kpf('crash_warn')));

    tooltip.add("globalxp:xp_block", [textWarn('kubejs.warning.remove'), textWarn('kubejs.warning.xpobelisk')]);

    tooltip.add("kubejs:nwither_plush", textHelp('tooltip.kubejs.rotatable_with_wrench'));

    tooltip.add(/mm:.*controller/, textHelp(kpf('multiblock_controller')));
    tooltip.add("mm:heavy_water_plant_controller", textHelp('structure.kubejs.heavy_water_separator'));
    tooltip.add("mm:air_separation_unit_controller", textHelp('structure.kubejs.air_separation_unit'));
    tooltip.add('mm:industrial_machine_controller', [
        textHelp('structure.kubejs.industrial_blast_furnace'),
        textHelp('structure.kubejs.industrial_coke_oven')
    ])

    tooltip.add("pipez:basic_upgrade", [
        Text.of('Item: 16 / 15ticks').color('#dbde54'),
        Text.of('Fluid: 800mb / tick').color('#36f9f6'),
        Text.of('Energy: 4000FE / tick').color('#f97e72'),
        Text.of('Gas: 4000mB / tick').color('#f17ed1')
    ]);
    tooltip.add("pipez:improved_upgrade", [
        Text.of('Item: 32 / 10ticks').color('#dbde54'),
        Text.of('Fluid: 4000mb / tick').color('#36f9f6'),
        Text.of('Energy: 16000FE / tick').color('#f97e72'),
        Text.of('Gas: 16000mB / tick').color('#f17ed1')
    ]);
    tooltip.add("pipez:advanced_upgrade", [
        Text.of('Item: 64 / 5ticks').color('#dbde54'),
        Text.of('Fluid: 8000mb / tick').color('#36f9f6'),
        Text.of('Energy: 64000FE / tick').color('#f97e72'),
        Text.of('Gas: 64000mB / tick').color('#f17ed1')
    ]);
    tooltip.add("pipez:ultimate_upgrade", [
        Text.of('Item: 128 / tick').color('#dbde54'),
        Text.of('Fluid: 24000mb / tick').color('#36f9f6'),
        Text.of('Energy: 256000FE / tick').color('#f97e72'),
        Text.of('Gas: 256000mB / tick').color('#f17ed1')
    ]);
    tooltip.add("pipez:infinity_upgrade", [
        Text.of('Item: 2147483647 / tick (they said so)').color('#dbde54'),
        Text.of('Fluid: 2147483647mb / tick').color('#36f9f6'),
        Text.of('Energy: 2147483647FE / tick').color('#f97e72'),
        Text.of('Gas: 2147483647mB / tick').color('#f17ed1')
    ]);

    tooltip.add("biggerreactors:blutonium_ingot", textHelp(kpf('blutonium')))
    tooltip.add("undergarden:masticator_scales", textHelp(kpf('masticator')))
})