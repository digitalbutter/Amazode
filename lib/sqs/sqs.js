var Queue = require('./Queue.js').Queue;

exports.sqs = (function(){
    var that = {};

    that.getQueue = function(){
        var newQueue = new Queue;
        return newQueue;
    };

    return that;
})();