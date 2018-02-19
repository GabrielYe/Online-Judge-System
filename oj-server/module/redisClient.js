// Use Singleton design pattern
var redis = require('redis');
var client = redis.createClient();

// Set data
function set(key, value, callback) {
    client.set(key, value, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        callback(res);
    });
}

// Get data
function get(key, callback) {
    client.get(key, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        callback(res);
    });
}

// Set cache rule
function expire(key, timeInSeconds) {
    client.expire(key, timeInSeconds);
}

function quit() {
    client.quit();
}

module.exports = {
    set: set,
    get: get, 
    expire: expire,
    quit: quit,
    redisPrint: redis.print
}
