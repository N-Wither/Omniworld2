onEvent("item.registry", event => {
    event.create('taiyaki').displayName('Taiyaki').food(food => {
        food.hunger(6)
        food.saturation(1.1)
    });
	event.create('engulfing_lightning', 'sword').displayName('Engulfing Lightning').tier('engulfing_lightning');
	event.create('nwither_plush').displayName('NWitherKawaii Plushie');
    event.create('affix_gem').maxStackSize(1).rarity(RARITY_RARE);
    event.create('affix_gem_with_affix').maxStackSize(1).texture('kubejs:item/affix_gem').glow(true).rarity(RARITY_RARE);
    event.create('rhythm_gamers_glove').unstackable().rarity(RARITY_UNCOMMON)
})