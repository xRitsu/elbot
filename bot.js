var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});
bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});
var characters = [
  {
    name: 'Elsword',
    class1: 'Knight Emperor',
    class2: 'Immortal',
    class3: 'Rune Master'
  },
  {
    name: 'Aisha',
    class1: 'Aether Sage',
    class2: 'Oz Sorcerer',
    class3: 'Metamorphy'
  },
  {
    name: 'Rena',
    class1: 'Anemos',
    class2: 'Daybreaker',
    class3: 'Twilight'
  },
  {
    name: 'Raven',
    class1: 'Furious Blade',
    class2: 'Rage Hearts',
    class3: 'Nova Imperator'
  },
  {
    name: 'Eve',
    class1: 'Code: Ultimate',
    class2: 'Code: Esencia',
    class3: 'Code: Sariel'
  },
  {
    name: 'Chung',
    class1: 'Comet Crusader',
    class2: 'Fatal Phantom',
    class3: 'Centurion'
  },
  {
    name: 'Ara',
    class1: 'Apsara',
    class2: 'Devi',
    class3: 'Shakti'
  },
  {
    name: 'Elesis',
    class1: 'Empire Sword',
    class2: 'Flame Lord',
    class3: 'Bloody Queen'
  },
  {
    name: 'Aisha',
    class1: 'Aether Sage',
    class2: 'Oz Sorcerer',
    class3: 'Metamorphy'
  },
  {
    name: 'Add',
    class1: 'Doom Bringer',
    class2: 'Dominator',
    class3: 'Mad Paradox'
  },
  {
    name: 'Lu/Ciel',
    class1: 'Catastrophe',
    class2: 'Innocent',
    class3: 'Diangelion'
  },
  {
    name: 'Rose',
    class1: 'Tempest Burster',
    class2: 'Black Massacre',
    class3: 'Minerva',
    class4: 'Prime Operator'
  },
  {
    name: 'Ain',
    class1: 'Richter',
    class2: 'Bluhen',
    class3: 'Herrscher'
  },
  {
    name: 'Laby',
    class1: 'Eternity Winner',
    class2: 'Radiant Soul',
    class3: 'Nisha Labyrinth'
  }

];
/*bot.on('message', function (user, userID, channelID, message, evt) {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(',');
    var cmd = args[0];
    var char,
      klasa,
      job;

    args = args.splice(1);
    switch (cmd) {
      case 'ping':
        bot.sendMessage({
          to: channelID,
          message: 'Pong!'
        });
      case 'character':
        char = characters[Math.floor(Math.random() * characters.length)];
        if (char.name == 'Rose') {
          klasa = Math.floor((Math.random() * ((3 - 0) + 1)) + 1);
        } else {
          klasa = Math.floor((Math.random() * ((2 - 0) + 1)) + 1);
        }
        job = char['class' + klasa];
        bot.sendMessage({
          to: channelID,
          message: "You should cap **" + char.name + " (" + job + ")**."
        });
    }
  }
});*/
bot.on("message", function(message) {
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === '!ping') {
    message.channel.send('Pong!');
  } else
  if (command === '!blah') {
    message.channel.send('Meh.');
  }
});