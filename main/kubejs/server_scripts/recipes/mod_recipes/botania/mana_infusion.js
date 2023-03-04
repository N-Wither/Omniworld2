onEvent('recipes', e => {
    let mana_infusion = (output, input, mana, catalyst) => {
        let recipeJson = {
            type: 'botania:mana_infusion',
            input: input,
            output: output,
            mana: mana
        }
        if(catalyst == undefined){
            return recipeJson;
        }
        else {
            recipeJson.catalyst = {
                type: 'block',
                block: catalyst
            };
            return recipeJson;
        }
    }
    let rip = 'kubejs:mana_infusion/';

    e.custom(mana_infusion({item: 'ars_nouveau:source_gem', count: 2}, {item: 'ars_nouveau:source_gem'}, 5000, "botania:conjuration_catalyst")).id(rip + 'source_gem');
})