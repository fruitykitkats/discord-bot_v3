// Copyright (c) 2020 FruityKitKats. All rights reserved.

// `npm i ascii-art`
const ascii = require('ascii-art');

exports.run = (client, message, args, ops) => {

    ascii.font(args.join(' '), 'Doom', function(rendered) {

        // The `rendered` variable now contains out output
        // Although, there is usually a few spaces at the end
        rendered = rendered.trimRight(); 
        
        if (rendered.length > 2000) return message.channel.send('Sorry, that message is too long!');

        message.channel.send(rendered, {
            code: 'md'

        });

    }); 
}
