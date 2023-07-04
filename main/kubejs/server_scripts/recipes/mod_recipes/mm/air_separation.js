onEvent('server.datapack.high_priority', e => {
    e.addJson('kubejs:mm/processes/air_separation',
        new MmProcess(ASU).name('Air Separation')
            .duration(1)
            .input([
                mmEnergy(72000)
            ])
            .output([
                mmGas('mekanism:oxygen', 2000),
                mmGas('mekanism:water_vapor', 25),
                mmGas('kubejs:helium', 1)
            ])
            .done()
    )
})