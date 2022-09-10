onEvent("recipes", event => {
    let rip = 'kubejs:immersive_metal_press/';

    event.recipes.immersiveengineering.metal_press("2x ftbic:enderium_wire", "#forge:ingots/enderium", "immersiveengineering:mold_wire").id(rip + "enderium_wire");
    event.recipes.immersiveengineering.metal_press('ftbic:dense_copper_plate', '8x #forge:plates/copper', 'immersiveengineering:mold_plate').id(rip + 'dense_copper_plate');
    
})