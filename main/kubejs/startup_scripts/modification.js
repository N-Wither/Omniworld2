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
})