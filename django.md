# Django


## Check Version

To check if you have **Django** installed:

	python -c "import django; print(django.get_version())"


## Create Project

From the command line, `cd` into a directory where you’d like to store your code, then run:

	django-admin.py startproject mysite

where `mysite` can be changed to the name of your project.


## Run a development server

Change into the outer mysite directory and run the command:

	python manage.py runserver

You can now visit your project at the URL provided, which is usually `http://127.0.0.1:8000/`

## Changing the port

By default, the `runserver` command starts the development server on the internal IP at port `8000`.

If you want to change the server’s port, pass it as a command-line argument. For instance, this command starts the server on port `8080`:

	python manage.py runserver 8080

If you want to change the server’s IP, pass it along with the port. So to listen on all public IPs (useful if you want to show off your work on other computers), use:

	python manage.py runserver 0.0.0.0:8000

You don’t need to restart the server for code changes to take effect. However, some actions like adding files or compiling translation files don’t trigger a restart, so you’ll have to restart the server in these cases.

## Database Setup

To choose which database you'll use, edit the `mysite/settings.py` file. You'll need to change 2 settings: `ENGINE` and `NAME`

`ENGINE` is the type of database you're using (e.g. sqlite3, postgres, oracle, etc) and `NAME` is the name of your database.

If you are not using SQLite as your database, additional settings such as `USER`, `PASSWORD`, `HOST` must be added. 

`ENGINE` can be set to: 

	django.db.backends.sqlite3 
	django.db.backends.postgresql_psycopg2
	django.db.backends.mysql
	django.db.backends.oracle 

Other backends are also available.

## Syncing the Database to the Django Installation

Some of the applications we installed (`INSTALLED_APPS`) in `mysite/settings.py` makes use of at least one database table, so we need to create the tables in the database before we can use them. To do that, run the following command:

	$ python manage.py syncdb

## Accessing the Database

Use the following command to access the command line for the database you synced to.

	$ python manage.py dbshell

## Creating Models

Each application you write in Django consists of a Python package that follows a certain convention. Django comes with a utility that automatically generates the basic directory structure of an app, so you can focus on writing code rather than creating directories.

### Projects vs. apps

What’s the difference between a project and an app? An app is a Web application that does something – e.g., a Weblog system, a database of public records or a simple poll app. A project is a collection of configuration and apps for a particular Web site. A project can contain multiple apps. An app can be in multiple projects.

### Creating your app

To create your app, make sure you’re in the same directory as `manage.py` and type this command:

	$ python manage.py startapp polls

### Create your model

Go into the directory you just created with `cd polls` and then edit `models.py` by inserting the following code:

	from django.db import models
	
	class Poll(models.Model):
	    question = models.CharField(max_length=200)
	    pub_date = models.DateTimeField('date published')
	
	class Choice(models.Model):
	    poll = models.ForeignKey(Poll)
	    choice_text = models.CharField(max_length=200)
	    votes = models.IntegerField(default=0)

This created 2 models: `Poll` and `Choice`

Django supports all the common database relationships: `many-to-ones`, `many-to-manys` and `one-to-ones`.

### Activating models

That small bit of model code gives Django a lot of information. With it, Django is able to:

* Create a database schema (`CREATE TABLE` statements) for this app.
* Create a `Python database-access API` for accessing `Poll` and `Choice` objects.

But first we need to tell our project that the polls app is installed.

Django apps are “pluggable”: You can use an app in multiple projects, and you can distribute apps, because they don’t have to be tied to a given Django installation.

Edit `mysite/settings.py` and add `'polls'` to `INSTALLED_APPS`. So it should look like this:

	INSTALLED_APPS = (
	    'django.contrib.admin',
	    'django.contrib.auth',
	    'django.contrib.contenttypes',
	    'django.contrib.sessions',
	    'django.contrib.messages',
	    'django.contrib.staticfiles',
	    'polls',
	)

Now Django knows to include the polls app.

### Running the activation script

To activate the Polls model, run the following command:

	$ python manage.py sql polls

**The sql command doesn’t actually run the SQL in your database!** - it just prints a schema to the screen so that you can see what SQL Django thinks is required. If you wanted to, you could copy and paste this SQL into your database prompt. However, as we will see shortly, Django provides an easier way of committing the SQL to the database.

### Additional SQL Commands

If you’re interested, also run the following commands:

* `python manage.py validate` – Checks for any errors in the construction of your models.
* `python manage.py sqlcustom polls` – Outputs any custom SQL statements (such as table modifications or constraints) that are defined for the application.
* `python manage.py sqlclear polls` – Outputs the necessary DROP TABLE statements for this app, according to which tables already exist in your database (if any).
* `python manage.py sqlindexes polls` – Outputs the `CREATE INDEX` statements for this app.
* `python manage.py sqlall polls` – A combination of all the SQL from the `sql`, `sqlcustom`, and `sqlindexes` commands.

Now, run `syncdb` again to create those model tables in your database:

	$ python manage.py syncdb

The `syncdb` command runs the SQL from `sqlall` on your database for all apps in `INSTALLED_APPS` that don’t already exist in your database. This creates all the tables, initial data and indexes for any apps you’ve added to your project since the last time you ran `syncdb`. `syncdb` can be called as often as you like, and it will only ever create the tables that don’t exist.

## Using the Django API

Access the Django API from the command line with:
	
	$ python manage.py shell

We’re using this instead of simply typing `python`, because `manage.py` sets the `DJANGO_SETTINGS_MODULE` environment variable, which gives Django the Python import path to your `mysite/settings.py` file.


