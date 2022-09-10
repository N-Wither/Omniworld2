onEvent('recipes', e => {
    let rip = 'kubejs:integration/cutting'; // Recipe ID Prefix

    e.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [Item.of('ecologics:coconut').toJson()],
        "tool": {"tag": "forge:tools/knives"},
        "result": [Item.of('ecologics:coconut_slice', 2).toResultJson()]
    }).id(rip+'coconut_slice');
})