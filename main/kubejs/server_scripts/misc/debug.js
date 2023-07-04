onEvent('player.chat', event => {
    if (event.message.trim().equalsIgnoreCase('-debug')) {
        let debugMsg = Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:plastic"}}').toJson()
        console.log(debugMsg)
        event.cancel()
    }
})