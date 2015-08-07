var test   = require('tape');
var server = require('../server');

test("closed client to give error when fetching issues", function(t) {
  var options = {
    method: "POST",
    url: "/home",
    payload: {
        "username-input": "dwyl-dummy"
    }
  };
  // server.inject lets us similate an http request
  server.inject(options, function (response) {
    t.equal(response.statusCode, 200, "home Page Rendered");
    t.end();
  });
});

test("clsoe server", function(t) {
  server.stop();
  t.end();
});
