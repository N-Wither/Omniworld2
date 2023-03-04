onEvent('recipes', e => {
    let ie_clothe = (seed, output, soil, render, id) => {
        if(id == undefined){
            e.recipes.immersiveengineeringCloche(output, seed, soil, {type: 'crop', block: render}).id('kubejs:ie_cloche' + seed.split(':')[1])
        }
        else{
            e.recipes.immersiveengineeringCloche(output, seed, soil, {type: 'crop', block: render}).id('kubejs:ie_cloche' + id)
        }
    }
})