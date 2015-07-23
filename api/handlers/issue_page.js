var riot = require('riot');
var views = require('../../views');

function auth_handler (request, reply) {
	  var mock = {
	    issue_number: '#15',
	    org_repo: 'dwyl components',
	    title: 'Test Title',
	    username: 'test user',
	    labels: [
	    {
	      name: "label name "
	    },
	    {
	      name: "label name 2"
	    }
	   ],
	   time: '14:39, 23th Jul5 2014',
	   body: 'Description',
	   user: "latest comment user",
	   comment_body: "latest comment body"
	  };
	var body = riot.render(views.issue_page_container, mock)
	reply(views.header + body + views.footer);
}

module.exports = auth_handler;