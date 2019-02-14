# Chef Fundamentals

These notes are intended for use with Amazon Web Services (AWS).

## 1. Install Chef on your local workstation

Download the Chef Development Kit (Chef DK): [https://downloads.chef.io/chef-dk/](https://downloads.chef.io/chef-dk/)

To install Chef on your workstation, regardless of OS. This command will work on Windows or Mac.

    chef gem install knife-windows --no-ri --no-rdoc -V

## 2. Download the Starter Kit

Every time you download a new Starter Kit, you get a
new authentication certificate, invalidating the old one, so
you have to use the NEW .pem files, NOT the old .pem
files 

## 3. Set up your AWS Instance

* Go to [console.aws.amazon.com](https://console.aws.amazon.com). 
* Create a new instance
* Download the PEM file
* Save the file locally to `~/.ssh` and `chmod 400` the pem file

## 4. Bootstrap the Node

**Linux** 

    knife bootstrap ec2-54-86-66-1.compute-1.amazonaws.com -x ec2-user --identity-file ~/.ssh/ben-rhel-1.pem --sudo
    
**Windows**

Docs about this issue: [https://learn.chef.io/manage-a-node/windows/bootstrap-your-node/](https://learn.chef.io/manage-a-node/windows/bootstrap-your-node/)

**WARNING: YOU MAY NOT NEED TO DO STEPS 1 & 2. TEST WITHOUT IT!**
With Windows, `WinRM` is not installed by default, so you need to install and configure it.

### 1. Go to the App Store (Mac) and Download MS RDP

[https://itunes.apple.com/us/app/microsoft-remote-desktop/id715768417?mt=12](https://itunes.apple.com/us/app/microsoft-remote-desktop/id715768417?mt=12)

### 2. Connect to Windows Instance via RDP

You don't need to use the PEM.

1. Add new `+`
2. Name your connection - e.g. EC2 Windows Server 2008 R2
3. For PC Name, use the Public DNS
4. User name is `administrator`
5. For password, go to your AMI Instance, right click on it, and click `Get Windows Password`
6. Close the window
7. Click `Start`

### 3. Now run the following command in your Mac Terminal

    knife bootstrap windows winrm {{address}} --winrm-user {{user}} --winrm-password '{{password}}' --node-name node1 --run-list 'recipe[learn_chef_iis]'

> If you really need to download WinRM on a remote machine, RDP into the remote machine, open `cmd.exe` and then paste in the following (long ass) command - `winrm quickconfig -q & winrm set winrm/config/winrs @{MaxMemoryPerShellMB="300"} & winrm set winrm/config @{MaxTimeoutms="1800000"} & winrm set winrm/config/service @{AllowUnencrypted="true"} & winrm set winrm/config/service/auth @{Basic="true"}`

### 4. Check that it all worked

1. Go to [manage.chef.io](https://manage.chef.io/) and check that your node showed up in your Organization
2. Check if you node shows up in the command line with `knife node list`

And that's it!

## On AWS, Use `sudo`

You'll need to use `sudo` to edit files like `/etc/chef/client.rb` and `chef-client`

## Converging

Convergance means ....

To converget the node with the Chef server, use:

    chef-client

But because of permissions issues noted above, you'll need to use:

    sudo chef-client





