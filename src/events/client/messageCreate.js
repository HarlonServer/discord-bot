const chalk = require("chalk");
const { EmbedBuilder } = require("@discordjs/builders");

module.exports = {
  name: "messageCreate",
  once: false,
  execute(client, message) {
    // const housingEmbed = new EmbedBuilder()
    //     .setTitle(`**Q:** How can I get a house/apartment?`)
    //     .setDescription(
    //       "🏘️ **Free Public Housing** can be found in Shoretrench. It can be claimed by clicking on a \"For Sale\" sign on the outside of a unit.\n\nWhen arriving by train, follow the markers in the ground, which will lead you to available units.\n\n🚇 [**Trip Planner** to Shoretrench](https://harlontripplanner.muffinbardeyt.repl.co/d/publichousing)\n**🧭 GPS** to Shoretrench: ``/gps start hl-shoretrench``\n\n🏘️ If you wish to buy an **apartment** or **house** elsewhere, you can do so anywhere across Harlon by simply clicking on a \"For Sale\" sign if one is available. If one is not available at the property you are interested in, please ask Staff either in-game or open a ticket in <#721631119421734982>."
    //     )
    //     .setColor(0x00f51d)
    //     .setTimestamp(Date.now())
    // const factoryEmbed = new EmbedBuilder()
    //     .setTitle(`**Q:** How can I buy a factory?`)
    //     .setDescription(
    //       "🏭 **Factories** can be bought in the Portsfield industrial area for £1000HLP. You can purchase a factory by clicking on a \"For Sale\" sign at the entrance to one. \n\n**🚇 Trip Planner** to Portsfield: <https://harlontripplanner.muffinbardeyt.repl.co/t/?c=wKt>\n**🧭 GPS** to Portsfield: ``/gps start hl-portsfield``\n\n📈 You can upgrade your factory to a **Level 2** factory by asking Staff in-game or opening a ticket in <#721631119421734982>."
    //     )
    //     .setColor(0x00f51d)
    //     .setTimestamp(Date.now())
    // const materialsEmbed = new EmbedBuilder()
    //     .setTitle(`**Q:** How do I gather materials?`)
    //     .setDescription(
    //       "⛏️ You can go mining at the **Hibbing Ore Mine** to gather resources. \n\n🚇 [**Trip Planner** to Hibbing Ore Mine](https://harlontripplanner.muffinbardeyt.repl.co/d/oremines)\n\n🌲 You can cut trees at the **Roslagen Tree Plantation**.\n\n🚇 [**Trip Planner** to Roslagen Tree Plantation](https://harlontripplanner.muffinbardeyt.repl.co/d/treeplantation)\n🧭 **GPS** to Roslagen Tree Plantation: ``/gps start hl-treeplantation``"
    //     )
    //     .setColor(0x00f51d)
    //     .setTimestamp(Date.now())
    // const shopsEmbed = new EmbedBuilder()
    //     .setTitle(`**Q:** How do I start a shop?`)
    //     .setDescription(
    //       "🛍️ You can **buy/rent shop spaces** across the city by clicking on a \"For Sale/Rent\" sign at the property. You can request Staff to add exterior branding and add your shop to the Dynmap for greater visibility. \n\n💰 Set up the selling chests: **1:** Left-click a chest with the item you wish to sell. **2:** Write in the cost per item. **3:** Add items to the chest and you are good to go! **4:** If you wish to edit your chest (price etc.), simply right-click the sign."
    //     )
    //     .setColor(0x00f51d)
    //     .setTimestamp(Date.now())
    console.log(message.content);
    if (message.author.bot) return false;
    if (message.content.includes("apartment" || "house")){
        if (message.content.includes("buy" || "get" || "find" || "claim")){
            message.reply("topic: housing");
        } else {
            return false;
        }
    } else {
        if (message.content.includes("factory")){
            if (message.content.includes("buy" || "get" || "find" || "claim")){
                message.reply("topic: factory");
            } else {
                return false;
            }
        } else {
            if (message.content.includes("materials" || "resources")){
                if (message.content.includes("sell" || "get" || "find" || "claim")){
                    message.reply("topic: materials");
                } else {
                    return false;
                }
            } else {
                if (message.content.includes("shop" || "store")){
                    if (message.content.includes("buy" || "get" || "find" || "claim" || "set up" || "make a")){
                        message.reply("topic: shops");
                    } else {
                        return false;
                    }
                };
            }
        }
    }
  },
};
