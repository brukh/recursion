// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    var result = [];

    var hasClass = function(node) { //checks to see if the node contains the classname
        if (node.className.split(" ").indexOf(className) > -1 && node !== undefined) {
            return true;
        } else {
            return false;
        }
    };

    var matches = function(child) {
        if (hasClass(child)) {
            result.push(child);
        }
        for (var i = 0; i < child.children.length; i++) {
            matches(child.children[i]);
        }

    };

    matches(document.body);
    return result;
};