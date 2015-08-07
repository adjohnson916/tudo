var getIssues = require("../fetch_issues_by_user.js");
var pub       = require("../../lib/redis_clients").pub;
var riot      = require("riot");
var view      = require("../../views");
var Boom      = require("boom");

module.exports = function homeHandler (request, reply) {
    var username = request.payload["username-input"];
    getIssues(pub, username , function (err, data) {
        if (err) {
            Boom.badRequest('could not find issues', err)
        }
        var issueData = {
            header: username,
            category: 'assigned',
            issues: data
        };
        var home = riot.render(view.homeContainer, issueData);
        reply(view.header + home + view.footer)
    })
}
