# DNS

The DNS system translates domain names (aka URL's) into IP addresses.

# Host Names, Domain Names, and FQDN's

Hostnames are human-readable nicknames given to machines (aka hosts). In the internet, hostnames are appended with DNS domains to form Domain Names. Hostnames and DNS domains are always separated with a dot `.`

Within the same network, hosts are only identified by their hostnames. 

Within two networks, hosts are identified by their Domain Names. 

If the domain name is completely specified, including a Top Level Domain of the internet (e.g. `.com`), then that domain name is called a Fully Qualified Domain Name (FQDN). E.g. `www.google.com` is a FQDN.

E.g. in the domain name `en.wikipedia.org`:

* `en` is the hostname
* `wikipedia.org` is the domain name
* `en.wikipedia.org` is the FQDN

# The Root

All urls actually end in a dot, so `www.google.com` is actually `www.google.com.`

That end dot represents the root of the internet's namespace.

When you first search for `www.google.com.` in your browser, your browser and your operating system will first determine if they know what IP address is already. It could be configured on your computer (hosts file) or it could be in memory (cache). 

The browser asks the OS if it knows what the IP address of the URL is, and if they both don't know, 

The Browser is configured to ask a Resolving Name Server (RNS) for IP addresses it does not know. The Resolving Name Server, aka Recursive Name Server is usually operated by your Internet Service Provider (ISP), but you can also use Public Servers, managed by Google or other orgs if your ISP is having issues.

The only thing that all Resolving Name Servers should know is where to find that final dot - aka The Root name servers. 

There are 13 sets of these Root Servers strategically placed around the world, and they are operated by 12 different organizations. 

The Root name servers won't know where to find that address, but in the above case, they'll direct the Resolving Name Server towards the `.com` name servers. 

The `com` Name Servers are called the Top Level Domain servers, aka TLD.

The Resolving Name Server then takes all of this information from the Root Name Servers, puts it in its Cache, and then goes directly to the `com` TLD name servers.

The TLD `com` Name Servers won't know where to find `www.google.com`, but they will direct the Resolving Name Server toward the `google.com` Name Servers. 

This next set of name servers are called the Authorative Name Servers.

So how do the `com` TLD Name Servers know which Authorative Name Servers to use? 

They know that because of the Domain's Registrar. 

When a domain is purchased (e.g. `google.com`), the Registrar is told which Authoratative Name Servers that domain should use. They notify the organisation responsible for the Top Level Domain - the Registry, and tell them to update the TLD Name Servers. 

The Resolving Name Server takes the response from the TLD Name Server, stores it in cache, and then queries the `google.com` Name Servers. At this point, the Authoratative Name Server will say, "Hey, I know where that is! Tell your browser to go to the IP Address 192.168.1.1"

The Resolve Name Server takes this information from the Authoratative Name Server, puts it in cache, and gives a reply to your computer's Operating System. 

The Operating System then gives this to the Browser, and the Browser then makes a connection to the IP address, requesting a webpage for `www.google.com`.

The reason the Resolving Name Server puts it in its cache is because if you query the same domain name again, it won't have to go through all those steps to get to you the IP Address.

You own computer will also cache the Domain Name to IP Address mapping to further save time. 

This usually works very well, but problems can arise if a website changes its IP Address, and the previous IP Address is saved to your computer's cache, or to the Resolving Name Server's cache. This will result in 404's.

# Clearing your DNS Cache

You can easily flush your DNS cache on your machine. Just run a Google search for the correct command - it depends on your Mac OS version. 

# Hosts File

A hosts file is a file that exists on every computer that maps domain names to IP Addresses. In the old days, that's how people would hack you. So if the IP Address of a site you're looking for changes, you can just make this change in the hosts file instead of waiting for the Resolving Name Servers, Root Name Servers, and Authoratative Name Servers to update, which could take several hours or more. 

On Mac and Linux, the hosts file is found at `/etc/hosts`.

# CNAME, A/AAAA Name, MX, etc

There are a large number of DNS records that can be created. Here is an incomplete list of the more popular ones:

* Host (A or AAAA)
* Alias (CNAME)
* Mail Exchanger (MX)
* Service Record (SRV)
* Start of Authority (SOA)
* Name Server (NS)
* Pointer (PTR)

## A Record and AAAA (Quad) Record

The A Record stores the IP Address for a DNS name.

E.g. if a client on the internet wants to know the IP Address of a DNS name (e.g. `example`), it would send the request to its DNS server. The DNS server would look to see if it had an `A Record` to match the name `example`. If it did, it would return the IP Address contained in that `A Record` to the client. 

In order to resolve computers and devices on your network, an `A Record` is required. Each device on a network requires an `A Record` in order for other devices on the network to obtain it's IP Address. 

`A Records` are used for IPv4 addresses
`AAAA Records` are used for IPv6 addresses

They do the same job, except they do it for different IP versions.

## CNAME or Alias Records

An Alias creates an alternative record (or alias) for another record. This is also referred to as a canonical name - hence CNAME.

An alias is a name that is easy to remember by humans that points to a machine's hostname. 

Having an alias means that if the IP address of the device you're trying to get to changes, the alias record would not need to be modified. 

Let's say we have an Alias/CNAME Record that is called `example` that points to a server called `s1`. 

If `s1` is taken down for maintenance and a second server `s2` is spun up in its place, the CNAME record just needs to be modified to point to `s2`.

That said, an approach like this does not take into account an IP Address being stored in the client's cache and using the old IP Address until the cache expires.

## MX Record (Mail Exchage)

An MX Record identifies a mail server for that DNS name.

E.g. if there's an MX Record for `mail.example.com`, then that address would point to a mail server that can process emails for this address.

There are multiple MX Records for the same DNS name. The MX Record with the lowest `priority` value is tried first. If there are 2 MX Records with the same priority value, the choice of MX Record will be random. 

The mail server that is used can be any Mail Server that knows how to deliver mail to the DNS name.

## Service Record (SRV)

A Service Record indicates the location of specific services. 

A Service Record contains data about the service, of which the main ones are:
    - Service (e.g. LDAP)
    - Target (Host the offers the service)
    - Port
    - Priority (Lower is preferred)

In most cases, Service Records are created automatically by the application that requires them. 

## Start Of Authority Record (SOA) 

For each Zone created in DNS, there is one SOA record associated with that Zone and ONLY ONE. This record contains information for the primary name server for that zone. 

The Primary Name Server is considered to be the DNS Server with the most authority for that Zone. It is also considered the most up to date server to answer queries about DNS records for that zone.

It also contains the email address for the administrator for that domain. 

## Name Servers (NS)

NS contain the Authoratative DNS server for that DNS name. 

Name Servers are considered to be the best source to answers for queries for that zone. 

Name Servers do not contain cached data for that zone, so it's always up to date.

## Pointer Record (PTR)

A Pointer Record contains a mapping between an IP Address and a Name. This is essentially the opposite of an A or AAAA Record. This means that given an IP Address, the name associate with that IP Address can be looked up. 

These records are used by reverse lookup tools.

Pointer Records are useful where you have an IP Address in a log file, and you want to identify which computer or device that IP Address came from. 
