#Deis Commands

	Deis -> Controller(EC2 Instance) -> Formation(Proxy + Runtime)

To set up the controller:

1. Log in to AWS Console
2. Navigate to Instances (LHS Menu)
3. Right-click on your controller and hit start, ok
4. Attach the elastic IP (if needed)
5. Login to deis: `deis login http://ben.deis.io`

##To create a formation:
`deis create --flavor=ec2-us-west-2`

This creates the "idea" of what you want. It sets up the layers, and is a precursor to actually deploying your proxy and runtime layers. Besides the controller, nothing here costs you money. A formation is the idea of a set of infrastructure.

##To scale a formation:
`deis layers:scale proxy=1 runtime=1`

This command goes ahead and creates the proxy and runtime layers. This does cost money.

This actually says how big my formation needs to be and what cloud resources it needs to have. CPU, Memory, where does it live. 

##To push your application to your formation
`git push deis master`

Pushes your application to the runtime layer. 

##To open your application in a browser
`deis open`

##To find out more info
`deis info`

##To destroy formations/nodes
`deis destroy`

##To set environment varibales
`deis config:set VAR_NAME=value`

##To see Deis logs for controller
	ssh -i ~/.ssh/deis-controller ubuntu@ben.deis.io
	sudo -i                  # become root
	tail -f /var/log/deis/*  # show logs


##End of the Day Protocol
Go into each repository that you're running an app out of on EC2 and type `deis destroy`.

This will kill all of your apps and destroy your formation, but it won't turn off your AWS Instance, which is the controller.

Then go to the `EC2 Management Console` >> `Instances`. The only thing that should be there is the `Deis Controller`. Right click it and hit `stop`.

You're done.



