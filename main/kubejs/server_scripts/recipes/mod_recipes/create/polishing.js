onEvent('recipes', event => {
    function recipeIdPrefix(id){return 'kubejs:sandpaper_polishing/' + id;}

    event.recipes.create.sandpaper_polishing("gemsnjewels:amethyst", "minecraft:amethyst_shard").id(recipeIdPrefix('amethyst'));
})