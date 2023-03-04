onEvent('server.datapack.high_priority', e => {
    e.addJson('kubejs:mm/processes/heavy_water.json',
        new MmProcess().structure(HWP).name('Heavy Water').duration(1).input([mmFluid('minecraft:water', 1000), mmEnergy(1000)]).output([mmFluid("mekanism:heavy_water", 10)]).done()
    )
})