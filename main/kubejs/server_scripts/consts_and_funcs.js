// priority: 99

// Consts

const kjs = 'kubejs:';
const exc = 'extendedcrafting';

// Functions

function INGOT(count, material){return `${count}x #forge:ingots/${material}`};
function BLOCK(count, material){return `${count}x #forge:storage_blocks/${material}`};
function NUGGET(count, material){return `${count}x #forge:nuggets/${material}`};
function GEM(count, material){return `${count}x #forge:gems/${material}`};
function DUST(count, material){return `${count}x #forge:dusts/${material}`};
/**
 * 
 * @param {String} tag 
 * @param {Number} count 
 * @returns Object
 */
function ForgeTag(tag, count){
    if(count == undefined){
        count = 1
    }
    return {"tag": tag, "count": count}
}

/**
 * 
 * @param {String} item 
 * @param {Number} count 
 * @returns Object
 */
function ForgeItem(item, count){
    if(count == undefined){
        count = 1
    }
    return {"item": item, "count": count}
}

function fluidTag(tag, amount){
    amount = amount || 90;
    return {
        tag: tag,
        amount: amount
    }
}

/**
 * @param {string} item 
 * @param {number} chance 
 */
function ChanceItem(item, chance){
    chance = chance || 1;
    return Item.of(item).withChance(chance)
}