var fs = require('fs');

module.exports = {
  header : fs.readFileSync(__dirname +'/layout_header.html', 'utf8'),
  footer : fs.readFileSync(__dirname +'/layout_footer.html', 'utf8'),
  login  : require(__dirname +'/tags/login.tag'),
  categories  : require(__dirname +'/tags/home/categories.tag'),
  nav  : require(__dirname +'/tags/home/nav.tag'),
  issue  : require(__dirname +'/tags/home/issue.tag'),
  issueList  : require(__dirname +'/tags/home/issues_list.tag'),
  homeContainer  : require(__dirname +'/tags/home/container_home.tag'),

  nav_issue: require(__dirname + '/tags/issue/nav_issue.tag'),
  issue_title: require(__dirname + '/tags/issue/issue_title.tag'),
  created_by: require(__dirname + '/tags/issue/created_by.tag'),
  creation_time: require(__dirname + '/tags/issue/creation_time.tag'),
  labels: require(__dirname + '/tags/issue/labels.tag'),
  issue_info_container: require(__dirname + '/tags/issue/issue_info_container.tag'),
  issue_description: require(__dirname + '/tags/issue/issue_description.tag'),
  latest_comment: require(__dirname + '/tags/issue/latest_comment.tag'),
  issue_page_container: require(__dirname + '/tags/issue/issue_page_container.tag'),
}
