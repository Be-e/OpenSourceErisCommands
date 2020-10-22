let cid = bot.createChannel(msg.guildID,'CHANNEL NAME',0).then(async (cid) => {
await cid.editPermission('USER ID','117760','0','member','Permission Edit')
})

// <channel>.editPermission() can be used in different functions. Editing role permissions.
// <channel>.editPermission('USER OR ROLE ID','ALLOW PERMS','DENY PERMS','member or role','Reason')
