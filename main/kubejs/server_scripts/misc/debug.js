onEvent('player.chat', event => {
    if (event.message.trim().equalsIgnoreCase('-debug')) {
        let debugMsg = Item.of('#forge:ingots/steel').toJson()
        console.log(debugMsg)
        event.cancel()
    }
})