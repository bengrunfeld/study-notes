#Foreman

Foreman has the advantage of letting you select a different environment file, or even multiple files, at launch: `foreman -e alternate_env start`

Local environment variables with Foreman should be put in a `.env` file. 

Foreman will then ensure the variables are set, before starting up the processes specified in your Procfile. 

Here’s a sample `.env` file:

	S3_KEY=mykey
	S3_SECRET=mysecret

Foreman also lets you easily run a single one-off command locally. For example: `foreman run rails console`. This is analogous to Heroku’s one-off dynos.

When using this approach, add your environment files to `.gitignore`.

