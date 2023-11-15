var age;
age = 5;
var name1;
name1 = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) { return 100 + a; };
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
person = ['Max', 21];
var Toggle;
(function (Toggle) {
    Toggle[Toggle["LOADING"] = 0] = "LOADING";
    Toggle[Toggle["READY"] = 1] = "READY";
})(Toggle || (Toggle = {}));
var service = {
    status: Toggle.READY
};
if (service.status === Toggle.READY) {
    console.log("Go");
}
if (service.status === Toggle.LOADING) {
    console.log("wait");
}
var union;
var or;
or = "enable";
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
