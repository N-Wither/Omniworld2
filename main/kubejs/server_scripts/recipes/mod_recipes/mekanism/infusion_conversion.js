onEvent('recipes', e => {
    let rip = 'kubejs:infusion_conversion/'

    e.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": [
                { "tag": "forge:dusts/coal" },
                { "item": "minecraft:coal" }
            ] 
        },
        "output": {
            "infuse_type": "mekanism:carbon",
            "amount": 5
        }
    }).id(rip+'carbon/from_coal');

    e.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": [
                { "tag": "forge:storage_blocks/coal" }
            ] 
        },
        "output": {
            "infuse_type": "mekanism:carbon",
            "amount": 45
        }
    }).id(rip+'carbon/from_coal_block');

    e.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": [
                { "tag": "forge:dusts/coal_coke" },
                { "tag": "forge:coal_coke" }
            ] 
        },
        "output": {
            "infuse_type": "mekanism:carbon",
            "amount": 20
        }
    }).id(rip+'carbon/from_coal_coke')

    e.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": [
                { "tag": "forge:storage_blocks/coal_coke" }
            ] 
        },
        "output": {
            "infuse_type": "mekanism:carbon",
            "amount": 180
        }
    }).id(rip+'carbon/from_coal_coke_block')
})