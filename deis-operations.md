# Operations – Chef + AWS

What we're going to do is tear down our controller in Chef and then destroy all our assets in EC2, then set it all up again.

##Opscode Console
1. Go to `Nodes` and delete everything (**DO NOT DELETE `VALIDATOR`**)
2. Go to `Databags` and delete everything
3. Go to `Clients` and delete everything **BESIDES THE `VALIDATOR`. DON'T DELETE THE `VALIDATOR`!!!**

That's it!

##EC2 Console
1. Go through the EC2 Console Dashboard and delete everything related to that controller, besides the `default security group` which cannot be deleted.

##Terminal
1. Go to your local Deis master repo (`cd deis`) and ensure that it's up to date with a `git pull --rebase`.
2. Run `bundle install` to make sure your Knife client is up to date.
3. Run `berks upload --force` to update your cookbooks.
4. Run `rm ~/.ssh/deis-controller` to delete the public key that is now invalid because you destroyed your old controller.
5. Run `./contrib/ec2/provision-ec2-controller.sh us-west-2` to set up your instance on the cloud of your choice (in this case **EC2-us-west-2**).

##Opscode Console
1. Go to `Groups` and click on `Admins -> Edit`.
2. Check the box next to `deis-controller` and then hit `Save Group`.

##Terminal
1. Run `rm -rf ~/.deis` in order to delete old cookies to prevent future errors.
2. Go into the virtual environment with `source venv/bin/activate` (I have an Alias for this which is just `venv`).
3. Run `pip install -M -r de` updates all the Python packages utilized by Deis.
4. Run `deis register http://deis.bensapp.com`
5. Create a formation with `deis formations:create dev --flavor=ec2-us-west-2`
6. Scale the runtime layer of that formation with `deis nodes:scale runtime=1`
7. Run `deis nodes dev` for which you'll get the following

.

	=== dev Nodes
	dev-runtime-1 i-06c87c32 ec2-54-201-24-240.us-west-2.compute.amazonaws.com

8. Run `deis nodes:info dev-runtime-1`
9. Grab `"fqdn": "ec2-54-201-24-240.us-west-2.compute.amazonaws.com"` and from it copy `54-201-24-240`

##EC2 Console
1. Go to **Route53** and then go to `proxy.bensapp.com` and change the value to the IP address you copies, which in this case was `54.201.24.240`. Just remember to change dashes to dots for the IP address.

##Terminal
1. Run `deis formations:update dev --domain=bensapp.com` to enable multiple apps on one formation.







