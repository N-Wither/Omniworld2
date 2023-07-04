onEvent('server.datapack.high_priority', e => {
    let prefix = 'kubejs:mm/processes/'

    e.addJson('kubejs:mm/processes/blast_furnace_1',
        new MmProcess(BF1).name('Steel MK1')
            .duration(200)
            .input([
                mmEnergyPerTick(256),
                mmItem('minecraft:iron_ingot'),
                mmItem("omniores:coal_coke_gem")
            ])
            .output([
                mmItem('omniores:steel_ingot')
            ])
            .done()
    )

    e.addJson('kubejs:mm/processes/blast_furnace_2',
        new MmProcess(BF2).name('Steel MK2')
            .duration(100)
            .input([
                mmEnergyPerTick(512),
                mmItem('minecraft:iron_ingot', 4),
                mmItem("omniores:coal_coke_gem")
            ])
            .output([
                mmItem('omniores:steel_ingot', 4)
            ])
            .done()
    )

    e.addJson('kubejs:mm/processes/blast_furnace_3',
        new MmProcess(BF3).name('Steel MK3')
            .duration(10)
            .input([
                mmEnergyPerTick(1024),
                mmItem('minecraft:iron_ingot', 8),
                mmItem("omniores:coal_coke_gem")
            ])
            .output([
                mmItem('omniores:steel_ingot', 8)
            ])
            .done()
    )

    e.addJson(prefix + 'coke/coal', 
        new MmProcess(ICO).name('Coal Coke')
            .duration(20)
            .input([
                mmEnergyPerTick(128),
                mmItem('minecraft:coal')
            ])
            .output([
                mmItem('omniores:coal_coke_gem'),
                mmFluid("immersiveengineering:creosote", 500)
            ])
            .done()
    )

    e.addJson(prefix + 'coke/coal_block', 
        new MmProcess(ICO).name('Coal Coke Block')
            .duration(180)
            .input([
                mmEnergyPerTick(128),
                mmItem('minecraft:coal_block')
            ])
            .output([
                mmItem('omniores:coal_coke_block'),
                mmFluid("immersiveengineering:creosote", 5000)
            ])
            .done()
    )
})