# Ruby on Rails

Created in 2003 by David Heinemeier Hansson (aka DHH). Released as Open Source in 2004.

## Convention over Configuration

Only specify the things that need to be changed.

## Rehashing

Whenever you make changes to Ruby, make sure you rehash

    rbenv rehash

## RubyGems

See all available gems at `RubyGems.org`

    gem -v
    gem list            # lists all installed gems

## Bundle

Bundler is a tool that helps your rails application to load the right ruby gems.

Bundler insures that your Rails app is using the correct version of a specified gem.

Rails depends on bundler to manage the RubyGems that our application uses.

    gem install bundler
    rbenv rehash
    bundle -v

Bundler cares about two files - `Gemfile` and `Gemfile.lock`.

`Gemfile` contains configuration information, as well as a list of all the `gems` that our project wants to load.

Each `gem` may also have other `gems` that they depend upon. Bundler is going to sort all of those out for us, and create a dependency tree. After Bundler creates that list, or manifest, it's going to store it in `Gemfile.lock`

`Gemfile.lock` has the following format: the gem and its version, followed by all of the things that it depends on.

You never want to edit `Gemfile.lock` directly. Instead, edit `Gemfile` and then run `bundle install`.

Sometimes you'll try to run a command like `rake db:migrate` and it won't work. Try to prefix the command with `bundle exec`. E.g. `bundle exec rake db:migrate`.

What that's essentially doing is saying, "in the context of this bundle of gems that go with this project try this command". 

## Rails installation

    gem install rails --no-ri --no-rdoc --version 4.0.0
    rbenv rehash

Flags prevent large documentation from being downloaded as well.

## MySQL

    mysql -uroot
    mysql.server start/stop         # starts and stops mysql server
    mysql -u root                   # logs in to mysql
    mysql -u root password          # update password

## Create a new rails app

If you don't specify mysql, then rails will default to sqlite.

    rails new rails_app -d mysql

## Accessing a Project

### Start web server

Both of these are the same: 

    rails server
    rails s

## Creating a controller and a view

The bare minimum that a Rails application needs to operate is a `Controller` and a `View`.

From the command line, Rails can generate a lot of things for us, like Controllers and Views. 

    rails generate controller demo index

So with this command, Rails will generate a new controller called demo, and then any arguments after demo will be considered its views.

Methods inside of Controllers are called `actions`, because they are the actions we are asking the Controller to perform.


