/**
 * Created by ericjiang on 2016/2/2.
 */

// 原型
// 基于类的（例如 Java 和 C++ ），对象是类实例化的结果，类就像一个模具，对象由这个模具浇注产生。
// 基于原型的语言中，原型就好像是一件艺术品的原件，我们通过一台 100% 精确的机器把这个原件复制出很多份。

function Person(){
    var interVar = 'hello';
    this.prop1 = 'this.prop1';
    this.func = function () {
        this.name = 'newName';
    }
}

Person.prototype.name = "prototypeName";
Person.prototype.showName = function(){
    console.log(this.name);
}

exports.initTest = function () {
    var person = new Person();
    var person1 = new Person();
    person.showName();
    person1.showName();
    console.log(person.func == person1.func);
    console.log(person.showName == person1.showName);
    person.func();
    person.showName();
    person1.showName();

    var person2 = new Person();
    person2.showName();

    var array = ["111","222"];
    console.log(typeof (array));
}