const Command = require("../../structures/Command.js");
const { generateInvitesCache } = require("../../helpers/functions.js");

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: "fetch-invites",
            enabled: true,
            aliases: [],
            clientPermissions: [ "EMBED_LINKS", "MANAGE_GUILD" ],
            permLevel: 2
        });
    }

    async run (message) {
        await message.guild.invites.fetch();
        this.client.invitations[message.guild.id] = generateInvitesCache(message.guild.invites.cache);
        message.success("admin/fetch-invites:SUCCESS");
    }

};
