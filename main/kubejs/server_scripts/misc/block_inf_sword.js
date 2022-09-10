onEvent('item.right_click', e => {
    if(e.item.id == 'avaritia:infinity_sword'){
        e.cancel();
    }
})