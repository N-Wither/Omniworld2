onEvent('recipes', e => {
    let rip = 'kubejs:enriching/'

    e.recipes.mekanismEnriching("2x mekanism:enriched_carbon", ["minecraft:charcoal", "#forge:dusts/charcoal", "#forge:coal_coke", "#forge:dusts/coal_coke", "#forge:coal_petcoke", "#forge:dusts/coal_petcoke"]).id(kjs + 'enriching/carbon_2')
    e.recipes.mekanismEnriching("mekanism:enriched_carbon", ["minecraft:coal", "#forge:dusts/coal"]).id(kjs + 'enriching/carbon')
    e.recipes.mekanismEnriching("immersiveengineering:dust_hop_graphite", '8x #forge:dusts/coal_coke').id(rip + 'hop_graphite_dust_1')
    e.recipes.mekanismEnriching("immersiveengineering:dust_hop_graphite", '8x #forge:dusts/coal_petcoke').id(rip + 'hop_graphite_dust_2')
})