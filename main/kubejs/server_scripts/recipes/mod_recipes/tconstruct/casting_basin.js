onEvent('recipes', e => {
    let rip = 'kubejs:casting_basin/'

    function CastingBasin(output, fluid, amount, time){
        // this.recipe = {
        //     type: "tconstruct:casting_basin",
        //     cast: {
        //         item: "minecraft:rabbit_foot"
        //     },
        //     cast_consumed: true,
        //     fluid: {
        //         tag: fluid,
        //         amount: amount
        //     },
        //     result: output,
        //     cooling_time: time
        // }
        this.type = 'tconstruct:casting_basin'
        this.fluid = {
            tag: fluid,
            amount: amount
        }
        this.result = output
        this.cooling_time = time
    }

    e.custom(new CastingBasin("avaritia:infinity_block", 'forge:molten_infinity', 810, 800)).id(rip + 'infinity_block')
})