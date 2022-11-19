onEvent('recipes', e => {
    e.remove({output: "tiab:time_in_a_bottle"});
    e.shapeless("gag:time_sand_pouch", "tiab:time_in_a_bottle").modifyResult((inventory, itemstack) => {
        let bottle = inventory.find(Item.of("tiab:time_in_a_bottle").ignoreNBT());
        let time = bottle.nbt.storedTime;
        return itemstack.withNBT({grains: time})
    }).id('kubejs:tiab_to_temporal_pouch')
})