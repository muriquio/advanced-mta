const Discord = require("discord.js");
const Gamedig = require("gamedig");
exports.run = (client, message, args) => {

  
  Gamedig.query({
    type: "mtasa",
    host: "your ip here example: mtasa://213.226.119.31:22003"  
  })
    .then(state => {
      const advmuqio = new Discord.MessageEmbed()
        .setColor("#")
        .setTitle("Rich RolePlay User Count")
        .setDescription("Rich RolePlay User Count Like;")

        .addField("" + state.raw.numplayers + "\n" + "Rich RolePlay İP : mtasa://213.226.119.31:22003")
      
      	.setTimestamp()
	      .setFooter("https://www.google.com/url?sa=i&url=https%3A%2F%2Fvk.com%2Frp.rich&psig=AOvVaw3ypEuEH1dN5NI3j0lpXXyr&ust=1638025013617000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCF8-qktvQCFQAAAAAdAAAAABAD");

      return message.channel.send(advmuqio);
    })
  
};
exports.config = {
  name: "richroleplay",
  aliases:[]
};
