﻿

function fib(num) {
    var result = 0;

    if (num < 2) {
        result = num;
    } else {
        result = fib(num - 1) + fib(num - 2);
    }

    return result;
}


window.BApp1JsFunctions = {
    calcfib: function (num) {
        return fib(num);
    },
    generateNewUser: function () {
        return faker.name.findName() + ", " + faker.address.country() + ", Age " + (Math.floor(Math.random() * 50) + 15);
    },

};