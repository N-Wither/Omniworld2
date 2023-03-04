// priority: 10

function MmProcess() {
    this.json = {
        structureId: '',
        name: {
            text: ''
        },
        duration: 20,
        inputs: [],
        outputs: []
    }
}

MmProcess.prototype = {
    structure: function(id){
        this.json.structureId = id
        return this
    },
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

let HWP = 'kubejs:heavy_water_plant'