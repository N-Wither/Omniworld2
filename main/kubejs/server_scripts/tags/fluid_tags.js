onEvent("fluid.tags", event => {
    event.add("tconstruct:blood", ["biomesoplenty:blood", "hexerei:blood_fluid"]);
    event.add("forge:crude_oil", "beyond_earth:oil");
    event.add("forge:molten_plastic", "pneumaticcraft:plastic");

    event.remove("minecraft:water", [
        "cyclic:biomass",
        "cyclic:honey",
        "cyclic:xpjuice",
        "undergarden:virulent_mix_source",
        "create:chocolate",
        "create:honey",
        "beyond_earth:fuel",
        "beyond_earth:oil",
        "createaddition:seed_oil",
        "hexerei:tallow_fluid",
        "hexerei:blood_fluid"
    ]);
    event.remove("minecraft:lava", ["hexerei:quicksilver_fluid"])
})