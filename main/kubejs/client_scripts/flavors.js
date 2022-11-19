// priority: 1

onEvent('item.tooltip', tooltip => {
    function flavor(target,text){
        var content = text;
        var startLine = ['==  COMMENT  =='];
        var endLine = ['=============='];
        tooltip.add(target, startLine.concat(content, endLine));
    }

    function kpf(key) {return 'tooltip.kubejs.flavor.' + key};

    // Minecraft
    flavor('#minecraft:logs', [
        textNeko(kpf('log_1')),
        textWither(kpf('log_2'))
    ]);

    flavor('#forge:cobblestone', [
        textWither(kpf('cobblestone_1')),
        textNeko(kpf('cobblestone_2'))
    ]);

    flavor('minecraft:leather', [
        textNeko(kpf('leather'))
    ]);

    flavor('minecraft:wither_rose', [
        textNeko(kpf('wither_rose'))
    ]);
/*
    flavor('minecraft:bedrock', [
        textNeko('既然无法获得，为什么要给它做一种工具材料呢？'),
        textWither('好玩。')
    ]);
*/
    flavor('minecraft:cake', [
        textNeko(kpf('cake_1')),
        textWither(kpf('cake_2'))
    ]);

    flavor(/minecraft:.*salmon/, [
        textWither(kpf('salmon_1')),
        textWither(kpf('salmon_2')),
        textWither(kpf('salmon_3')),
        textWither(kpf('salmon_4'))
    ]);

    flavor(/minecraft:.*cod/, [
        textNeko(kpf('cod'))
    ]);

    flavor('minecraft:pufferfish', [
        textWither(kpf('pufferfish_1')),
        textNeko(kpf('pufferfish_2')),
        textWither(kpf('pufferfish_3')),
        textNeko(kpf('pufferfish_4'))
    ]);

    flavor('minecraft:cookie', [
        textNeko(kpf('cookie'))
    ]);

    flavor('minecraft:poisonous_potato', [
        textWither(kpf('poisonous_potato_1')),
        textNeko(kpf('poisonous_potato_2')),
        textWither(kpf('poisonous_potato_3')),
        textWither(kpf('poisonous_potato_4'))
    ]);

    flavor('minecraft:potato', [
        textNeko(kpf('potato_1')),
        textWither(kpf('potato_2'))
    ]);

    flavor('#forge:workbenches', [
        textWither(kpf('workbench_1')),
        textWither(kpf('workbench_2'))
    ]);

    flavor('minecraft:sea_pickle', [
        textWither(kpf('sea_pickle'))
    ]);

    flavor('minecraft:dragon_egg', [
        textNeko(kpf('dragon_egg_1')),
        textWither(kpf('dragon_egg_2'))
    ]);

    flavor('minecraft:dragon_head', [
        textNeko(kpf('dragon_head'))
    ]);

    flavor('minecraft:end_crystal', [
        textNeko(kpf('end_crystal'))
    ]);

    flavor(/minecraft:chainmail.*/, [
        textNeko(kpf('chainmail_armor'))
    ]);
    
    flavor('minecraft:firework_rocket', [
        textWither(kpf('firework_rocket_1')),
        textWither(kpf('firework_rocket_2'))
    ]);

    flavor('minecraft:firework_star', [
        textWither(kpf('firework_star_1')),
        textWither(kpf('firework_star_2'))
    ]);

    // Alex's Mobs
    flavor('alexsmobs:ambergris', [
        textWither(kpf('ambergris'))
    ]);
    
    // Botania
    flavor(/botania:.*ingot/, [
        textWither(kpf('texture_by'))
    ]);

    flavor('botania:cosmetic_thinking_hand', [
        textWither(kpf('thinking_hand_1')),
        textNeko(kpf('thinking_hand_2'))
    ]);

    flavor(/botania:.*double_flower/, [
        textNeko(kpf('tall_flower_1')),
        textWither(kpf('tall_flower_2'))
    ]);

    // Cooking For Blockheads
    flavor('cookingforblockheads:sink', [
        textWither(kpf('sink_1')),
        textWither(kpf('sink_2'))
    ])

    // Ender Storage
    flavor('enderstorage:ender_chest', [
        textNeko(kpf('ender_chest_1')),
        textWither(kpf('ender_chest_2'))
    ])

    // Environmental
    /*
    flavor('environmental:cartwheel', [
        textNeko('它是怎么转起来的呢？')
    ])

    flavor(/environmental:.*wisteria_sapling/, [
        textWither('紫藤树应该是这个游戏里面最好看的树了。')
    ])

    flavor(/environmental:.*koi/, [
        textNeko('锦鲤养在池子里面会很好看呢。'),
        textWither('不仅如此，锦鲤还可以在它自身32*32*8的空间内'),
        textWither('阻止怪物生成。')
    ])
    */

    // Forbidden & Arcanus
    flavor('forbidden_arcanus:eternal_stella', [
        textWither(kpf('eternal_stella_1')),
        textNeko(kpf('eternal_stella_2'))
    ])

    // Mekanism
    flavor('mekanism:steel_casing', [
        textWither(kpf('steel_casing_1')),
        textWither(kpf('steel_casing_2'))
    ])

    flavor(/mekanism:.*universal_cable/, [
        textNeko(kpf('cable_1')),
        textWither(kpf('cable_2'))
    ])

    // MythicBotany
    
    flavor(/mythicbotany:.*ingot/, [
        textWither(kpf('texture_by'))
    ]);

    // Neapolitan
    
    flavor(/neapolitan:.*banana_frond/, [
        textNeko(kpf('banana_1')),
        textWither(kpf('banana_2'))
    ]);
   

    // Twilight Forest
    flavor('twilightforest:magic_beans', [
        textNeko(kpf('magic_beans'))
    ]);
    /*
    // Upgrade Aquatic
    flavor(/upgrade_aquatic:.*coralstone/, [
        textNeko('让珊瑚在珊瑚石附近生长。')
    ]);

    flavor(/upgrade_aquatic:.*spine/, [
        textWither('接收到红石信号的时候就会钻出来。'),
        textNeko('被扎到还是很疼的！')
    ]);
    */
    // Industrial Foregoing
    flavor('industrialforegoing:pink_slime_ingot', [
        textNeko(kpf('pink_slime_ingot_1')),
        textNeko(kpf('pink_slime_ingot_2'))
    ]);
    
    // Xerca Music
    flavor('xercamusic:music_sheet', [
        textWither(kpf('music_sheet'))
    ]);
    /*
    // Draconic Evolution
    flavor('draconicevolution:info_tablet', [
        textWither('嗯，这个信息板的内容由 Project Intelligence 提供，'),
        textWither('使用的时候需要联网。')
    ]);
    */
    // Aquaculture
    flavor('aquaculture:message_in_a_bottle', [
        textNeko(kpf('drifting_bottle'))
    ]);
    
    // KubeJS
    flavor('kubejs:taiyaki', [
        textWither(kpf('taiyaki'))
    ]);

    flavor('kubejs:engulfing_lightning', [
        textNeko(kpf('engulfing_lightning_1')),
        textNeko(kpf('engulfing_lightning_2')),
        textWither(kpf('engulfing_lightning_3'))
    ]);

    flavor('kubejs:nwither_plush', [
        textWither(kpf('nwither_plush_1')),
        textWither(kpf('nwither_plush_2')),
        textWither(kpf('nwither_plush_3'))
    ]);

    flavor('kubejs:rhythm_gamers_glove', [
        textNeko(kpf('gamers_glove_1')),
        textWither(kpf('gamers_glove_2'))
    ])
    
    // Supplementaries
    flavor(/supplementaries:present.*/, [
        textNeko(kpf('present'))
    ]);

    // Gems & Jewels
    flavor("gemsnjewels:pale_diamond", [
        'C',
        textWither(kpf('pale_diamond_1')),
        textWither(kpf('pale_diamond_2'))
    ]);
    flavor("gemsnjewels:emerald", [
        'Be₃Al₂(SiO₃)₆',
        textWither(kpf('dusk_emerald'))
    ]);
    flavor("gemsnjewels:ruby", [
        'Al₂O₃:Cr',
        textWither(kpf('ruby'))
    ]);
    flavor("gemsnjewels:sapphire", [
        'Al₂O₃:Fe',
        textWither(kpf('sapphire_1')),
        textNeko(kpf('sapphire_2'))
    ]);
    flavor("gemsnjewels:amethyst", [
        'SiO₂',
        textNeko(kpf('amethyst_1')),
        textWither(kpf('amethyst_2')),
        textWither(kpf('amethyst_3'))
    ]);
    flavor("gemsnjewels:opal", [
        'SiO₂·nH₂O',
        textWither(kpf('opal_1')),
        textWither(kpf('opal_2')),
        textNeko(kpf('opal_3'))
    ]);
    flavor("gemsnjewels:garnet", [
        'Fe₃Al₂(SiO₄)₃',
        textWither(kpf('garnet'))
    ]);
    flavor("gemsnjewels:topaz", [
        'Al₂SiO₄(F,OH)₂',
        textWither(kpf('topaz'))
    ]);
    flavor("gemsnjewels:peridot", [
        '(Mg, Fe)₂SiO₄',
        textWither(kpf('peridot'))
    ]);
    flavor("gemsnjewels:aquamarine", [
        'Be₃Al₂Si₆O₁₈',
        textWither(kpf('aquamarine_1')),
        textNeko(kpf('aquamarine_2'))
    ]);
    flavor("gemsnjewels:zircon", [
        'ZrSiO₄',
        textWither(kpf('zircon'))
    ]);
    flavor("gemsnjewels:alexandrite", [
        'BeAl₂O₄',
        textWither(kpf('alexandrite_1')),
        textWither(kpf('alexandrite_2')),
        textNeko(kpf('alexandrite_3'))
    ]);
    flavor("gemsnjewels:tanzanite", [
        '(Ca₂Al₃(SiO₄)(Si₂O₇)O(OH)) + (Cr,Sr)',
        textWither(kpf('tanzanite'))
    ]);
    tooltip.add("gemsnjewels:tourmaline", [
        '#',
        '(Ca,K,Na,▢)(Al,Fe,Li,Mg,Mn)₃(Al,Cr,Fe,V)₆ · (BO₃)₃(Si,Al,B)₆O₁₈(OH,F)₄',
        textWither(kpf('tourmaline')),
        '#'
    ]);
    flavor("gemsnjewels:spinel", [
        'MgAl₂O₄',
        textWither(kpf('spinel'))
    ]);
    flavor("gemsnjewels:black_opal", [
        'SiO₂·nH₂O',
        textNeko(kpf('black_opal'))
    ]);
    flavor("gemsnjewels:citrine", [
        'SiO₂',
        textWither(kpf('citrine'))
    ]);
    flavor("gemsnjewels:morganite", [
        'Be₃Al₂(SiO₃)₆',
        textWither(kpf('morganite'))
    ]);
    flavor("gemsnjewels:ametrine", [
        'SiO₂',
        textWither(kpf('ametrine'))
    ]);
    flavor("gemsnjewels:kunzite", [
        'LiAl(SiO₃)₂',
        textWither(kpf('kunzite'))
    ]);
    flavor("gemsnjewels:iolite", [
        'Mg₂Al₃(AlSi₅O₁₈)',
        textNeko(kpf('iolite'))
    ]);
    flavor("forbidden_arcanus:bat_soup", [
        textWither(kpf('bat_soup'))
    ]);

});