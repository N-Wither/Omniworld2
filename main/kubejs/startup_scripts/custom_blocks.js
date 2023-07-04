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
        // .placementState(event => event.set(BlockProperties.HORIZONTAL_FACING, event.getHorizontalDirection()))
        // .setBlockstateJson({
        //     "variants": {
        //         "facing=south": {
        //             "model": "kubejs:block/nwither_plush"
        //         },
        //         "facing=north": {
        //             "model": "kubejs:block/nwither_plush",
        //             "y": 180
        //         },
        //         "facing=west": {
        //             "model": "kubejs:block/nwither_plush",
        //             "y": 90
        //         },
        //         "facing=east": {
        //             "model": "kubejs:block/nwither_plush",
        //             "y": 170
        //         }
        //     }
        // })
        // .item(item => {
        //     item.displayName('NWitherKawaii Plushie');
        // })
    
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
})