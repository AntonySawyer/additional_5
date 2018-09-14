module.exports = function check(str, bracketsConfig) {
// check for even count of brackets (other way - one of brackets without couple)
	if (str.length % 2 != 0) {
		return false;
	}

	var check = [];
	var openBrackets = [];
	var closeBrackets = [];
	for (var j = 0; j < bracketsConfig.length; j++) {
		openBrackets.push(bracketsConfig[j][0]);
		closeBrackets.push(bracketsConfig[j][1]);
	}

	for (var i = 0; i < str.length; i++) {
		var open = openBrackets.includes(str[i]);
		var close = closeBrackets.includes(str[i]);
		if (open) {
			if (close) {
				if (check[check.length - 1] == str[i]) {
					check.pop();
				} else {
					check.push(str[i]);
				}
			} else {
				check.push(str[i]);				
			}
		} else if (close && check[check.length - 1] == openBrackets[closeBrackets.indexOf(str[i])]) {
			check.pop();
		} else {
			return false;
		}
	}

	if (check.length == 0) {
		return true;
	} else {
		return false;
	}
}
