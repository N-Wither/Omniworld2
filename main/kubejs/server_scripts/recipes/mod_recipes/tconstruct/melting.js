onEvent('recipes', e => {
    function tconstructMelting(fluid, amount, input, temp, time, id){
        if(id == undefined) id = fluid.split(':')[1];
        e.custom({
            "type": "tconstruct:melting",
            "ingredient": input.toJson(),
            "result": {
                "fluid": fluid,
                "amount": amount
            },
            "temperature": temp,
            "time": time
        }).id('kubejs:melting/' + id);
    }

    tconstructMelting("kubejs:molten_infinity", 90, Ingredient.of("#forge:ingots/infinity"), 2500, 60, 'molten_infinity_from_ingot');
    tconstructMelting("kubejs:molten_infinity", 810, Ingredient.of("#forge:storage_blocks/infinity"), 2500, 180, 'molten_infinity_from_block')
})