onEvent('recipes', e => {
    let rip = 'kubejs:thermal_crucible/'
    e.recipes.thermal.crucible(Fluid.of('kubejs:cryotheum', 250), "thermal:blizz_rod").id(rip + 'cryotheum_from_rod')
    e.recipes.thermal.crucible(Fluid.of('kubejs:cryotheum', 125), "thermal:blizz_powder").id(rip + 'cryotheum_from_dust')
})