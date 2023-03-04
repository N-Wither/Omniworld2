onEvent('recipes', e => {
    /**
     * @param {string} fluid 
     * @param {number} amount 
     * @param {Internal.Ingredient} input 
     * @param {number} temp 
     * @param {number} time 
     * @param {string} id 
     */
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
    tconstructMelting("kubejs:molten_infinity", 810, Ingredient.of("#forge:storage_blocks/infinity"), 2500, 180, 'molten_infinity_from_block');
    tconstructMelting("thermal:glowstone", 250, Ingredient.of("#forge:dusts/glowstone"), 700, 30, 'glowstone_dust')
    tconstructMelting("thermal:glowstone", 1000, Ingredient.of("#forge:storage_blocks/glowstone"), 700, 90, 'glowstone')
})