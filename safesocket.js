/**
 * Module exports.
 */

module.exports = exports = safesocket;

/**
 * Wraps socket.io event handlers to prevent crashes from certain malicious inputs.
 */

function safesocket (fn) {
	return function () {
		var _args = [];
		for (var idx in arguments) {
			_args.push(arguments[idx]);
		}

		var args = [_args];
		if (_args[_args.length - 1] instanceof Function) {
			args.push(_args.pop());
		} else {
			args.push(noop);
		}

		fn.apply(this, args);
	};
}

function noop () {}
