/**
 * Created by ericjiang on 2016/1/6.
 */
var http = require('http');
var url = require('url');
var router = require('../router');
var routeContent = require('../routeContent');

exports.start = function start()
{
    http.createServer(function onHttpRequest(request,response){
        var pathName = url.parse(request.url).pathname;

        var content = new routeContent();
        router.route(pathName,content);
        if(content.status == false)
        {
            console.log(content.errorMsg);
        }
        console.log(pathName+':'+content.content);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content.content);
        response.end();
    }).listen(8080);
}