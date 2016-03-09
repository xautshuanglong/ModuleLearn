// 单元测试
var unitTestConfig = require("./config/UnitTestConfig.json");

var menuArray = [
    "1: myModule test",
    "2: server   test"];

var PrintMenu = function(){
    console.log("\n");
    console.log("==============================================");
    console.log("             UnitTest Select Panel            ");
    console.log("==============================================");
    for(var i in unitTestConfig){
        if(unitTestConfig[i]["status"] === "open")
        {
            console.log("    "+i+":  "+unitTestConfig[i]["menuStr"]);
        }
    }
    console.log("Input which you select:");
    process.stdin.resume();
};

process.stdin.on('data',function(dataStr){
    //process.stdout.write('read from console:'+dataStr.toString());
    //var test = "exit";
    //console.log("dataStr:"+dataStr.length+"  "+"dataStr.toString():"+dataStr.toString().length+"   "+test+":"+test.length);
    //// 控制台输入的数据比看到的数据多一个字节【调用 trim()后，与所见相同，可能包含回车“\n”测试不成功】
    ////console.log(dataStr.toString().trim().localeCompare("exit"));
    //if(dataStr.toString().localeCompare("exit") == 0)
    //{
    //    console.log('bingo');
    //    //process.stdin.suspend();
    //}
    //else
    //{
    //    console.log('bingo failed');
    //}

    var testID = parseInt(dataStr.toString().trim());
    if(unitTestConfig[testID])
    {
        if(unitTestConfig[testID]["status"] === "closed")
        {
            console.log("The test you have selected has closed...");
            PrintMenu();
            return;
        }
        var unitFunc = require(unitTestConfig[testID]["moduleName"]);
        unitFunc.initTest();
    }
    else{
        console.log("Don`t exist this select.");
        PrintMenu();
    }
    //switch (dataStr.toString().trim())
    //{
    //    case "1":
    //        break;
    //    case "2":
    //        break;
    //    default:
    //        console.log("Don`t exist this select.");
    //}
});

PrintMenu();