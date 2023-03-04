onEvent('player.chat', function (event) {
  /**
   * @param {function} code 
   * @param {number} time 
   */
  function setTimeout(code, time){
    event.server.scheduleInTicks(time, code)
  }

  // Real World Time
  let time = new Date();
  let digitFormat = (num) => {
    if (num < 10) {
      return '0' + num.toString();
    }
    else return num.toString();
  }
  let yr = digitFormat(time.getFullYear());
  let mth = digitFormat(time.getMonth() + 1);
  let dy = digitFormat(time.getDate());
  let hr = digitFormat(time.getHours());
  let mn = digitFormat(time.getMinutes());
  let sc = digitFormat(time.getSeconds());
  let timeText = `${yr}/${mth}/${dy} ${hr}:${mn}:${sc}`;

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
      callback.data.runCommandSilent(`/kill ${event.player.name.text}`)
    })
    event.cancel()
  }

  if (event.message.trim().includes('world.execute(me)')) {
    event.player.tell(Component.of('/********** WORLD **********/').aqua())
    setTimeout(() => { event.player.tell('\u00a7bSwitch on the power line') }, 20);
    setTimeout(() => { event.player.tell('\u00a7bRemember to put on \u00a7lPROTECTION') }, 40);
    setTimeout(() => { event.player.tell('\u00a7bLay down your \u00a7oPieces') }, 60);
    setTimeout(() => { event.player.tell('\u00a7bAnd let\'s begin \u00a7lOBJECT CREATION') }, 80);
    setTimeout(() => { event.player.tell('\u00a7bFill in my data') }, 100);
    setTimeout(() => { event.player.tell('\u00a7bparameters \u00a7lINITIALIZATION') }, 120);
    setTimeout(() => { event.player.tell('\u00a7bSet up our new world') }, 140);
    setTimeout(() => { event.player.tell('\u00a7bAnd let\'s begin our \u00a7lSIMULATION') }, 160);
    setTimeout(() => { 
      event.server.runCommandSilent(`/kill ${event.player.name.text}`)
      event.player.tell(`[${timeText.split(' ')[1]}] [INFO ] successfully excuted ${event.player.name.text}`)
    }, 200);
    event.cancel()
  }
})