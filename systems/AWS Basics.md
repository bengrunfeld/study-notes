# AWS Basics

## Ways of Accessing an AWS Instance

There are 6 main ways of accessing an AWS instance:

* AWS Management Console
* AWS CLI
* API's
* AWS SDK
* Third Party Tools
* AWS Mobile App

## AWS Regions and Availability Zones

AWS Regions are independant collections of Data Centers within a specific geographic area. Each AWS region is contained within the same country. 

Regions have 3 main attributes.

Region Name: US East
Location: North Virginia
Identified: us-east-1

AWS provides different API endpoints for each region. 

Regions are important for 2 main reasons:

1. You may need to keep the data of your app in a specific country for legal reasons. E.g. legal compliance on data storage
2. You may want to keep your app and its data as close to target users as possible

To find which Region has the lowest latency compared to your own location, go to [cloudping.info](http://cloudping.info) and hit `HTTP Ping`.

## Service Support Across Regions

Not all AWS services are bound by regions. IAM (Identity and Access Management) is available across all regions. 

All AWS regions were not created equal. Not all AWS services and products are available across all regions.

Check the official list to see what is offered where. [Products and Services by Region](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/). This list continuously changes.

## Availability Zones

AWS Regions are clusters of Availability Zones (AZ's). Availability Zones  are individual Data Centers inside of a particular cluster (Region). For some services (e.g. EC2), you have to choose a particular `AZ`.

Some Regions have more AZ's than others.

## AWS Availability Zone Destinations

The `Region` for Singapore is `ap-southeast-1`. To specific which `AZ` inside of that `Region` you want, choose the letter that comes at the end of it. The 2 `AZ's` in Singapores are:

* `ap-southeast-1a`
* `ap-southeast-1b`

Even thought the AZ's are seperate data centers, each AZ in a region is connected via high-speed connectivity. 

So you want to have parts of your app in one AZ and parts in another, so if some catastrophic event takes down a data center, your app can default over to another AZ which is still running.

## AWS Accounts

AWS Accounts are associated with an email address and a credit card number. Because the AWS account login has so much power (and risk), it's a good practice to never use these to log in, besides when absolutely necessary.

Rather, you should create Users via the AWS Identity and Access Managements (IAM) and only log in using these credentials.

You can have multiple AWS accounts for different purposes. Like for each team of application.

You can consolidate all these accounts into a single bill.

## Choosing AZ's on different accounts

AWS mixes up the AZ letters inside of regions for different accounts, so that 80% of people don't just choose `us-east-1a` because it is at the to of the list. By mixing up the letters re which data centers they point to, you force people to spread their apps evenly across multiple data centers. 
You actually have to contact Amazon to figure out what the actual geo for the AZ is, according to the letter ending for your particular account. Yeah.....

## AWS Shared Security Responsibility Model

There are some parts of security that AWS takes responsibility for and there are parts that they request you take responsibility for.

### AWS

* Physical data center security
* 

### You

* Security Groups
* ACL's
* Routing Policies
* Root administration power
* Backups

By default, all ports are closed. It's your job to open up certain ports to http access.










