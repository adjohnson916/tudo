<issue-page-container>
	<div>

		<issue-title title={opts.title}/>

		<nav-issue issue_number={opts.issue_number} org_repo={opts.org_repo}/>

		<issue-info-container username={opts.username} time={opts.time} labels={opts.labels}/>

		<issue-description body={opts.body}/>

		<latest-comment user={opts.user} comment_body={opts.comment_body}/>

	</div>
</issue-page-container>