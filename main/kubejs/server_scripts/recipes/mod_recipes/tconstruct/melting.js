onEvent('recipes', e => {
    function tconstructMelting(fluid, amount, input, temp, time, id){
        e.custom({
            "type": "tconstruct:melting",
            "ingredient": input.toJson(),
            "result": {
                "fluid": fluid,
                "amount": amount
            },
            "temperature": temp,
            "time": time
          }).id('kubejs:melting/' + id);
    }
})