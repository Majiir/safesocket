# safesocket

Wraps socket.io event handlers to prevent crashes from certain malicious inputs.

## Usage

    var safesocket = require('safesocket');
    
    socket.on('ping', safesocket(function (args, callback) {
        console.log('Pinged from ' + args[0]);
        callback('pong');
    }));

## License

The MIT License (MIT)
