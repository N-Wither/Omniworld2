// priority: -1
const chatFormatting = java('net.minecraft.ChatFormatting')

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

  let redRarity = Rarity.create('Red', chatFormatting.RED)
  let redRarityItems = [
    "avaritia:infinity_block",
    "functionalstorage:creative_vending_upgrade",
    'kubejs:infinity_drop',
    "avaritia:cosmic_meatballs",
    "avaritia:ultimate_stew",
    "avaritia:endest_pearl"
  ]
  redRarityItems.forEach(i => {
    event.modify(i, item => {
      item.setRarity(redRarity)
    })
  })

  let purpleRarity = Rarity.create('purple', chatFormatting.LIGHT_PURPLE)
  let purpleRarityItems = [
    "kubejs:engulfing_lightning"
  ]
  purpleRarityItems.forEach(i => {
    event.modify(i, item => {
      item.setRarity(purpleRarity)
    })
  })
})