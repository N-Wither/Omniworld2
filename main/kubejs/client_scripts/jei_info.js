onEvent('jei.information', i => {
    let kpf = (name) => {return 'tooltip.kubejs.' + name};

    i.add(/sophisticatedstorage:iron_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_iron')));
    i.add(/sophisticatedstorage:gold_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_gold')));
    i.add(/sophisticatedstorage:diamond_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_diamond')));
    i.add(/sophisticatedstorage:netherite_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_netherite')));
    i.add(/sophisticatedstorage:.*shulker_box/, textHelp(kpf('sophisticatedstorage_shulker')));
})