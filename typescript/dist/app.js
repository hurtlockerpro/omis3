var y = 10;
var color = "blue";
color = 'red';
var list = [1, 2, 3];
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
var Color;
(function (Color) {
    Color[Color["Red"] = 22] = "Red";
    Color[Color["Green"] = 23] = "Green";
    Color[Color["Blue"] = 24] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var maybe;
if (typeof maybe === "string") {
    // TypeScript knows that maybe is a string
    var aString = maybe;
    // So, it cannot be a boolean
    var aBoolean = maybe;
    // Type 'string' is not assignable to type 'boolean'.
}
function getValue(key) {
    //return 10;
}
;
var z = getValue(222);
var v = undefined;
function buildName1(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
function buildName(firstName, lastName) {
    var restOfName = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfName[_i - 2] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// overload 
function pickCard(x) { }
function pickCard(x) { }
function pickCard(x) { }
console.log("Hello from TypeScript " + y);
var a = /** @class */ (function () {
    function a() {
    }
    return a;
}());
let;
#x;
var y;
D;
new a();
a: : D;
function identity(arg) {
    return arg;
}
identity: string();
identity: number();
