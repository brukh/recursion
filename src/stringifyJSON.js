// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var canStringify = function(value) { //checks for falsey values & functions
    return value !== undefined && typeof value !== 'function';
}

var stringifyJSON = function(obj) {
    var result;

    if (canStringify(obj)) {
        if (Array.isArray(obj)) {
            result = [];
            for (var i = 0; i < obj.length; i++) {
                result.push(stringifyJSON(obj[i]));
            }
            return "[" + result.join(",") + "]";
        } else if (obj instanceof Object) {
            result = [];
            for (var key in obj) {
                if (canStringify(obj[key])) {
                    result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
                }
            }
            return "{" + result.join(",") + "}";
        } else if (typeof obj === "string") {
            return "\"" + obj + "\"";
        } else {
            return "" + obj;
        }
    }
};