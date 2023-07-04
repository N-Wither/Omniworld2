onEvent('recipes', e => {
    let rip = 'kubejs:casting_table/';

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

    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {"tag": "tconstruct:casts/multi_use/ingot"},
        "cast_consumed": false,
        "fluid": {"tag": "forge:molten_infinity", "amount": 90},
        "result": {"item": "avaritia:infinity_ingot"},
        "cooling_time": 200
    }).id(rip + 'infinity_ingot/gold_cast');

    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {"tag": "tconstruct:casts/single_use/ingot"},
        "cast_consumed": true,
        "fluid": {"tag": "forge:molten_infinity", "amount": 90},
        "result": {"item": "avaritia:infinity_ingot"},
        "cooling_time": 200
    }).id(rip + 'infinity_ingot/sand_cast');

    function CastingTable(output, fluid, amount, cast, time, consume){
        this.type = 'tconstruct:casting_table'
        this.cast = cast
        this.cast_consumed = consume
        this.fluid = {tag: fluid, amount: amount}
        this.result = output
        this.cooling_time = time
    }

    e.custom(new CastingTable("tconstruct:ingot_cast", 'forge:molten_gold', 90, Ingredient.of('#forge:ingots').toJson(), 40, true)).id('tconstruct:smeltery/casts/gold_casts/ingots')
    e.custom(new CastingTable("tinkers_reforged:cast_ingot", 'forge:molten_aluminum', 90, Ingredient.of('#forge:ingots').toJson(), 40, true)).id('tinkers_reforged:smeltery/casts/aluminum_casts/cast_ingot')
})