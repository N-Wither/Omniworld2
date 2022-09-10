onEvent('recipes', e => {
    let rip = 'kubejs:casting/';

    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {"tag": "tconstruct:casts/multi_use/plate"},
        "cast_consumed": false,
        "fluid": {"tag": "forge:molten_plastic", "amount": 1000},
        "result": {"item": "pneumaticcraft:plastic"},
        "cooling_time": 5
    }).id(rip + 'plastic/gold_cast');

    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {"tag": "tconstruct:casts/single_use/plate"},
        "cast_consumed": true,
        "fluid": {"tag": "forge:molten_plastic", "amount": 1000},
        "result": {"item": "pneumaticcraft:plastic"},
        "cooling_time": 5
      }).id(rip + 'plastic/sand_cast');

})