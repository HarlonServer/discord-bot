const chalk = require("chalk");
const { EmbedBuilder } = require("@discordjs/builders");
const { ChannelType } = require('discord.js');

module.exports = {
  name: "messageCreate",
  once: false,
  execute(message, client) {
    if(message.channel.parent.name === 'Harlon' || 'Staff Only') return;
    const housingEmbed = new EmbedBuilder()
        .setTitle(`**Q:** How can I get a house/apartment?`)
        .setDescription(
          "🏘️ **Free Public Housing** can be found in Shoretrench. It can be claimed by clicking on a \"For Sale\" sign on the outside of a unit.\n\nWhen arriving by train, follow the markers in the ground, which will lead you to available units.\n\n🚇 [**Trip Planner** to Shoretrench](https://harlontripplanner.muffinbardeyt.repl.co/d/publichousing)\n**🧭 GPS** to Shoretrench: ``/gps start hl-shoretrench``\n\n🏘️ If you wish to buy an **apartment** or **house** elsewhere, you can do so anywhere across Harlon by simply clicking on a \"For Sale\" sign if one is available. If one is not available at the property you are interested in, please ask Staff either in-game or open a ticket in <#721631119421734982>."
        )
        .setColor(0x00f51d)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({ text: 'Was this helpful? DM this bot with any feedback!'})
    const factoryEmbed = new EmbedBuilder()
        .setTitle(`**Q:** How can I buy a factory?`)
        .setDescription(
          "🏭 **Factories** can be bought in the Portsfield industrial area for £1000HLP. You can purchase a factory by clicking on a \"For Sale\" sign at the entrance to one. \n\n**🚇 Trip Planner** to Portsfield: <https://harlontripplanner.muffinbardeyt.repl.co/t/?c=wKt>\n**🧭 GPS** to Portsfield: ``/gps start hl-portsfield``\n\n📈 You can upgrade your factory to a **Level 2** factory by asking Staff in-game or opening a ticket in <#721631119421734982>."
        )
        .setColor(0x00f51d)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({ text: 'Was this helpful? DM this bot with any feedback!'})
    const materialsEmbed = new EmbedBuilder()
        .setTitle(`**Q:** How do I gather materials?`)
        .setDescription(
          "⛏️ You can go mining at the **Hibbing Ore Mine** to gather resources. \n\n🚇 [**Trip Planner** to Hibbing Ore Mine](https://harlontripplanner.muffinbardeyt.repl.co/d/oremines)\n\n🌲 You can cut trees at the **Roslagen Tree Plantation**.\n\n🚇 [**Trip Planner** to Roslagen Tree Plantation](https://harlontripplanner.muffinbardeyt.repl.co/d/treeplantation)\n🧭 **GPS** to Roslagen Tree Plantation: ``/gps start hl-treeplantation``"
        )
        .setColor(0x00f51d)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({ text: 'Was this helpful? DM this bot with any feedback!'})
    const moneyEmbed = new EmbedBuilder()
        .setTitle(`**Q:** How can I make money?`)
        .setDescription(
          "💷 There are several ways to earn money in Harlon:\n\n`1.` You get 10£ for every 15min of play time.\n`2.` You can earn an additional 40£ per voting page you [vote for us](https://vote.harlonserver.net).\n`3.` Sometimes the government offers work. They usually post their job openings in <#952496868036853760>.\n`6.` Chopping trees or going on a mining trip can be the solution. Do `/help Materials` to learn more.\n`7.` You prefer opening your own business? You can purchase factories south of the city and sell your items in rentable or purchasable stores across the city. Do `/help Factories` and `/help Shops` to learn more."
        )
        .setColor(0x00f51d)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({ text: 'Was this helpful? DM this bot with any feedback!'})
    const shopsEmbed = new EmbedBuilder()
        .setTitle(`**Q:** How do I start a shop?`)
        .setDescription(
          "🛍️ You can **buy/rent shop spaces** across the city by clicking on a \"For Sale/Rent\" sign at the property. You can request Staff to add exterior branding and add your shop to the Dynmap for greater visibility. \n\n💰 Set up the selling chests: **1:** Left-click a chest with the item you wish to sell. **2:** Write in the cost per item. **3:** Add items to the chest and you are good to go! **4:** If you wish to edit your chest (price etc.), simply right-click the sign."
        )
        .setColor(0x00f51d)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({ text: 'Was this helpful? DM this bot with any feedback!'})
    const dmEmbed = new EmbedBuilder()
        .setTitle(`**${message.author.username}** says...`)
        .setDescription(message.content || null)
        .setColor(0x00f51d)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
    const qContents = ['buy', 'rent', 'get a', 'find a', 'claim', 'get to', 'getting to', 'where is', 'where\'s', 'where are', 'is there', 'are there', 'make', 'how do i', 'how to'];
    const housingContents = ['apartment', 'house', 'apartments', 'houses', 'place to live'];
    const factoryContents = ['factory', 'factories'];
    const materialsContents = ['materials', 'resources', 'wood', 'plantation', 'mine']
    const shopsContents = ['shop', 'shops', 'sell sign', 'buy sign', 'store', 'stores']
    const moneyContents = ['get money', 'make money', 'get cash', 'earn money', 'get rich']
    var passThru = false;
    if (message.author.bot) return false;
    if(message.channel.type == ChannelType.DM) {
        console.log("OI!!")
        client.channels.cache.get('1122574678964314172').send({embeds: [dmEmbed]});
        message.reply('**📣 We hear you loud and clear!** This message has been forwarded to the staff team.');
    }
    for(const val of qContents){
        if(message.content.toLowerCase().includes(val)){
           passThru = true
        }
    }
    setTimeout(() => {
        if(passThru == true){
            for(const val of housingContents){
                if(message.content.toLowerCase().includes(val)){
                    message.reply({embeds: [housingEmbed]})
                }
            }
            for(const val of factoryContents){
                if(message.content.toLowerCase().includes(val)){
                    message.reply({embeds: [factoryEmbed]})
                }
            }
            for(const val of materialsContents){
                if(message.content.toLowerCase().includes(val)){
                    message.reply({embeds: [materialsEmbed]})
                }
            }
            for(const val of shopsContents){
                if(message.content.toLowerCase().includes(val)){
                    message.reply({embeds: [shopsEmbed]})
                }
            }
            for(const val of moneyContents){
                if(message.content.toLowerCase().includes(val)){
                    message.reply({embeds: [moneyEmbed]})
                }
            }
        }
       }, 500)
  },
};
