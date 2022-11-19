onEvent("recipes", e => {
    if(Platform.isLoaded('torcherino')){
        e.remove({mod: 'torcherino'});
    }
})