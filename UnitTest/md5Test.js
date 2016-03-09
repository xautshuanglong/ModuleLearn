/**
 * Created by ericjiang on 2016/2/17.
 */
var MD5 = require("md5");
var log = require("./../LogTools.js");

exports.initTest = function () {
    var msg = 1;
    log.debug("md5 test");
    log.debug(MD5("1"));
    log.debug(typeof (MD5("1")));
    log.debug(MD5(msg.toString()));
    log.debug(MD5(""));
}