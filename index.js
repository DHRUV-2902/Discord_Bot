import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] 
});

client.on('messageCreate',(message) => {
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url=message.content.split("create")[1];
        return message.reply({
            content:"Generating Short ID for " + url,
        })
    }
    message.reply({
        content:"hii from bot",
    })
  });

  client.on("interactionCreate",(interaction)=>{
    console.log(interaction);
    interaction.reply("Pong!");
  })

  client.login("MTI0NzgwMTIzMTQzNTM2NjQ0MA.G2-Vvb.HudWFQw06jzp9r2QLd9TYCSzur6zahgafc5cgM");