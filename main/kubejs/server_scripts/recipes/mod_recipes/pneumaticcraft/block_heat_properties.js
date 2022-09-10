onEvent('recipes', e => {
    let heatProp = "pneumaticcraft:heat_properties";

    e.custom({
        "type": heatProp,
        "block": "omniores:uranium_block",
        "temperature": 438,
        "thermalResistance": 500,
        "transformCold": {"block": "omniores:lead_block"},
        "heatCapacity": 500000
      })
})