onEvent('recipes', event => {
    let rip = 'kubejs:mekanism_combining/';

    event.recipes.mekanismCombining("2x gemsnjewels:ametrine", "#forge:gems/amethyst", "#forge:gems/citrine").id(rip+'ametrine');
    event.recipes.mekanismCombining('ecologics:coconut', '#forge:fruits/coconut', '#forge:fruits/coconut').id(rip+'coconut');
})