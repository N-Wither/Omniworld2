onEvent("block.registry", event => {
    event.create('torcherino')
        .material('wood')
        .hardness(0.0)
        .resistance(0.0)
        .lightLevel(1.0)
        .renderType('cutout')
        .noCollision()
        .waterlogged()
        .box(6,0,6,10,10,10,true);

    event.create('nwither_plush')
        .material('wool')
        .hardness(0.0)
        .resistance(0.0)
        .renderType('cutout')
        .box(4,0,4,12,14,10,true)
        .property(BlockProperties.HORIZONTAL_FACING)
    
    event.create('mm:base_machine_block')
        .material('metal')
        .hardness(3)
        .resistance(4)
        .textureAll('mm:block/base_block')

    event.create('censer')
        .material('stone')
        .hardness(0)
        .resistance(0)
        .renderType('cutout')
        .box(5,0,5,11,15,11)
        .lightLevel(0.4)

    event.create('minecraft:mangrove_stairs', 'stairs')
        .material('wood')
        .hardness(2)
        .resistance(3)
        .tagBlock("minecraft:mineable/axe")
        .textureAll("wildbackport:block/mangrove_planks")

    event.create('minecraft:mud_brick_stairs', 'stairs')
        .material('stone')
        .hardness(1.5)
        .resistance(3)
        .tagBlock('minecraft:mineable/pickaxe')
        .textureAll('wildbackport:block/mud_bricks')
})