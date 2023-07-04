onEvent('block.right_click', e => {
    // Torcherino
    if(e.block.id == 'kubejs:torcherino'){/*
        e.server.scheduleInTicks(2, callback => {
            callback.server.runCommandSilent(`tellraw ${e.player.name} {"text":"But nothing happened...","color":"aqua"}`);
        });*/
        e.player.tell(Component.translate('kubejs.server_events.torcherino').aqua());
        e.player.swingArm(e.hand);
    };

    // Engulfing Lightning
    if((e.block.hasTag('forge:plants') || e.block.hasTag('minecraft:flowers')) && e.hand == MAIN_HAND && e.item.id == 'kubejs:engulfing_lightning'){
        e.server.schedule(5, e.server, callback => {
            let blockx = e.block.x;
            let blocky = e.block.y;
            let blockz = e.block.z;
            e.player.addItemCooldown(e.player.getHeldItem(MAIN_HAND), 80);
            callback.server.runCommandSilent(`fill ${blockx - 8} ${blocky - 1} ${blockz - 8} ${blockx + 8} ${blocky + 1} ${blockz + 8} minecraft:air replace #forge:plants`);
            callback.server.runCommandSilent(`fill ${blockx - 8} ${blocky - 1} ${blockz - 8} ${blockx + 8} ${blocky + 1} ${blockz + 8} minecraft:air replace #minecraft:flowers`);
        })
        e.cancel();
        e.player.swingArm(e.hand);
        e.player.playSound('minecraft:block.grass.break');
    };

    // Plant Poisonous Potato
    if(e.block.hasTag('forge:farmland') && e.item.id == "minecraft:poisonous_potato"){
        e.server.runCommandSilent(`setblock ${e.block.x} ${e.block.y + 1} ${e.block.z} minecraft:potatoes`);
        e.item.count--;
        e.player.swingArm(e.hand);
        e.player.playSound('minecraft:item.crop.plant');
    }

    // Plush
    if(e.block.id == "kubejs:nwither_plush" && e.player.getHeldItem(MAIN_HAND) == null){
        let facing = e.getFacing()
        e.server.runCommandSilent(`setblock ${e.block.x} ${e.block.y} ${e.block.z} ${e.block.id}[facing=${facing}]`)
    }

    // For blocks that will be removed
    
})