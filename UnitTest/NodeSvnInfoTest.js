/**
 * Created by ericjiang on 2016/2/23.
 */
var fs = require("fs");
//var SVN = require("node.svn");

var log = require("../LogTools.js");
var spawn = require('child_process').spawn;

exports.initTest = function(){
    var config =
    {
        "cwd":process.cwd() + "\\..\\StarPlantClient\\resource",
        "username":"shuanglong",
        "password":"shuanglong"
    };

    log.debug("cwd:"+config.cwd);

    //var svn = new SVN(config, function (err)
    //{
    //    if(err !== null)
    //    {
    //        log.error(err);
    //    }
    //    else
    //    {
    //        svn.info("theme.thm", function (err, info) {
    //            if(err == null)
    //            {
    //                log.info(info);
    //            }
    //            else
    //            {
    //                log.error(err);
    //            }
    //        });
    //    }
    //});


    /* ==================== nodejs process testing ================= */
    //var free = spawn("svn",["info","theme.thm"],{cwd:"E:\\WebSite\\StarPlantClient\\resource"});
    //free.stdout.on("data",function(data)
    //{
    //    console.log("spawn on data:"+data);
    //});
    //
    //free.stdout.on("end",function(data)
    //{
    //    console.log("spawn on end");
    //});
    //
    //free.on("exit",function(code)
    //{
    //    console.log("spawn on exit");
    //});
};