exports.account = (function(){
    var that = {};

    //Private variables
    var _id = "", _key = "";

    //Public properties
    that.getId = function(){ return _id };
    that.getKey = function(){ return _key};

    //Public functions
    that.setAccountKey = function(id, key){
        _id = id;
        _key = key;
    };

    return that;
})();