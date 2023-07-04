// priority: 10

function MmProcess(structureId) {
    this.json = {
        structureId: structureId,
        name: {
            text: ''
        },
        duration: 20,
        inputs: [],
        outputs: []
    }
}

MmProcess.prototype = {
    name: function(name){
        this.json.name.text = name
        return this
    },
    duration: function(time){
        this.json.duration = time;
        return this
    },
    input: function(ingredient){
        this.json.inputs = ingredient
        return this
    },
    output: function(ingredient){
        this.json.outputs = ingredient
        return this
    },
    done: function(){
        let out = this.json
        return out
    }
}

let mmItem = (item, count) => {
    let result = {
        type: 'mm:simple',
        ingredient: {
            type: 'mm:item',
            count: 1,
            item: item
        }
    }
    if(count != undefined){
        result.ingredient.count = count
    }
    return result
}

let mmEnergy = (amount) => {
    return {
        type: 'mm:simple',
        ingredient: {
            type: 'mm:energy',
            amount: amount
        }
    }
}

let mmFluid = (fluid, amount) => {
    return {
        type: 'mm:simple',
        ingredient: {
            type: 'mm:fluid',
            amount: amount,
            fluid: fluid
        }
    }
}

let mmGas = (gas, amount) => {
    return {
        type: 'mm:simple',
        ingredient: {
            type: 'mm:mekanism_gas',
            amount: amount,
            gas: gas
        }
    }
}

let mmEnergyPerTick = (amount) => {
    return {
        type: 'mm:per_tick',
        ingredient : {
            type: 'mm:energy',
            amount: amount
        }
    }
}

let mmItemTag = (tag, count) => {
    count = count || 1
    return {
        type: 'mm:simple',
        ingredient: {
            type: 'mm:item',
            count: count,
            tag: tag
        }
    }
}

let HWP = 'kubejs:heavy_water_plant'
let ASU = 'kubejs:air_separation_unit'
let BF1 = 'kubejs:industrial_blast_furnace_mk1'
let BF2 = 'kubejs:industrial_blast_furnace_mk2'
let BF3 = 'kubejs:industrial_blast_furnace_mk3'
let ICO = 'kubejs:industrial_coke_oven'