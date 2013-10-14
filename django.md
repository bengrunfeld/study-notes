#Django

To check if you have **Django** installed:

	python -c "import django; print(django.get_version())"

From the command line, `cd` into a directory where you’d like to store your code, then run:

	django-admin.py startproject mysite

where `mysite` can be changed to the name of your project.

This will create a `mysite` directory in your current directory.

##The development server

Change into the outer mysite directory and run the command:

	python manage.py runserver

You can now visit your project at the URL provided, which is usually `http://127.0.0.1:8000/`

##Changing the port

By default, the `runserver` command starts the development server on the internal IP at port `8000`.

If you want to change the server’s port, pass it as a command-line argument. For instance, this command starts the server on port `8080`:

	python manage.py runserver 8080

If you want to change the server’s IP, pass it along with the port. So to listen on all public IPs (useful if you want to show off your work on other computers), use:

	python manage.py runserver 0.0.0.0:8000

You don’t need to restart the server for code changes to take effect. However, some actions like adding files or compiling translation files don’t trigger a restart, so you’ll have to restart the server in these cases.

