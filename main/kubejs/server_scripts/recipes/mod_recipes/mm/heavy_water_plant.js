onEvent('server.datapack.high_priority', e => {
    e.addJson('kubejs:mm/processes/heavy_water_1.json',
        new MmProcess(HWP).name('Heavy Water 160mB')
            .duration(1)
            .input([
                mmFluid('minecraft:water', 16000),
                mmEnergy(16000)
            ])
            .output([
                mmFluid("mekanism:heavy_water", 160)
            ])
            .done()
    )

    e.addJson('kubejs:mm/processes/heavy_water_2.json',
        new MmProcess(HWP).name('Heavy Water 1280mB')
            .duration(1)
            .input([
                mmFluid('minecraft:water', 128000),
                mmEnergy(128000)
            ])
            .output([
                mmFluid("mekanism:heavy_water", 1280)
            ])
            .done()
    )
})