#Deis Commands

	Deis -> Controller(EC2 Instance) -> Formation(Proxy + Runtime)

To set up the controller:

1. Log in to AWS Console
2. Navigate to Instances (LHS Menu)
3. Right-click on your controller and hit start, ok
4. Attach the elastic IP (if needed)
5. Login to deis: `deis login http://ben.deis.io`

##To create a formation:
`deis formations:create formationName --flavor=ec2-us-west-2`

This creates a formation, which is the "idea" of what you want. It sets up the layers, and is a precursor to actually deploying your proxy and runtime layers. Besides the controller, nothing here costs you money. A formation is the idea of a set of infrastructure.

##To scale a formation:
`deis nodes:scale formationName runtime=1`

This command goes ahead and creates the runtime layer. This does cost money.

This actually says how big my formation needs to be and what cloud resources it needs to have. CPU, Memory, where does it live. 

##To create an application via Deis

`deis create --formation=formationName`

This creates an application within the formation. An application in this context is the idea of your software, so essentially it's an empty shell.

##To push your application to your formation

`git push deis master`

Pushes your code to the application (via the controller).

##To open your application in a browser
`deis open`

##To find out more info
`deis info`

##To destroy a specific application
`deis destroy`

This destroys an application in your formation. 

##To set environment varibales
`deis config:set VAR_NAME=value`

##To see Deis logs for controller

`deis logs`

Gives you logs specific to the current applications.

Just to know how to do this manually…

	ssh -i ~/.ssh/deis-controller ubuntu@deis.bensapp.com
	sudo -i                  # become root
	tail -f /var/log/deis/*  # show logs

##End of the Day Protocol
Go into each repository that you're running an app out of on EC2 and type `deis destroy`.

This will destroy all of your apps, but it won't turn off your AWS Instance, which is the controller.

Then go to the `EC2 Management Console` >> `Instances`. The only thing that should be there is the `Deis Controller`. Right click it and hit `stop`.

You're done.



