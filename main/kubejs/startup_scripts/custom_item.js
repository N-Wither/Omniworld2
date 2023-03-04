onEvent("item.registry", event => {
    event.create('taiyaki').displayName('Taiyaki').food(food => {
        food.hunger(6)
        food.saturation(1.1)
    });
	event.create('engulfing_lightning', 'sword').displayName('Engulfing Lightning').tier('engulfing_lightning');
    event.create('affix_gem').maxStackSize(1).rarity(RARITY_RARE);
    event.create('affix_gem_with_affix').maxStackSize(1).texture('kubejs:item/affix_gem').glow(true).rarity(RARITY_RARE);
    event.create('rhythm_gamers_glove').unstackable().rarity(RARITY_UNCOMMON);
    event.create('hostilenetworks:forgotten_prediction').texture('kubejs:item/forgotten_prediction');
    event.create('hostilenetworks:twilight_prediction').texture('kubejs:item/twilight_prediction');
    event.create('hostilenetworks:ever_prediction').texture('kubejs:item/ever_prediction');
    event.create('infinity_drop')
})