onEvent('block.right_click', e => {
    let manaPools = ['botania:mana_pool', 'botania:diluted_pool', 'botania:fabulous_pool', 'botania:creative_pool']
    if((manaPools.includes(e.block.id)) && e.player.mainHandItem == 'minecraft:air'){
        let mana = e.block.entityData.mana;
        let cap = e.block.entityData.manaCap;
        if (e.block.id != 'botania:creative_pool'){
            e.server.runCommandSilent(`title ${e.player.name.getString()} actionbar {"text": "Mana: ${mana}/${cap}"}`);
        }
        else {
            e.server.runCommandSilent(`title ${e.player.name.getString()} actionbar {"text": "Mana: ∞"}`);
        }
        e.player.swingArm(MAIN_HAND);
    }
})