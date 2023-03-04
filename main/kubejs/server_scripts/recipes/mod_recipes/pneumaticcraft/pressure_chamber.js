onEvent('recipes', e => {
    let PressureChamber = (inputs, pressure, outputs, id) => {
        let recipeJson = {
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [],
            "pressure": pressure,
            "results": []
        }

        inputs.forEach(input => {
            recipeJson.inputs.push(input)
        })

        outputs.forEach(output => {
            recipeJson.results.push(output)
        })

        e.custom(recipeJson).id('kubejs:pressure_chamber/' + id)
    }
    
    /**
     * @param {string} item 
     * @param {number} count 
     * @returns {object}
     */
    let PncItem = (item, count) => {
        if(count == undefined){
            if(item[0] == '#'){
                return {"tag": item.slice(1)}
            }
            else{
                return {"item": item}
            }
        }
        else{
            if(item[0] == '#'){
                return {"type": "pneumaticcraft:stacked_item", "tag": item.slice(1), "count": count}
            }
            else {
                return {"type": "pneumaticcraft:stacked_item", "item": item, "count": count}
            }
        }
    }

    PressureChamber([PncItem("pneumaticcraft:compressed_iron_block", 16), PncItem("avaritia:infinity_ingot")], 5.0, [PncItem("pneumaticcraft:creative_compressed_iron_block")], 'creative_compressed_iron_block')
    PressureChamber(
        [
            PncItem("#forge:ingots/osmium"),
            PncItem("#forge:circuits/basic", 2),
            PncItem('#forge:ingots/steel', 4),
            PncItem("#thermal:glass/hardened", 2)
        ],
        3.0, 
        [PncItem("mekanism:steel_casing")],
        'steel_casing'
    )
    PressureChamber(
        [
            PncItem("pneumaticcraft:electrostatic_compressor"),
            PncItem("pneumaticcraft:advanced_liquid_compressor"),
            PncItem("pneumaticcraft:advanced_air_compressor"),
            PncItem("pneumaticcraft:flux_compressor"),
            PncItem("pneumaticcraft:thermal_compressor"),
            PncItem('#forge:ingots/infinity', 4)
        ],
        5.0,
        [PncItem("pneumaticcraft:creative_compressor")],
        'creative_compressor'
    )
    PressureChamber(
        [
            PncItem('#forge:ingots/iron', 4),
            PncItem('#forge:glass', 4),
            PncItem('#forge:gears/tin')
        ],
        2.0,
        [PncItem("thermal:machine_frame")],
        'machine_frame'
    )

})