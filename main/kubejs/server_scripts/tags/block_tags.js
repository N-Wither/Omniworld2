onEvent("block.tags", event => {
    event.add("forge:farmland", /.*farmland/);
    event.add('forge:storage_blocks/bismuth', /enlightened_end:.*bismuth_sheets/)
    event.add('forge:storage_blocks/malachite', "enlightened_end:malachite_block")
    
    event.add('mm:ports/energy/in', ['mm:energy_input_port', 'mm:large_energy_input_port'])
    event.add('mm:ports/fluid/in', ["mm:fluid_input_port", "mm:large_fluid_input_port"])
    event.add('mm:ports/fluid/out', ["mm:fluid_output_port", "mm:large_fluid_output_port"])
    event.add('mm:ports/fluid', /mm:.*fluid.*port/)
    event.add('mm:ports/gas/in', ["mm:gas_input_port"])
    event.add('mm:ports/gas/out', ["mm:gas_output_port"])
    event.add('mm:ports/item/in', /mm:.*item_input_port/)
    event.add('mm:ports/item/out', /mm:.*item_output_port/)
    event.add('mm:ports', [/mm:.*port/, 'mm:base_machine_block'])

    event.add("minecraft:mineable/pickaxe", /mm:.*/)

    event.add('forge:immovable', [
        /doubleslabs:.*/,
        /dankstorage:*/
    ])
})