// priority: 1

onEvent('item.modification', event => {
  const throwables = [
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:snowball',
    'alexsmobs:emu_egg'
  ]
  throwables.forEach(throwables => 
    event.modify(throwables, item => {
      item.maxStackSize = 64
    })
  );

  let redRarity = Rarity.create('Red', ChatFormatting.color(0xff6055))
  let redRarityItems = [
    "avaritia:infinity_block"
  ]
  for(let item in redRarityItems){
    event.modify(item, item => {
      item.setRarity(redRarity);
    })
  }
})