onEvent('recipes', e => {
    function mekanismRotary(fluid, gas) {
        e.custom({
            type: "mekanism:rotary",
            fluidInput: {
                amount: 1,
                fluid: fluid
            },
            gasOutput: {
                gas: gas,
                amount: 1
            },
            gasInput: {
                amount: 1,
                gas: gas
            },
            fluidOutput: {
                fluid: fluid,
                amount: 1
            }
        }).id('kubejs:rotary/' + fluid.split(':')[1])
    }

    mekanismRotary("kubejs:helium", "kubejs:helium")
})