import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(
    "MTI0NzgwMTIzMTQzNTM2NjQ0MA.G2-Vvb.HudWFQw06jzp9r2QLd9TYCSzur6zahgafc5cgM"
);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1247801231435366440"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}