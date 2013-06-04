#Vagrant
#Vagrant
##Initializing a Directory
To initialize a directory with Vagrant, use:

	mkdir someDir
	cd someDir
	vagrant init
#Vagrant
This will create a `Vagrantfile` that you can use to configure the environment.

FYI, you need to install VirtualBox to be able to use Vagrant.

Vagrant syncs your project directory on your machine with the /vagrant directory on the guest machine. It is a 2-way sync, so anything you do in the one, you'll see in the other.

