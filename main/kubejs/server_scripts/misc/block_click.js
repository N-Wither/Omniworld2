onEvent('block.right_click', event => {
    // Torcherino
    if(event.block.id == 'kubejs:torcherino'){/*
        event.server.scheduleInTicks(2, callback => {
            callback.server.runCommandSilent(`tellraw ${event.player.name} {"text":"But nothing happened...","color":"aqua"}`);
        });*/
        event.player.tell(Component.translate('kubejs.server_events.torcherino').aqua());
        event.player.swingArm(event.hand);
    };

    // Engulfing Lightning
    if((event.block.hasTag('forge:plants') || event.block.hasTag('minecraft:flowers')) && event.hand == MAIN_HAND && event.item.id == 'kubejs:engulfing_lightning'){
        event.server.schedule(5, event.server, callback => {
            let blockx = event.block.x;
            let blocky = event.block.y;
            let blockz = event.block.z;
            event.player.addItemCooldown(event.player.getHeldItem(MAIN_HAND), 80);
            callback.server.runCommandSilent(`fill ${blockx - 8} ${blocky - 1} ${blockz - 8} ${blockx + 8} ${blocky + 1} ${blockz + 8} minecraft:air replace #forge:plants`);
            callback.server.runCommandSilent(`fill ${blockx - 8} ${blocky - 1} ${blockz - 8} ${blockx + 8} ${blocky + 1} ${blockz + 8} minecraft:air replace #minecraft:flowers`);
        })
        event.cancel();
        event.player.swingArm(event.hand);
        event.player.playSound('minecraft:block.grass.break');
    };

    // Plant Poisonous Potato
    if(event.block.hasTag('forge:farmland') && event.item.id == "minecraft:poisonous_potato"){
        event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y + 1} ${event.block.z} minecraft:potatoes`);
        event.item.count--;
        event.player.swingArm(event.hand);
        event.player.playSound('minecraft:item.crop.plant');
    }
})