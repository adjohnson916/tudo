var riot    = require('riot');
var Path    = require('path');
var auth_handler = require('./handlers/github_auth');

var routes = [
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './public'
            }
        }
    },
    {
        method: 'GET',
        path:'/issues',
        handler: require("./handlers/get-issues.js")
    },
    {
        method: 'GET',
        path:'/labels',
        handler: require("./handlers/LabelsCtrl.js").get
    },
    {
        method: 'POST',
        path:'/labels',
        handler: require("./handlers/LabelsCtrl.js").create
    },
    {
        method: 'PUT',
        path:'/labels',
        handler: require("./handlers/LabelsCtrl.js").update
    },
    {
        method: 'DELETE',
        path:'/labels/{name}',
        handler: require("./handlers/LabelsCtrl.js").remove
    },
    {
        method: 'GET',
        path:'/login',
        handler: auth_handler
    },
    {
        method: 'GET',
        path:'/home',
        handler: require("./handlers/home.js")
    },
    {
        method: 'GET',
        path:'/issues2',
        handler: require("./handlers/issue_page.js")
    }
    // {
    //     method: 'POST',
    //     path:'/main',
    //     handler: function (request, reply) {
    //         console.log(request.payload);
    //     }
    // }
];

module.exports = routes;
