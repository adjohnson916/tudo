require('../lib/env.js');
var url = require('url');
var redisConfig = require('../lib/redis_config.js');
var redisURL = url.parse(process.env.TEST_REDISCLOUD_URL);


module.exports = function createClient () {
    var client = redisConfig(redisURL);
    return client;
}
