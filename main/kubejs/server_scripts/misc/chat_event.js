onEvent('player.chat', function (event) {
    if (event.message.trim().equalsIgnoreCase('-purge')) {
      event.server.scheduleInTicks(1, event.server, function (callback) {
        callback.data.tell(Component.translate('kubejs.server_events.purge').aqua())
        callback.data.runCommandSilent(`/kill @e[type=item]`)
      })
      event.cancel()
    }

    if (event.message.trim().equalsIgnoreCase('-book')) {
        event.server.scheduleInTicks(1, event.server, function (callback) {
          callback.data.tell(Component.translate('kubejs.server_events.book').aqua())
          event.player.give(akashicTome)
      })
      event.cancel()
    }

    if (event.message.trim().equalsIgnoreCase('-suicide')) {
      event.server.scheduleInTicks(1, event.server, function (callback) {
        callback.data.tell(Component.translate('kubejs.server_events.suicide').aqua())
        callback.data.runCommandSilent(`/kill ${event.player.name}`)
      })
      event.cancel()
    }
})