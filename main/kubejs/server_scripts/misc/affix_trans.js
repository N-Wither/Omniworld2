onEvent('item.right_click', e => {
    if(e.item.id == 'kubejs:affix_gem'){
        let tool = e.player.getHeldItem(OFF_HAND);
        let affix = tool.nbt.get("affix_data");
        if (affix == null) return;
        else {
            e.item.count--;
            e.player.give(Item.of("kubejs:affix_gem_with_affix").withNBT({affix_data: affix}));
            e.player.offHandItem.nbt.remove('affix_data');
            e.player.playSound("minecraft:block.grindstone.use");
        }
        e.cancel();
    }

    if(e.item.id == 'kubejs:affix_gem_with_affix'){
        let tool = e.player.getHeldItem(OFF_HAND);
        if (!tool.hasTag('forge:affix_appliable')) return;
        let gem = e.item;
        let affix = gem.nbt.get("affix_data");
        if (affix == null) return;
        else {
            e.item.count--;
            e.player.offHandItem.nbt.merge({affix_data: affix});
            e.player.playSound("minecraft:block.enchantment_table.use");
        }
        e.cancel();
    }
})