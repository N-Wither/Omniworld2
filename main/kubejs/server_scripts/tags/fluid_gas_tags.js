onEvent("fluid.tags", event => {
    event.add("tconstruct:blood", ["biomesoplenty:blood"]);
    event.add("forge:crude_oil", "beyond_earth:oil");
    event.add("forge:molten_plastic", "pneumaticcraft:plastic");
    event.add("forge:molten_infinity", 'kubejs:molten_infinity');
    event.add('forge:raw_experience', "experienceobelisk:raw_experience")
    event.add('forge:ethene', "immersivepetroleum:ethylene")
    event.add('forge:ethylene', "mekanism:ethene")
    event.add('forge:helium', "kubejs:helium")

    event.remove("minecraft:water", [
        "cyclic:biomass",
        "cyclic:biomass_flowing",
        "cyclic:honey",
        "cyclic:honey_flowing",
        "cyclic:xpjuice",
        "cyclic:xpjuice_flowing",
        "undergarden:virulent_mix_source",
        "undergarden:virulent_mix_flowing",
        "create:chocolate",
        "create:flowing_chocolate",
        "create:honey",
        "create:flowing_honey",
        "beyond_earth:fuel",
        "beyond_earth:flowing_fuel",
        "beyond_earth:oil",
        "beyond_earth:flowing_oil",
        "createaddition:seed_oil",
        "createaddition:flowing_seed_oil",
        // "hexerei:tallow_fluid",
        // "hexerei:tallow_flowing",
        // "hexerei:blood_fluid",
        // "hexerei:blood_flowing",
        "sakura:food_oil",
        "sakura:food_oil_flowing"
    ]);
    //event.remove("minecraft:lava", ["hexerei:quicksilver_fluid"])
})

onEvent('tags.mekanism.gas', e => {
    e.add('forge:helium', "kubejs:helium")
})