/**
 * Module exports.
 */

module.exports = exports = safesocket;

/**
 * Wraps socket.io event handlers to prevent crashes from certain malicious inputs.
 */

function safesocket (expected, fn) {
	return function () {
		var _args = [];
		for (var idx in arguments) {
			_args.push(arguments[idx]);
		}

		var args = _args.filter(notFunction).slice(0, expected);
		for (var i = args.length; i < expected; i++) {
			args.push(undefined);
		}

		var arg = _args.pop();
		args.push((arg instanceof Function) ? arg : noop);

		fn.apply(this, args);
	};
}

function noop () {}

function notFunction (fn) {
	return !(fn instanceof Function);
}
