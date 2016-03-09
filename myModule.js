/**
 * Created by ericjiang on 2016/2/1.
 */
console.log("before constructor");

function test(){
    console.log("before constructor test function");
}

console.log('call test function');
test();

module.exports = function () {
    //console.log('function');
    var name;

    console.log('moduleTest constructor');

    this.setName = function (theName) {
        name = theName;
    }

    this.sayHello = function () {
        console.log(name + ':\"hello\".');
    }
}