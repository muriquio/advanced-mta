const Discord = require("discord.js")     
const client = new Discord.Client();       
const config = require("./config.js")    
const fs = require("fs");                    
client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();


fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} command loaded.`); 
  
    });
  });
})
client.on("ready", () => {
  const richembed = new Discord.MessageEmbed()
  .setColor('#00FF00')
    .setTitle('Rich RolePlay')
    .setDescription('Bot Active!!')
    .setImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fvk.com%2Frp.rich&psig=AOvVaw08zqZVAFwRWtk_gBeXbZx4&ust=1638025354234000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD25oymtvQCFQAAAAAdAAAAABAD')
    .setTimestamp()
  client.channels.cache.get("8974454163821240").send(embed)
});

client.login(process.env.TOKEN)
