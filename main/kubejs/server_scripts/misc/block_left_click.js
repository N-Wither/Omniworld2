onEvent('block.left_click', e=> {
    // Refined Storage Series
    if(e.block.hasTag("refinedstorage:creative_controller") && e.player.isCrouching()){
        if(e.item.id == "refinedstorage:wireless_grid"){
            e.item.count --;
            e.player.give("refinedstorage:creative_wireless_grid");
        };
        if(e.item.id == "refinedstorage:wireless_fluid_grid"){
            e.item.count --;
            e.player.give("refinedstorage:creative_wireless_fluid_grid");
        };
        if(e.item.id == "refinedstorage:wireless_crafting_monitor"){
            e.item.count --;
            e.player.give("refinedstorage:creative_wireless_crafting_monitor");
        };
        if(e.item.id == "refinedstorageaddons:wireless_crafting_grid"){
            e.item.count --;
            e.player.give("refinedstorageaddons:creative_wireless_crafting_grid");
        };
        if(e.item.id == "rebornstorage:super_wireless_crafting_grid"){
            e.item.count --;
            e.player.give("rebornstorage:creative_super_wireless_crafting_grid");
        }
    }
})