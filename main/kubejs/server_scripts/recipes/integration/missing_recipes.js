onEvent('recipes', e => {
    let rip = 'kubejs:missing_recipes/'

    e.smelting("omniores:aluminum_ingot", "#forge:dusts/aluminum").xp(0.7).id(rip + 'al_smelt')
    e.blasting("omniores:aluminum_ingot", "#forge:dusts/aluminum").xp(0.7).id(rip + 'al_blast')
    e.smelting("omniores:tin_ingot", "#forge:dusts/tin").xp(0.7).id(rip + 'sn_smelt')
    e.blasting("omniores:tin_ingot", "#forge:dusts/tin").xp(0.7).id(rip + 'sn_blast')
    e.smelting("omniores:lead_ingot", '#forge:dusts/lead').xp(0.7).id(rip + 'pb_smelt')
    e.blasting("omniores:lead_ingot", '#forge:dusts/lead').xp(0.7).id(rip + 'pb_blast')
})