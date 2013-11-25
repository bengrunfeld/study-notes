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

If you’d rather not use `manage.py`, no problem. Just set the `DJANGO_SETTINGS_MODULE` environment variable to `mysite.settings` and run `python` from the same directory `manage.py` is in (or ensure that directory is on the Python path, so that import mysite works).

Once you're in the shell, you can use the `Django API`.

	> from polls.models import Poll, Choice 
	> Poll.objects.all()
	# []
	> from django.utils import timezone
	> p = Poll(question="What's new?", pub_date=timezone.now())
	> p.save()
	> p.id
	# 1
	> p.question
	# What's new?
	> p.pub_date
	# datetime.datetime(2012, 2, 26, 13, 0, 0, 775217, tzinfo=<UTC>)
	> p.question = "What's up?"
	> p.save()
	> p.question
	# What's up?
	> Poll.objects.all()
	# [<Poll: Poll object>]

To make the `Poll.objects.all()` command print out something useful, add `__unicode__` methods to the `Poll` and `Choice` classes.

## Adding Classes to the Admin

1. To access the admin panel, run `$ python manage.py runserver`
2. In a web browser: ` http://127.0.0.1:8000/admin/`
3. Sign in with the super-user account your created
4. Open `appName/admin.py` and add the following code to add a class to the admin site

.

	from django.contrib import admin
	from polls.models import Poll
	
	admin.site.register(Poll)


## MVC Architecture

* The `model` consists of application data, business rules, logic, and functions (database). 

* A `view` can be any output representation of data, such as a chart or a diagram. Multiple views of the same data are possible. 

* The `controller` mediates input, converting it to commands for the model or view.

## Views in Django

In Django, web pages and other content are delivered by `views`. Each view is represented by a simple Python function (or method, in the case of class-based views). Django will choose a view by examining the URL that’s requested (to be precise, the part of the URL after the domain name).

### To create a view

Go to `polls/view.py` and enter in the following code:

	from django.http import HttpResponse
	
	def index(request):
	    return HttpResponse("Hello, world. You're at the poll index.")


To call the view, we need to map it to a URL - and for this we need a `URLconf`.

To create a `URLconf` in the `polls` directory, create a file called `urls.py`. Paste in:

	from django.conf.urls import patterns, url
	
	from polls import views
	
	urlpatterns = patterns('',
	    url(r'^$', views.index, name='index')
	)

The next step is to point the root `URLconf` at the `polls.urls` module. In `mysite/urls.py` insert an `include()`, leaving you with:

	from django.conf.urls import patterns, include, url
	
	from django.contrib import admin
	admin.autodiscover()
	
	urlpatterns = patterns('',
	    url(r'^polls/', include('polls.urls')),
	    url(r'^admin/', include(admin.site.urls)),
	)

You have now wired an `index view` into the `URLconf`. Go to `http://localhost:8000/polls/` to see the `view`.

The `url()` function is passed four arguments, two required: `regex` and `view`, and two optional: `kwargs`, and `name`.

When somebody requests a page from your Web site – say, `/polls/34/`, Django will load the `mysite.urls` Python module because it’s pointed to by the `ROOT_URLCONF` setting. It finds the variable named `urlpatterns` and traverses the regular expressions in order. The `include()` functions we are using simply reference other `URLconfs`. Note that the regular expressions for the `include()` functions don’t have a `$` (end-of-string match character) but rather a trailing slash. Whenever Django encounters `include()`, it chops off whatever part of the URL matched up to that point and sends the remaining string to the included `URLconf` for further processing.

The idea behind `include()` is to make it easy to plug-and-play URLs. Since `polls` are in their own `URLconf` `(polls/urls.py)`, they can be placed under `/polls/`, or under `/fun_polls/`, or under `/content/polls/`, or any other path root, and the app will still work.

### The role of views

Each view is responsible for doing one of two things: returning an `HttpResponse` object containing the content for the requested page, or raising an exception such as `Http404`. 

The `HttpResponse` can contain data from a database, a template, PDF's or XML data. It's up to you.

All Django wants is that `HttpResponse`. Or an `exception`.

## Creating Templates in Django

First, create a directory called `templates` in your `polls` directory. Django will look for templates in there.

## Adding Stylesheets and Javascript

Create a directory called `static` in your `polls` directory. Django will look for `static files` there, similarly to how Django finds templates inside `polls/templates/`.

