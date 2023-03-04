onEvent('recipes', e => {
    let ifFluidExtractor = (input, result, fluid, amount, id) => {
        e.custom(
            {
                "input": {
                    "item": input
                },
                "result": result,
                "breakChance": 0.010,
                "output": `{FluidName:\"${fluid}\",Amount:${amount}}`,
                "defaultRecipe": false,
                "type": "industrialforegoing:fluid_extractor"
            }
        ).id(`kubejs:fluid_extractor/${id}`)
    }

    ifFluidExtractor("integrateddynamics:menril_log", "integrateddynamics:menril_log_stripped", "integrateddynamics:menril_resin", 5, 'menril');
    ifFluidExtractor("integrateddynamics:menril_log_filled", "integrateddynamics:menril_log", "integrateddynamics:menril_resin", 10, 'menril_filled');
    ifFluidExtractor("myrtrees:rubberwood_log", "minecraft:stripped_jungle_log", "industrialforegoing:latex", 10, 'latex');
    ifFluidExtractor("biomesoplenty:hellbark_log", "biomesoplenty:stripped_hellbark_log", "minecraft:lava", 10, 'lava')

})