// Copyright (c) 2018 FruityKitKats. All rights reserved.

const {RichEmbed} = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {

    let reminderTime = args[0]; 
    if (!reminderTime) {
        let embed = new RichEmbed() 
            .setTitle('Proper Usage') 
            .setDescription(`\`<prefix>remindme 15min any text or code\``)
        return message.channel.send({embed}) 
    }

    let reminder = args.slice(1).join(" "); 

    let embed = new RichEmbed() 
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField('Reminder', `\`\`\`${reminder}\`\`\``) 
        .addField('Time', `\`\`\`${reminderTime}\`\`\``) 
        .setTimestamp();
    message.channel.send({embed}); 

    setTimeout(function() {
        let embed = new RichEmbed()
            .setColor('#ffffff')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField('Reminder', `\`\`\`${reminder}\`\`\``)
            .setTimestamp()
            message.channel.send({embed});
    }, ms(reminderTime));

} 
