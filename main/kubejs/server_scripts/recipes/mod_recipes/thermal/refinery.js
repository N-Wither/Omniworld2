onEvent('recipes', e => {
    let rip = 'kubejs:thermal_refinery/'

    e.recipes.thermal.refinery(Fluid.of('cofh_core:experience', 800), Fluid.of('experienceobelisk:raw_experience', 40)).energy(100).id(rip + 'experience_trans')
})