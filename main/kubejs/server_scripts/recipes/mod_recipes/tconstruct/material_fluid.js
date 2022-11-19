onEvent('recipes', e => {
    e.custom({
        "type": "tconstruct:material_fluid",
        "fluid": {
          "tag": "forge:molten_infinity",
          "amount": 90
        },
        "temperature": 2500,
        "output": "materialis:infinity"
    })
})