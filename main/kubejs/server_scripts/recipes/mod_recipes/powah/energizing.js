onEvent('recipes', e => {
    e.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": "minecraft:nether_star" },
            { "item": "minecraft:redstone_block" },
            { "item": "minecraft:redstone_block" },
            { "item": "powah:blazing_crystal_block" }
        ],
        "energy": 20000000,
        "result": {
            "item": "powah:crystal_nitro",
            "count": 16
        }
    })

    /**
     * @param {Item} output 
     * @param {Array} inputs 
     * @param {number} energy 
     * @param {string} id 
     */
    function PowahEnergizing(output, inputs, energy, id){
        id = id || 'kubejs:energizing/' + Math.floor(Math.random() * 1000000000)
        let ingredients = []
        inputs.forEach(ingredient => {
            ingredients.push(Ingredient.of(ingredient).toJson())
        })
        e.custom({
            type: 'powah:energizing',
            ingredients: ingredients,
            energy: energy,
            result: Item.of(output).toResultJson()
        }).id(id)
    }

    PowahEnergizing('hexcasting:charged_amethyst', ['#forge:gems/amethyst', '#forge:dusts/amethyst', '#forge:dusts/amethyst'], 10000, 'charged_amethyst')
})