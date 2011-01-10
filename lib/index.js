var account = require('./base/account.js').account;

exports.account = account;
exports.setAccountKey = account.setAccountKey;

var sqs = require('./sqs/sqs.js').sqs;
sqs.Queue = require('./sqs/Queue.js').Queue;

exports.sqs = sqs;