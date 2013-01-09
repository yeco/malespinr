/**
 * Malespinr
 * =========
 *
 * Nothing fancy, just some find/replace fun.
 *
 */

(function () {
	'use strict';
	var _in = document.getElementById('in');
	var _out= document.getElementById('out');
	_in.onkeyup = function () {
		var output,
			input = _in.value;
			output = input.replace(/[eaoitbgfpméáóí]/ig, function(c) {
				return {
					"a": "e", "e": "a", "i": "o", "o": "i", "b": "t", "t": "b", "f": "g", "g": "f", "p": "m", "m": "p",
					"A": "E", "E": "A", "I": "O", "O": "I", "B": "T", "T": "B", "F": "G", "G": "F", "P": "M", "M": "P",
					"á": "é", "é": "á", "í": "ó", "ó": "í", "Á": "É", "É": "Á", "Í": "Ó", "Ó": "Í"
				}[c];
			});
		_out.value=output;
	};
})();