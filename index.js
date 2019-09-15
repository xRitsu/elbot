const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

const characters = [
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
var char, klasa;

var prefix = "els/";
client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    
    prefix2 = prefix.replace(/\//g, '\\/');
    var re = new RegExp(prefix2+"(.*?) ", "g");
    var argus = msg.content.replace(re, '');
    var args = argus.split(/\/+/);

    var command = msg.content.replace(' '+argus, '');
    command = command.replace(prefix, '');

    switch (msg.content) {
        case prefix + 'pong':
            msg.reply('Ping!');
            break;
        case prefix + 'character':
            char = characters[Math.floor(Math.random() * characters.length)];
            if (char.name == 'Rose') {
                klasa = Math.floor((Math.random() * ((3 - 0) + 1)) + 1);
            } else {
                klasa = Math.floor((Math.random() * ((2 - 0) + 1)) + 1);
            }
            var job = char['class' + klasa];
            msg.reply("you should cap **" + char.name + " (" + job + ")**.");
            break;
        case prefix + "don't ping me":
            msg.reply('since you asked.');
            break;
    }
    if (command === 'iam') {
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        }
    
        var result = "you play ";
        for (i=0; i<args.length; i++) {
            if (i == (args.length - 2)) {
                result += '**'+args[i]+'** and ';
            } else if (i == (args.length - 1)) {
                result += '**'+args[i]+'** now.';
            } else {
                result += '**'+args[i]+'**, ';
            }
        }
        msg.reply(result);
    }
})

client.login(process.env.BOT_TOKEN);
