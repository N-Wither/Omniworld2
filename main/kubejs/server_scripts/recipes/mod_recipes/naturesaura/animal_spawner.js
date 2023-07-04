onEvent('recipes', e => {
    e.custom({
        type: "naturesaura:animal_spawner",
        ingredients: [
            {
                item: "naturesaura:birth_spirit"
            },
            {
                item: "undergarden:utherium_crystal"
            },
            {
                item: "undergarden:forgotten_ingot"
            },
            {
                item: "undergarden:sediment"
            }
        ],
        entity: "undergarden:masticator",
        aura: 150000,
        time: 200
    })
})