onEvent('recipes', e => {
    let beeProduce = (bee) => {
        e.custom({
            type: 'productivebees:advanced_beehive',
            ingredient: bee,
            results: [
                {
                    item: {
                        "type": "forge:nbt",
                        "item": "productivebees:configurable_honeycomb",
                        "nbt": {
                            "EntityTag": {
                                "type": bee
                            }
                        }
                    }
                },
                {
                    item: {
                        tag: "forge:pollen"
                    },
                    chance: 5
                }
            ]
        }).id('kubejs:bee_produce/' + bee.split(':')[1])
    }

    beeProduce('kubejs:neutronium')
    beeProduce('kubejs:infinity')
})