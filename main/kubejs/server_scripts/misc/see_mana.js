onEvent('block.right_click', e => {
    if((e.block.id == 'botania:mana_pool' || e.block.id == "botania:diluted_pool" || e.block.id == "botania:fabulous_pool" || e.block.id == 'botania:creative_pool') && e.player.mainHandItem == 'minecraft:air'){
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