onEvent('server.datapack.high_priority', event => {
    let path = (mod, name) => `${mod}:tinkering/materials/traits/${name}.json`
    function Traits(){
        this.default = []
    }
    Traits.prototype.add = function (name, level){
        level = level || 1
        this.default.push(
            {
                name: name,
                level: level
            }
        )
        return this
    }

    let improvable = 'tinkerslevellingaddon:improvable'

    event.addJson(path('tinkerscalibration', 'mangobberslime'), new Traits().add('tinkerscalibration:united').add('tconstruct:unbreakable').add(improvable))

    event.addJson(path('materialis', 'alfsteel'), new Traits().add('materialis:manashield').add('materialis:elven_beam').add(improvable))
    event.addJson(path('materialis', 'forgotten'), new Traits().add('materialis:old_timer').add('materialis:underlord').add(improvable))
    event.addJson(path('materialis', 'neptunium'), new Traits().add('materialis:neptunes_blessing').add(improvable))
    event.addJson(path('materialis', 'neutronium'), new Traits().add('materialis:supermassive').add(improvable))
    event.addJson(path('materialis', 'refined_obsidian'), new Traits().add('materialis:short_sighted').add(improvable))
    event.addJson(path('materialis', 'terrasteel'), new Traits().add('materialis:manashield').add('materialis:terrabeam').add(improvable))

    event.addJson(path('tinkers_reforged', 'durasteel'), new Traits().add('tinkers_reforged:adapting').add(improvable))

    event.addJson(path('tconstruct', 'hepatizon'), new Traits().add('tconstruct:momentum', 2).add(improvable))
    event.addJson(path('tconstruct', 'manyullyn'), new Traits().add('tconstruct:insatiable', 2).add(improvable))
    event.addJson(path('tconstruct', 'queens_slime'), new Traits().add('tconstruct:overlord').add('tconstruct:overslime').add(improvable))
})