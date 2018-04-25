function upper(strings,...values) {
	var interpoLiteral = "";

	for (let index = 0; index < strings.length; index++) {
		if (index > 0) {
			if (typeof values[index-1] == "string") {
				interpoLiteral += values[index-1].toUpperCase();
			}
		}
		interpoLiteral += strings[index];
	}
	return interpoLiteral;
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
