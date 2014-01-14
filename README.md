# safesocket

Wraps socket.io event handlers to prevent crashes from certain malicious inputs.

## Usage

The first parameter passed to `safesocket` is the expected number of (non-function) arguments. The second parameter is the handler function to wrap. This function will always be called with exactly `expected + 1` arguments, and the last argument will always be a `Function`.

    var safesocket = require('safesocket');
    
    socket.on('ping', safesocket(2, function (name, location, callback) {
        console.log('Pinged from ' + name + '/' + location);
        callback('pong');
    }));

## License

The MIT License (MIT)
