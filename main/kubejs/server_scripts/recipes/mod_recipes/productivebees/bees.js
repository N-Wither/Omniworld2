onEvent('recipes', e => {
    /**
     * @param {string} source 
     * @param {string} result 
     * @param {*} item 
     */
    let beeConversion = (source, result, item) => {
        e.custom({
            type: 'productivebees:bee_conversion',
            source: source,
            result: result,
            item: item
        }).id('kubejs:bee_conversion/' + result.split(':')[1])
    }

    beeConversion('kubejs:neutronium', 'kubejs:infinity', ForgeItem("avaritia:infinity_block"))
    e.recipes.extendedcrafting.shapedTable(Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"kubejs:neutronium"}}'),
        ['NNNNN', 'NNNNN', 'NNENN', 'NNNNN', 'NNNNN'],
        {
            N: "avaritia:neutronium_block",
            E: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:insanium"}}')
        }
    ).id(kjs + exc + '/neutronium_bee')
})