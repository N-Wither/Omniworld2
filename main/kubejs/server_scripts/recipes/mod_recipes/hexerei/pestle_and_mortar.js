onEvent('recipes', e => {
    /**
     * @param {Item} output 
     * @param {Array} inputs 
     * @param {number} time 
     * @param {string} id 
     */
    function HexereiPestle(output, inputs, time, id){
        id = id || 'kubejs:pestle_and_mortar/' + Item.of(output).getId().split(':')[1]
        let ingredients = []
        inputs.forEach(item => {
            ingredients.push(Ingredient.of(item).toJson())
        })
        e.custom({
            type: 'hexerei:pestle_and_mortar',
            ingredients: ingredients,
            output: Item.of(output).toResultJson(),
            grindingTime: time
        }).id(id)
    }

    HexereiPestle("5x omniores:amethyst_dust", ['#forge:gems/amethyst', '#forge:gems/amethyst', '#forge:gems/amethyst', '#forge:gems/amethyst', '#forge:gems/amethyst'], 200)
})