#Networking Terminology

* **TCP/IP** – Transmission Control Protocol
* **IP** – Internet Protocol
* **UDP** – User Datagram Protocol
* **BIND** – Berkeley Internet Name Domain. Name server software.
* **dhcpd** – Dynamic Host Configuration Protocol Daemon
* **NAPs** – Network Access Points (backbone points).
* **Protocols** are formal rules of behavior.
* **protocol stack** – seven layers that define the functions of data communications protocols.
* **Peers** – A `peer` is an implementation of the same protocol in the equivalent layer on a remote system.
* **Internet Protocol** `IP` – isolates the upper layer protocols from the underlying network and handles the addressing and delivery of data. It is usually described as `TCP/IP`’s Network Layer. IP provides the basic packet delivery service on which TCP/IP networks are built.
* **Header** – control information that is placed in front of the data to be transmitted.
* **encapsulation** – The addition of delivery information at every layer of the `protocol stack`.
* **packet** – is a block of data that carries with it the information necessary to deliver it, similar to a postal letter, which has an address written on it.
* A **packet-switching network** – uses the addressing information in the packets to switch packets from one physical network to another, moving them toward their final destination. Each packet travels the network independently of any other packet.
* **Datagram** – the packet format defined by the Internet Protocol.
* **Gateways** – devices that switch packets between the different physical networks (i.e. if transfering data to a destination NOT on the local network). **Gateways** forward packets between networks, and hosts don’t.
* **Internet gateways** – are commonly (and perhaps more accurately) referred to as **IP routers** because they use Internet Protocol to route packets between networks.
* **Routing** – Deciding which gateway to use.
* **Internet Control Message Protocol (ICMP)** – is part of the Internet Layer and uses the IP datagram delivery facility to send its messages.
* **Segment** – The unit of data exchanged between cooperating TCP modules.
* **Telnet** – The Network Terminal Protocol, which provides remote login over the network.* **FTP** – The File Transfer Protocol, which is used for interactive file transfer.* **SMTP** – The Simple Mail Transfer Protocol, which delivers electronic mail.* **HTTP** – The Hypertext Transfer Protocol, which delivers web pages over the network.
* **Domain Name System (DNS)** – Also called *name service*, this application maps IP addresses to the names assigned to network devices.* **Open Shortest Path First (OSPF)** – Routing is central to the way TCP/IP works. OSPF is used by network devices to exchange routing information. * **Network File System (NFS)** – This protocol allows files to be shared by various hosts on the network.
* **Addressing** – IP addresses, which uniquely identify every host on the network, deliver data to the correct host.* **Routing** – Gateways deliver data to the correct network.* **Multiplexing** – is combining many sources of data into a single data stream. Protocol and port numbers deliver data to the correct software module within the host. 
* **IP Address** – An IP address is a 32-bit value that uniquely identifies every device attached to a TCP/IP network. Each of the four numbers in the IP address is in the range 0–255 (the decimal values possible in a single byte). 
* **host addresses** – Another name for IP Addresses
* **CIDR** – The use of an address mask instead of the old address classes to determine the destination network is called Classless Inter-Domain Routing (CIDR).
* **AS** – Autonomous System. An autonomous system is not merely an independent network. It is a collection of networks and gateways with its own inter- nal mechanism for collecting routing information and passing it to other indepen- dent network systems.
* **reachability information** – The routing information passed to the other network systems is called reachability information. It simply says which networks can be reached through that autonomous system.
* **Routing Domains** – The new routing model is based on co-equal collections of autonomous systems called routing domains. Routing domains exchange routing information with other domains using **Border Gateway Protocol (BGP)**.
* **Routing Table** – aka forwarding table. The routing table maps destinations to the router and network interface that IP must use to reach that destination.
* **Address Resolution Protocol (ARP)** – translates IP addresses to Ethernet addresses.
* **Remote Procedure Call (RPC)** – ?
* **Port Number** – A Port Number is the identification number used by the transport protocol to identify an application process.
* **Socket** – is the combination of an IP address and a port number. A socket uniquely identifies a single network process within the entire Internet.
* **(ccTLD)** – country code top-level domain. Geographic domains have been set aside for each country in the world and are identified by a two-letter country code. (e.g. .il, .uk, .jp)
* **(gTLDs)** – generic top-level domains or general-purpose top-level domains. These are organizational gTLD's, and differ from geographical TLD's.
* **(ICANN)** – Internet Corporation for Assigned Names and Numbers, a nonprofit organization that was formed to take over the responsibility for allocating domain names and IP addresses.
* **Name Server (NS) Record** – is the DNS database record that points to the name servers for a domain.
* **A (address) record** – ??? a record of the IP address of a specific hostname (aka domain name).
*  **fully qualified domain name (FQDN)** – starts with a specific host and ends with a top-level domain. `rodent.example.com` is the **FQDN** of workstation `rodent`, in the `example` domain, of the `com` domain.
* **Master Server** – The master server (also called the primary server) is the server from which all data about a domain is derived. Master servers are authoritative, meaning they have complete information about their domain and their responses are always accurate.
* **Slave Server** – Slave servers (also known as secondary servers) transfer the entire domain database from the master server.
* **Caching-Only Server** – Caching-only servers get the answers to all name service queries from other name servers. Once a caching server has received an answer to a query, it caches the information and will use it in the future to answer queries itself. Caching servers are non-authoritative, meaning that their information is second-hand and incomplete, though usually accurate.
* **Zone File** – A particular domain’s database file is called a zone file. 
* **zone file transfer** – the action of copying a zone file to a slave server is called a zone file transfer.
* **Network Information System (NIS)** – is an administrative database system that provides central control and automatic dissemination of important administrative files. NIS can be used in conjunction with DNS or as an alternative to it.
* **NIS Maps** – NIS converts several standard Unix files into databases that can be queried over the network. These are called NIS Maps.
* **Simple Mail Transfer Protocol (SMTP)** – SMTP is the TCP/IP mail delivery protocol. It moves mail across the Internet and across your local network. 
* **Post Office Protocol (POP)** – The POP protocols verify the user’s login name and password and move the user’s mail from the server to the user’s local mail reader.
* **Internet Message Access Protocol (IMAP)** – provides the same basic service as POP and adds features to support the ability to read individual mail messages on a client or directly on the server while keeping the mailboxes on both systems completely up to date.
* **Multipurpose Internet Mail Extensions (MIME)** – MIME addresses two weaknesses of traditional SMTP by defining encoding techniques for carrying various forms of data and by defining a structure for the message body that allows multiple objects to be carried in a single message.
* **Extended SMTP (ESMTP)** – SMTP implementations that support the `EHLO` command are called Extended SMTP (ESMTP).
* **File Sharing** – Through file sharing, users and programs access files located on remote systems as if they were local files. This does not mean transfering the files to your local computer.
* **NetBIOS/Server Message Block (SMB)** – is a TCP/IP protocol for file sharing for Windows systems. A variant of this, **Samba**, allows Unix systems to run as file and print servers for Windows systems.
* **Network File System (NFS)** – For file sharing between Unix systems, you will probably use NFS, though it is designed primarily for LAN applications.
* **Configuration Servers** – Configuration servers make it possible for the network administrator to control TCP/IP configuration from a central point.
* **ARP** – Address Resolution Protocol. ARP translates IP addresses to Ethernet addresses.
* **RARP** – is a protocol that converts a physical network address into an IP address, which is the reverse of what **Address Resolution Protocol (ARP)** does.
* 



