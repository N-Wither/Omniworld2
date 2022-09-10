// priority: 99
onEvent('recipes', e => {
    settings.logAddedRecipes = true
    settings.logRemovedRecipes = true
    settings.logSkippedRecipes = false
})