/**
 * Created by ericjiang on 2016/2/18.
 */

var redisConfig = require("./config/redisConfig.json");
var redisModule = require("redis");
var log = require("./LogTools.js");

var redisCli  = function()
{
    log.debug("RedisClient.js <== Inside redisCli constructor");

    this.test = function (){};

    var dbInstance = redisModule.createClient(redisConfig.port,redisConfig.host,{auth_pass:redisConfig.authpass});
    if(dbInstance !== null)
    {
        dbInstance.select(redisConfig.db,function callBack(err,res)
        {
            if(err !== null)
            {
                log.error('Error occured at RedisClient.js [redisCli] ' + err);
            }
        });

        dbInstance.on("connect",function()
        {
            log.debug("connect successfully");
        });

        dbInstance.on("end",function()
        {
            log.debug("connection have been closed");
        });
    }

    this.updateValue = function(key,value,callBack)
    {
        console.log("inside updateValue");
    };

    this.getValue = function(key,cb)
    {
        log.debug("RedisClient.js [this.getValue]");
        if(dbInstance == null)
        {
            throw new Error("Please create new redisClient instance!");
        }
        //else if(dbInstance.ready_check())
        //{
        //    log.debug("ready_check() == true");
        //}
        else
        {
            dbInstance.get(key,function callBack(err,res)
            {
                if(err != null)
                {
                    log.error(err);
                }
                else
                {
                    cb(res);
                }
            });
        }
    };

    this.quit = function()
    {
        dbInstance.quit();
    };
};
module.exports = redisCli;