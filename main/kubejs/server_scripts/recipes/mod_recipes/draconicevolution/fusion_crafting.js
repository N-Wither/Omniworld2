onEvent('recipes', e => {
    function DraconicFusionCrafting(result, catalyst){
        this.json = {
            type: 'draconicevolution:fusion_crafting',
            result: result,
            catalyst: catalyst,
            total_energy: 100000,
            tier: 'DRACONIUM',
            ingredients: []
        }
    }

    DraconicFusionCrafting.prototype = {
        /**
         * @param {number} energy
         */
        energy: function(energy){
            this.json.total_energy = energy
            return this
        },
        /**
         * @param {string} tier
         */
        tier: function(tier){
            this.json.tier = tier
            return this
        },
        /**
         * @param {Array} ingredients
         */
        ingredients: function(ingredients){
            ingredients.forEach(ingredient => {
                this.json.ingredients.push(ingredient)
            })
            return this
        },
        done: function(){
            let recipe = this.json
            return recipe
        }
    }

    let rip = 'kubejs:fusion_crafting/'

    e.custom(
        new DraconicFusionCrafting(
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:chaos"}}').toJson(),
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:awakened"}}').toJson()
        )
        .energy(64000000)
        .tier('CHAOTIC')
        .ingredients([
            {"item": "draconicevolution:chaotic_core"},
            {"item": "draconicevolution:awakened_core"},
            {"item": "draconicevolution:chaotic_core"},
            {"item": "minecraft:honey_block"},
            {"tag": "forge:storage_blocks/honeycombs"},
            {"tag": "forge:storage_blocks/honeycombs"},
            {"tag": "forge:ingots/draconium_awakened"},
            {"item": "draconicevolution:medium_chaos_frag"}
        ])
        .done()
    ).id('productivebees:chaos_bee')

    e.custom(
        new DraconicFusionCrafting(
            ForgeItem("solarflux:sp_custom_draconic", 2), ForgeItem("draconicevolution:awakened_core")
        )
        .energy(512000000)
        .tier('DRACONIC')
        .ingredients([
            ForgeItem("solarflux:sp_custom_wyvern"),
            ForgeItem("solarflux:sp_custom_wyvern"),
            ForgeItem("solarflux:sp_custom_wyvern"),
            ForgeItem("solarflux:sp_custom_wyvern"),
            ForgeItem("draconicevolution:draconic_energy_core"),
            ForgeItem("draconicevolution:draconic_energy_core"),
            ForgeItem("draconicevolution:draconic_energy_core"),
            ForgeItem("draconicevolution:draconic_energy_core"),
        ])
        .done()
    ).id(rip + 'draconic_panel')

    e.custom(
        new DraconicFusionCrafting(
            ForgeItem("solarflux:sp_custom_chaotic", 4), ForgeItem("draconicevolution:chaotic_core")
        )
        .energy(512000000)
        .tier('DRACONIC')
        .ingredients([
            ForgeItem("solarflux:sp_custom_draconic"),
            ForgeItem("solarflux:sp_custom_draconic"),
            ForgeItem("solarflux:sp_custom_draconic"),
            ForgeItem("solarflux:sp_custom_draconic"),
            ForgeItem("draconicevolution:chaotic_energy_core"),
            ForgeItem("draconicevolution:chaotic_energy_core"),
            ForgeItem("draconicevolution:awakened_core"),
            ForgeItem("draconicevolution:awakened_core"),
        ])
        .done()
    ).id(rip + 'chaotic_panel')
})