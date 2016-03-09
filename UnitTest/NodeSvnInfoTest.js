/**
 * Created by ericjiang on 2016/2/23.
 */
var fs = require("fs");
var SVN = require("node.svn");

var log = require("../LogTools.js");
var spawn = require("child_process").spawn;
var iconv = require("iconv-lite");

exports.initTest = function(){
    var config =
    {
        "cwd":process.cwd() + "\\..\\doc",
        "username":"ericjiang",
        "password":"Shuanglong3"
    };

    var svn = new SVN(config, function (err)
    {
        if(err !== null)
        {
            //log.error(err);
        }
    });
    //svn.info("约瑟精灵需求节点.xlsx",function callBack(err)
    //{
    //    log.error(err);
    //},"e:\\WebSite\\doc");

    //var buffer = new Buffer("");
    var free = spawn("D:\\Program Files\\TortoiseSVN\\bin\\svn.exe",["info","turn.xml"],{cwd:"e:\\WebSite\\client\\Client"},function callBack(err,stdout,stderr)
    {
        if(err !== null)
        {
            log.debug(err);
        }
    });
    free.stdout.on("data",function(data)
    {
        //log.debug("stdout:\n"+data);
        //if(Buffer.isBuffer(data))
        //{
        //    log.info("is buffer");
        //    buffer.concat(data);
        //}
        log.info(iconv.decode(data,"gbk"));
    });

    //free.stdout.on("end",function(data)
    //{
    //    var str = iconv.decode(buffer,"gbk");
    //    log.debug("end:\n"+str);
    //});

    free.on("exit",function(code)
    {
        log.debug("exit code:"+code);
    });
};