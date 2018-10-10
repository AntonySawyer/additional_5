module.exports = function check(str, bracketsConfig) {
// check for even count of brackets (other way - one of brackets without couple)
	if (str.length % 2 !== 0) {
		return false;
	}

	const check = [];
	const openBrackets = [];
	const closeBrackets = [];
	for (let j = 0; j < bracketsConfig.length; j++) {
		openBrackets.push(bracketsConfig[j][0]);
		closeBrackets.push(bracketsConfig[j][1]);
	}

	for (let i = 0; i < str.length; i++) {
		let current = str[i];
		let open = openBrackets.includes(current);
		let close = closeBrackets.includes(current);
		let last = check[check.length - 1];

		if (open) {
			if (close) {
				last === current ? check.pop() : check.push(current);
			} else {
				check.push(current);
			}
		}

		close && last === openBrackets[closeBrackets.indexOf(current)] ? check.pop() : () => {return false};

	}

	return check.length === 0;

}
