/**
 * Created by ericjiang on 2016/2/1.
 */

var EventEmitter = require('events').EventEmitter;

exports.initTest = function ()
{
    var count=0;
    var event = new EventEmitter();

    event.on('someEventHappen',function onSomeEvent(){
        console.log('onSomeEvent');
    });

    console.log('Begin listening time out event:');
    setTimeout(function timeOut(){
        event.emit('someEventHappen');
    },1000);
}