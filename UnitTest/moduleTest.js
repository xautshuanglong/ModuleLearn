
var moduleTest = require('./../myModule.js');

exports.initTest = function(){
    var m1 = new moduleTest();
    m1.setName('Shuang');
    m1.sayHello();
    var m2 = new moduleTest();
    m2.setName('Long');
    m2.sayHello();
};