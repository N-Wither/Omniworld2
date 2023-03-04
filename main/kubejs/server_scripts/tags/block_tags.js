onEvent("block.tags", event => {
    event.add("forge:farmland", /.*farmland/);
    event.add('forge:storage_blocks/bismuth', /enlightened_end:.*bismuth_sheets/)
})