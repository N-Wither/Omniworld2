onEvent('item.tags', e => {
    e.add('color:4', [
        /undergarden:.*/
    ])
    e.remove('color:4', [
        /undergarden:forgotten.*/
    ])

    e.add('color:6', [
        /functionalstorage:.*/,
        /ironfurnaces:.*/
    ])
    e.remove('color:6', [
        'functionalstorage:copper_upgrade',
        'functionalstorage:gold_upgrade',
        'functionalstorage:diamond_upgrade',
        'functionalstorage:netherite_upgrade',
        'functionalstorage:iron_downgrade',
        'functionalstorage:creative_vending_upgrade',
        'ironfurnaces:million_furnace'
    ])

    e.add('color:11', [
        /blue_skies:.*/
    ])
    e.remove('color:11', [
        /blue_skies:.*arc/,
        /blue_skies:.*key/,
        /blue_skies:.*blinding.*/,
        /blue_skies:.*nature.*/,
        /blue_skies:.*poison.*/
    ])

    e.add('color:13', [
        /industrialforegoing:.*/,
        /mekanism:.*/,
        /hostilenetworks:.*/,
        /thermal_extra:.*bucket/
    ])
    e.remove('color:13', [
        /industrialforegoing:machine_frame.*/,
        /mekanism:.*control_circuit/,
        /mekanism:.*installer/,
        /mekanism:.*factory/,
        /mekanism:.*_bin/,
        /mekanism:.*induction_cell/,
        /mekanism:.*induction_provider/,
        /mekanism:.*fluid_tank/,
        /mekanism:.*energy_cube/,
        /mekanism:.*universal_cable/,
        /mekanism:.*mechanical_pipe/,
        /mekanism:.*pressurized_tube/,
        /mekanism:.*logistical_transporter/,
        /mekanism:.*thermodynamic_conductor/,
        /mekanism:.*chemical_tank/,
        "mekanism:pellet_polonium",
        "mekanism:pellet_antimatter",
        /mekanism:qio_drive.*/,
        'hostilenetworks:prediction',
        'hostilenetworks:data_model'
    ])

    e.add('color:14', [
        /malum:.*/
    ])
    e.remove('color:14', [
        /malum:.*spirit/
    ])

    e.add('color:15', [
        "kubejs:taiyaki",
        "kubejs:molten_infinity_bucket",
        "kubejs:cryotheum_bucket",
        "kubejs:nwither_plush",
        "kubejs:torcherino",
        "kubejs:helium_bucket",
        "kubejs:censer",
        /apotheosis:.*/,
        /touhou_little_maid:.*/
    ])
    e.remove('color:15', [
        /apotheosis:.*material/,
        "apotheosis:gem",
        'touhou_little_maid:ultramarine_orb_elixir',
        'touhou_little_maid:nimble_fabric',
        'touhou_little_maid:item_magnet_bauble',
        'touhou_little_maid:wireless_io',
        /touhou_little_maid:.*bauble/
    ])
})