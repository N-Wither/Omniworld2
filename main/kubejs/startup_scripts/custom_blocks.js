onEvent("block.registry", event => {
    event.create('torcherino')
        .material('wood')
        .hardness(0.0)
        .resistance(0.0)
        .lightLevel(1.0)
        .renderType('cutout')
        .notSolid()
        .box(6,0,6,10,10,10,true);
})