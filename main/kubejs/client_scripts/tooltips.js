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
        'kubejs:torcherino'
    ]

    sponsorItems.forEach(item => {
        tooltip.add(item, Component.translate(kpf('sponsor')).yellow());
    })

    tooltip.add('#forge:ingots/infinity', [textWarn('tooltip.kubejs.infinity_ingot_1'), textWarn('tooltip.kubejs.infinity_ingot_2')]);

    tooltip.add(/sophisticatedstorage:iron_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_iron')));
    tooltip.add(/sophisticatedstorage:gold_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_gold')));
    tooltip.add(/sophisticatedstorage:diamond_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_diamond')));
    tooltip.add(/sophisticatedstorage:netherite_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_netherite')));
    tooltip.add(/sophisticatedstorage:.*shulker_box/, textHelp(kpf('sophisticatedstorage_shulker')));

    tooltip.add('kubejs:affix_gem', textHelp(kpf('affix_gem_1')));
    tooltip.add('kubejs:affix_gem_with_affix', textHelp(kpf('affix_gem_2')));
})