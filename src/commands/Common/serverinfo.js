module.exports = {
name: "serverinfo",
aliases: "si",
code: `$description[1;
\`$serverName ($guildID)\`
:bust_in_silhouette: **Server Owner:** <@$ownerID>
<:Boosted:917749329295454238> **Boost Count:** $serverBoostCount[$guildID] boosts
:slight_smile: **Emoji Count:** $emojiCount[$guildID] emojis
]
$thumbnail[1;$serverIcon[$guildID]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$if[$authorID!=$getVar[ownid]]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$endif`
}
