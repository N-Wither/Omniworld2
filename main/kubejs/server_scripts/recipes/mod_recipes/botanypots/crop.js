onEvent('recipes', e => {
    let botanypotsCrop = (seed, categories, time, display, drop) => {
        let recipeJson = {
            type: 'botanypots:crop',
            seed: {item : seed},
            categories: categories,
            growthTicks: time,
            display: {},
            drops: []
        };

        if(display[0] == 'aging'){
            recipeJson.display = {
                type: 'botanypots:aging',
                block: display[1]
            }
        };

        drop.forEach(item => {
            recipeJson.drops.push({
                chance: item[0],
                output: {
                    item: item[1]
                }
            })
        });

        return recipeJson;
    }

    let rip = 'kubejs:botanypots/crops/';

    e.custom(botanypotsCrop('miniutilities:ender_lily_seeds', ['end_stone', 'dirt', 'farmland'], 1500, ['aging', 'miniutilities:ender_lily_block'], [[1.0, 'minecraft:ender_pearl'], [0.1, 'minecraft:ender_pearl'], [0.05, 'miniutilities:ender_lily_seeds']])).id(rip + 'ender_lily');
    e.custom(botanypotsCrop('miniutilities:flame_lily_seeds', ['sand'], 1500, ['aging', 'miniutilities:flame_lily_block'], [[1.0, "miniutilities:flame_lily"], [0.1, "miniutilities:flame_lily"], [0.05, 'miniutilities:flame_lily_seeds']])).id(rip + 'flame_lily');
})