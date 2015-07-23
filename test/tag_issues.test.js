var riot = require('riot');
var test = require('tape');
var tag = require('../views');
var cheerio = require('cheerio');


test('Testing nav-issue tag', function (t) {

  var mock = {
    issue_number: '#15',
    org_repo: 'dwyl components'
  };

  var nav_issue = riot.render(tag.nav_issue, mock);
  var $ = cheerio.load(nav_issue);
  t.equal('Issue #15', $('h2').text(), 'nav issue displays header');
  t.equal('dwyl components', $('p').text(), 'nav issue contains repo name');

  t.end();
});

test('Testing issue-title tag', function (t) {
  var mockHeader = {
    title: 'Test Title'
  };

  var title = riot.render(tag.issue_title, mockHeader);
  var $ = cheerio.load(title);
  t.equal('Test Title', $('h2').text(), 'Issue title tag works');

  t.end();
});

test('Testing created_by tag', function (t) {
  var mockHeader = {
    username: 'test user'
  };

  var user = riot.render(tag.created_by, mockHeader);
  var $ = cheerio.load(user);
  t.equal('created by test user', $('p').text(), 'created_by tag works');

  t.end();
});

test('Test creation_time tag', function (t) {
  var mockHeader = {
    time: '14:39, 23th Jul5 2014'
  };
  var time = riot.render(tag.creation_time, mockHeader);
  var $ = cheerio.load(time);
  t.equal('14:39, 23th Jul5 2014', $('p').text(), 'creation_time tag works')

  t.end();
})

test('Testing labels tag', function (t) {
  var mockHeader = {
    labels: [
      {
        user: "Lorum ipsum "
      },
      {
        comment: "Test label"
      }
     ]
  };

  var labels = riot.render(tag.labels, mockHeader);
  var $ = cheerio.load(labels);
  t.equal(2, $('p').length, 'labels tag works');
  t.end();
});

test('issue_info_container container test', function (t) {
  var mock = {
    username: 'test user',
    labels: [
    {
      name: "Lorum ipsum "
    },
    {
      name: "Test label"
    }
   ],
   time: '14:39, 23th Jul5 2014'
  };
  var issue_info_container = riot.render(tag.issue_info_container, mock);
  var $ = cheerio.load(issue_info_container);
  t.equal(2, $('labels p').length, 'labels tag works');
  t.end()
})

test('Test issue_description tag', function (t) {
  var mockHeader = {
    body: 'Lorum ipsum'
  };
  var description = riot.render(tag.issue_description, mockHeader);
  var $ = cheerio.load(description);
  t.equal('Lorum ipsum', $('p').text(), 'issue_description tag works')

  t.end();
})

test('latest comment test', function (t) {
  var mock = {
    user: "test user",
    body: "test body"
  };
  var latest_comment = riot.render(tag.latest_comment, mock);
  var $ = cheerio.load(latest_comment);
  t.equal('test user', $('p').text(), 'latest comment tag works')
  t.end()
})

test('Test issue_page_container tag', function (t) {
  var mock = {
    issue_number: '#15',
    org_repo: 'dwyl components',
    title: 'Test Title',
    username: 'test user',
    labels: [
    {
      name: "Lorum ipsum "
    },
    {
      name: "Test label"
    }
   ],
   time: '14:39, 23th Jul5 2014',
    body: 'Lorum ipsum',
    user: "test user",
    comment_body: "test body"
  };
  var issue_page_container = riot.render(tag.issue_page_container, mock);
  var $ = cheerio.load(issue_page_container);
  console.log(issue_page_container)
  t.equal('Test Title', $('h2[name="title"]').text(), 'issue_description tag works')
  t.equal(2, $('labels p').length, 'labels tag works');
  t.end();
})