/**
 * Created by ericjiang on 2016/2/18.
 */
var log = require("../LogTools.js");
var redisDB = require("../RedisClient.js");

var redisCli = new redisDB();
exports.initTest = function()
{
    log.debug("redis client test");

    redisCli.getValue("guid",function(res)
    {
        log.debug("guid : " + res);
        redisCli.quit();
    });
};