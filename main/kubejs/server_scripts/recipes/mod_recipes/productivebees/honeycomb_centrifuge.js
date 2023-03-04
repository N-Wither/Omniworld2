onEvent('recipes', e => {
    let honeycombCentrifuge = (bee, results) => {
        e.custom({
            type: 'productivebees:centrifuge',
            ingredient: {
                type: "forge:nbt",
                item: "productivebees:configurable_honeycomb",
                nbt: {
                    EntityTag: {
                        type: bee
                    }
                }
            },
            outputs: results
        }).id('kubejs:prod_bee_centrifuge/' + bee.split(':')[1])
    }

    let prodBeeItem = (item, chance) => {
        chance = chance || 100
        return {
            item: {item: item},
            chance: chance
        }
    }

    let prodBeeHoney = {
        fluid: {fluid: "productivebees:honey"},
        amount: 50
    }

    let prodBeeComb = (bee) => {
        return Item.of('productivebees:configurable_honeycomb', {EntityTag:{type:bee}})
    }

    let honeycombCentrifugeCompat = (bee, result) => {
        e.recipes.createMixing([result, Fluid.of("productivebees:honey", 50)], prodBeeComb(bee)).heated().id('kubejs:create_mixing/' + bee.split(':')[1])
    }

    honeycombCentrifuge('kubejs:neutronium', [prodBeeItem("avaritia:neutron_nugget"), prodBeeHoney])
    honeycombCentrifugeCompat('kubejs:neutronium', "avaritia:neutron_nugget")
    honeycombCentrifuge('kubejs:infinity', [prodBeeItem('kubejs:infinity_drop', 5), prodBeeHoney])
    honeycombCentrifugeCompat('kubejs:infinity', Item.withChance('kubejs:infinity_drop', 0.05))
})