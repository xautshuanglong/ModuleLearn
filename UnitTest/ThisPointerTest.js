/**
 * Created by ericjiang on 2016/2/2.
 */

// 函数的赋值【函数中的this指针不属于某个函数，而是函数调用时所属的对象】
var someUser = {
    name:'UserName',
    func:function(){
        console.log(this.name);
    }
};

var foo = {
    name:"fooName",
    func:someUser.func
}

exports.initTest = function () {
    someUser.func();
    foo.func();
    someUser.func();
}