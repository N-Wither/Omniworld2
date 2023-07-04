onEvent('client.tick', e => {
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

    e.player.paint({
        time: {
            type: 'text',
            text: timeText,
            scale: 1.0,
            alignX: 'right',
            alignY: 'bottom',
            draw: 'ingame',
            x: -18,
            y: -10
        }
    });

    // Game Version
    e.player.paint({
        gameVersion: {
            type: 'text',
            text: 'Omniworld 2.7.0 Sapphire',
            scale: 1.0,
            alignX: 'right',
            alignY: 'bottom',
            draw: 'ingame',
            x: -18,
            y: 0
        }
    })
    e.player.paint({
        versionLogo: {
            type: 'item',
            item: "gemsnjewels:sapphire",
            alignX: 'right',
            alignY: 'bottom',
            x: 8,
            y: 6
        }
    })

})