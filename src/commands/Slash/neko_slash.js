module.exports = {
name: "neko",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[
;    
{newEmbed:
    {title:🐱}
    {description:[Source]($httpRequest[https://api.nekos.rest/neko;GET;;source]) | [Artist]($httpRequest[https://api.nekos.rest/neko;GET;;artist])}
    {image:$httpRequest[https://api.nekos.rest/neko;GET;;url]}
    {color:$getGlobalUserVar[EmbedColor;$authorID]}
    {footer:nekos.rest}
}

]
$cooldown[5s;Chillax. Wait before requesting again. %time%]
`
}