## Names and Addresses
The Internet Protocol document defines names, addresses, and routes as follows:
> A name indicates what we seek.<br> > An address indicates where it is.<br> > A route indicates how to get there.

A name (called a hostname) can be assigned to any device that has an IP address.

##Differences in Terminology

Applications using **TCP** refer to data as a `stream`, while applications using **UDP** refer to data as a message. **TCP** calls data a `segment`, and **UDP** calls its data a `packet`. The **Internet layer** views all data as blocks called `datagrams`.

Most networks refer to transmitted data as `packets` or `frames`.


##The OSI Reference Model 

7 – **Application Layer** consists of application programs that use the network.

6 – **Presentation Layer** standardizes data presentation to the applications.￼5 – **Session Layer** manages sessions between applications.￼4 – **Transport Layer** provides end-to-end error detection and correction.￼3 – **Network Layer** manages connections across the network for the upper layers.
2 – **Data Link Layer** provi
des reliable data delivery across the physical link.
￼1 – **Physical Layer** defines the physical characteristics of the network media.
##TCP/IP Protocol Architecture

￼4 – **Application Layer** consists of applications and processes that use the network.
￼3 – **Host-to-Host Transport Layer** provides end-to-end data delivery services.
￼2 – **Internet Layer** defines the datagram and handles the routing of data.
￼1 – **Network Access Layer** consists of routines for accessing physical networks.

