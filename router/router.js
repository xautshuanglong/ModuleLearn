/**
 * Created by ericjiang on 2016/1/6.
 */

var mapTabel = {};

exports.route = function(pathName,content){
    if(typeof mapTabel[pathName] === 'function')
    {
        content.content = mapTabel[pathName]();
        content.status = true;
    }
    else
    {
        content.status = false;
        content.errorMsg = "not found the handler!";
        content.content = "404 Not Found";
    }
}

exports.start = function(){
    return 'router.start';
}

exports.upload = function(){
    return 'router.upload';
}

exports.favoriteIcon = function(){
    return 'router.favoriteIcon';
}

mapTabel["/"] = exports.start;
mapTabel["/start"] = exports.start;
mapTabel["/upload"] = exports.upload;
mapTabel["/favicon.ico"] = exports.favoriteIcon;