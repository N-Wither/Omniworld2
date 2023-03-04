// priority: -1

onEvent('recipes', e => {
    e.replaceOutput("mekanism:sawdust", "omniores:wood_dust");
    e.replaceOutput("immersivepetroleum:bitumen", "thermal:bitumen")
})