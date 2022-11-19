onEvent('recipes', e => {
    let rip = 'kubejs:spirit_infusion/';

    e.custom({
        "type": "malum:spirit_infusion",
        "input": {
          "item": "minecraft:enchanting_table",
          "count": 1
        },
        "output": {
          "item": "enchantinginfuser:enchanting_infuser",
          "count": 1
        },
        "extra_items": [
          {
            "item": "minecraft:enchanted_book",
            "count": 1
          },
          {
            "tag": "forge:gems/amethyst",
            "count": 2
          },
          {
            "tag": "chipped:crying_obsidian",
            "count": 3
          }
        ],
        "spirits": [
          {"type": "arcane", "count": 32},
          {"type": "earthen", "count": 8},
          {"type": "infernal", "count": 8},
          {"type": "aerial", "count": 8},
          {"type": "aqueous", "count": 8}
        ]
    }).id(rip+'enchanting_infuser')

    e.custom({
      "type": "malum:spirit_infusion",
      "input": {
        "item": "enchantinginfuser:enchanting_infuser",
        "count": 1
      },
      "output": {
        "item": "enchantinginfuser:advanced_enchanting_infuser",
        "count": 1
      },
      "extra_items": [
        {
          "item": "forbidden_arcanus:xpetrified_orb",
          "count": 1
        },
        {
          "tag": "forge:storage_blocks/netherite",
          "count": 1
        },
        {
          "tag": "chipped:crying_obsidian",
          "count": 3
        }
      ],
      "spirits": [
        {"type": "sacred", "count": 64},
        {"type": "wicked", "count": 64},
        {"type": "arcane", "count": 64},
        {"type": "eldritch", "count": 64}
      ]
  }).id(rip+'advanced_enchanting_infuser')
})