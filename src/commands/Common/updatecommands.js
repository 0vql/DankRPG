module.exports = {
name: "update",
aliases: "refresh",
code: `$onlyForIDs[$botOwnerID[;];]
$updateCommands
$addCmdReactions[✅]
$onlyIf[$isBot[$authorID]!=true;]`
} // This will NOT add new variables. It only refreshes each command file changed.