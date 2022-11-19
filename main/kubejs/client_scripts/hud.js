onEvent('client.tick', e => {
    // Time
    let time = new Date();
    let digitFormat = (num) => {
        if (num < 10){
            return '0' + num.toString();
        }
        else return num.toString();
    }
    let yr = time.getFullYear();
    let mt = digitFormat(time.getMonth() + 1);
    let dy = digitFormat(time.getDay() + 2);
    let hr = digitFormat(time.getHours());
    let mn = digitFormat(time.getMinutes());
    let sc = digitFormat(time.getSeconds());
    let timeText = `${hr}:${mn}:${sc}`;

    e.player.paint({time: {remove: true}});
    e.player.paint({time: {
        type: 'text',
        text: timeText,
        scale: 1.0,
        alignX: 'left',
        alignY: 'top',
        draw: 'ingame',
        x: 2,
        y: 10
    }});

    // Version
    e.player.paint({gameVersion: {remove: true}});
    e.player.paint({gameVersion: {
        type: 'text',
        text: 'Omniworld 2.2.0 Malachite',
        scale: 1.0,
        alignX: 'left',
        alignY: 'top',
        draw: 'ingame',
        x: 2,
        y: 0
    }})
})