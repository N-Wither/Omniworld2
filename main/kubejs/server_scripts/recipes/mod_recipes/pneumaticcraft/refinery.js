onEvent('recipes', e => {
    let rip = 'kubejs:pnc_refinery/'

    e.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "tag": "forge:raw_experience",
            "amount": 4
        },
        "temperature": {
            "min_temp": 283
        },
        "results": [
            {
                "fluid": "pneumaticcraft:memory_essence",
                "amount": 40
            },
            {
                "fluid": "pneumaticcraft:memory_essence",
                "amount": 40
            }
        ]
    }).id(rip + 'experience_trans')
})