#Heroku Cheat Sheet

Deploying to Heroku:

	$ git push heroku master
	
Scaling Dynos:

	$ heroku ps:scale web=3 queuty=2

To check what dynos are running which process types:

	$ heroku ps

To create a config var:

	$ heroku config:add ENCRYPTION_KEY= my_secret_launch_codes

To access a config var, simply call it programmatically:

	$ ENV["ENCRYPTION_KEY"]
	
To see the audit trail of release deploys:

	$ heroku releases
	
To rollback and deploy a previous release:

	$ heroku releases:rollback v102

Here’s the simplest way to create and attach to a one-off dyno:

	$ heroku run bash

To add an add-on:

	$ heroku addons:add redistogo:nano

To view your logs:

	$ heroku logs

To view the logs from a specific Dyno:

	$ heroku logs --ps web.1 --tail

