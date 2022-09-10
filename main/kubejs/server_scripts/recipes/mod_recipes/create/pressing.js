onEvent('recipes', e => {
    let rip = 'kubejs:create_pressing/';

    e.recipes.create.pressing('omniores:copper_plate', '#forge:ingots/copper').id(rip + 'copper_plate');
})