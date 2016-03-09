/**
 * Created by ericjiang on 2016/2/17.
 */
var log4jsConfig = require("./config/log4js.json");
var log4js = require("log4js");

log4js.configure(log4jsConfig);

var logFile = log4js.getLogger("log_file");
var logDate = log4js.getLogger("log_date");
var logConsole = log4js.getLogger("console");

exports.debug = function(message)
{
    if(message === null)
    {
        message = "";
    }
    logConsole.debug(message);
};

exports.info = function(message)
{
    if(message === null)
    {
        message = "";
    }
    logFile.info(message);
    logDate.info(message);
    logConsole.info(message);
};

exports.warn = function(message)
{
    if(message === null)
    {
        message = "";
    }
    logFile.warn(message);
    logDate.warn(message);
    logConsole.warn(message);
};

exports.error = function(message)
{
    if(message === null)
    {
        message = "";
    }
    logFile.error(message);
    logDate.error(message);
    logConsole.error(message);
};