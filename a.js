"use strict";
function runafter1sec(fn) {
    setTimeout(fn, 5000);
}
runafter1sec(function () {
    console.log("Hello");
});
let flag = 1;
function count(fn, flag) {
    setTimeout(() => fn(flag), 3000);
}
function update(flag) {
    flag += 1;
    console.log(flag);
}
count(update, flag);
