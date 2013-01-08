(function () {
	'use strict';
	var _in = document.getElementById('in');
	var _out= document.getElementById('out');
	_in.onkeyup = function () {
		var output,
			input = _in.value.toLowerCase();
			output = input.replace(/[eaoitbgfpm]/g, function(c) {
				return {
					"a": "e",
					"e": "a",
					"i": "o",
					"o": "i",
					"b": "t",
					"t": "b",
					"f": "g",
					"g": "f",
					"p": "m",
					"m": "p"
				}[c];
			});
		_out.value=output;
	};
})();