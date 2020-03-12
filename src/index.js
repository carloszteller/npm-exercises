const $ = require('jquery');
const hi = require('./say-hello');

let sayHello = () => {
    console.log('hello');
};

sayHello();

console.log(hi.hello);