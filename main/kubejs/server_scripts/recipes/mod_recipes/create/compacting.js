onEvent("recipes", e => {
    let rip = 'kubejs:create_compacting/';

    e.recipes.create.compacting('ftbic:dense_copper_plate', '8x #forge:plates/copper').id(rip + 'dense_copper_plate');
})