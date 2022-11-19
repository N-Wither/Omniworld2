onEvent('recipes', e => {
    let thermalComplement = {
        treeExtractor: (trunk, leaves, fluid, amount, id) => {
            e.custom(
                {
                    "type": "thermal:tree_extractor",
                    "trunk": trunk,
                    "leaves": leaves,
                    "result": {
                        "fluid": fluid,
                        "amount": amount
                    }
                }
            ).id(`kubejs:tree_extractor/${id}`)
        }
    }

    thermalComplement.treeExtractor("integrateddynamics:menril_log", "integrateddynamics:menril_leaves", "integrateddynamics:menril_resin", 25, 'menril');
    thermalComplement.treeExtractor("integrateddynamics:menril_log_filled", "integrateddynamics:menril_leaves", "integrateddynamics:menril_resin", 50, 'menril_filled');
    thermalComplement.treeExtractor("myrtrees:rubberwood_log", "myrtrees:rubberwood_leaves", "thermal:latex", 50, 'latex');
})