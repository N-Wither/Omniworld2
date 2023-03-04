onEvent('jei.information', i => {
    let kpf = (name) => {return 'tooltip.kubejs.' + name};

    i.add(/sophisticatedstorage:iron_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_iron')));
    i.add(/sophisticatedstorage:gold_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_gold')));
    i.add(/sophisticatedstorage:diamond_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_diamond')));
    i.add(/sophisticatedstorage:netherite_(chest|barrel|shulker_box)/, textHelp(kpf('sophisticatedstorage_craft_netherite')));
    i.add(/sophisticatedstorage:.*shulker_box/, textHelp(kpf('sophisticatedstorage_shulker')));
    i.add("forbidden_arcanus:hephaestus_forge", Component.translate(kpf('hephaestus_forge')));
    i.add("miniutilities:experience_pearl", Component.translate(kpf('experience_pearl')));
    i.add("refinedstorage:creative_wireless_grid", textHelp(kpf('wireless_grid')));
    i.add("refinedstorage:creative_wireless_fluid_grid", textHelp(kpf('wireless_fluid_grid')));
    i.add("refinedstorage:creative_wireless_crafting_monitor", textHelp(kpf('wireless_crafting_monitor')));
    i.add("refinedstorageaddons:creative_wireless_crafting_grid", textHelp(kpf('wireless_crafting_grid')));
    i.add("rebornstorage:creative_super_wireless_crafting_grid", textHelp(kpf('super_wireless_grid')));
})