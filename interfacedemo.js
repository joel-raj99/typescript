var addition = function (val) { return val.x + val.y; };
var division = function (val) { return val.x / val.y; };
var subraction = function (val) { return val.x - val.y; };
var multiplication = function (val) { return val.x * val.y; };
var percentage = function (val) { return val.x % val.y; };
var values = { x: 150, y: 120 };
console.log(values.x);
console.log(values.y);
var add_result = addition(values);
var div_result = division(values);
var sub_result = subraction(values);
var mul_result = multiplication(values);
var per_result = percentage(values);
console.log("add:" + add_result);
console.log("div" + div_result);
console.log("mul" + mul_result);
console.log("sub" + sub_result);
console.log("per" + per_result);
