/**
 * Created by ericjiang on 2016/2/1.
 */
console.log('========================= Node.JS Closure =======================');
var generateClosure = function() {
    var count = 0;
    var get = function() {
        count ++;
        return count;
    };
    return get;
};

exports.initTest = function(){
    var counter1 = generateClosure();
    var counter2 = generateClosure();
    console.log(counter1()); // 输出 1
    console.log(counter2()); // 输出 1
    console.log(counter1()); // 输出 2
    console.log(counter1()); // 输出 3
    console.log(counter2()); // 输出 2
}