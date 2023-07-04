onEvent('recipes', e => {
  let air = "minecraft:air";

  function HeatProperties(block, temp, thermalResis, heatCap, cold, hot) {
    this.type = "pneumaticcraft:heat_properties"
    this.block = block
    this.temperature = temp
    this.thermalResistance = thermalResis
    this.heatCapacity = heatCap
    this.transformCold = { block: cold || 'minecraft:air' }
    this.transformHot = { block: hot || 'minecraft:air' }
  }

  e.custom({
    "type": "pneumaticcraft:heat_properties",
    "block": "omniores:uranium_block",
    "temperature": 438,
    "thermalResistance": 500,
    "transformCold": { "block": "omniores:lead_block" },
    "heatCapacity": 500000
  })

  e.custom({
    "type": "pneumaticcraft:heat_properties",
    "block": {fluid: "kubejs:helium"},
    "temperature": 4,
    "thermalResistance": 100,
    "transformCold": { "block": "minecraft:blue_ice" },
    "transformCold": { "block": "minecraft:snow_block" },
    "heatCapacity": 10000
  })

  //e.custom(new HeatProperties("kubejs:helium", 4, 100, 10000, 'minecraft:blue_ice', 'minecraft:snow_block'))
})