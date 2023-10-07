var priority;
(function (priority) {
    priority[priority["low"] = 0] = "low";
    priority[priority["normal"] = 1] = "normal";
    priority[priority["high"] = 2] = "high";
})(priority || (priority = {}));
console.log(priority.low);
console.log(priority.high);
console.log(priority.normal);
