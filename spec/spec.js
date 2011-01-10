var vows = require('vows')
        ,assert = require('assert');

var util = require('util');

var amazode = require('amazode');
var sqs = amazode.sqs;

vows.describe('Account Initialization').addBatch({
    'SetAccessKey':{
        topic: function(){
            amazode.setAccountKey("I'm the key id","I'm the secret key");
            return true;
        },
        'Should set the account object': function(){
            assert.equal(amazode.account.getId(),"I'm the key id");
            assert.equal(amazode.account.getKey(),"I'm the secret key");
        }
    },
    'Initialize queue':{
        topic: function(){
            return sqs.getQueue();
        },
        'Is instance of Queue': function(queue){
            assert.instanceOf(queue,sqs.Queue)
        }
    }
}).export(module);