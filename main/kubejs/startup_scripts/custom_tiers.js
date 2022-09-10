onEvent("item.registry.tool_tiers", event => {
    event.add('engulfing_lightning', tier => {
        tier.uses = 1000
        tier.speed = 1.25
        tier.attackDamageBonus = 6
        tier.level = 5
        tier.enchantmentValue = 8
    });
})