/**
 * Created by ericjiang on 2016/2/17.
 */

var uid = require("node-uuid");
var log = require("./../LogTools.js");

exports.initTest = function ()
{
    var v1 = uid.v1();
    var v4 = uid.v4();
    log.debug("V1 === "+v1);
    log.debug("V2 === "+v4);

    var strV1 = uid.v1(new Date());
    log.debug(strV1);
}