#Networking


##Terminology

* **TCP/IP** – Transmission Control Protocol
* **IP** – Internet Protocol
* **UDP** – User Datagram Protocol
* **BIND** – Berkeley Internet Name Domain. Name server software.
* **dhcpd** – Dynamic Host Configuration Protocol Daemon

`TCP/IP` is a set of communications protocols that define how different types of computers talk to each other.

The name `TCP/IP` refers to an entire suite of data communications protocols. The suite gets its name from two of the protocols that belong to it: the Transmission Control Protocol `TCP` and the Internet Protocol `IP`. It is also called the Internet Protocol Suite `IPS`.

Today’s Internet is built by commercial providers. National network providers, called tier-one providers, and regional network providers create the infrastructure. Internet Service Providers `ISPs` provide local access and user services. This network of networks is linked together in the United States at several major interconnection points called Network Access Points `NAPs`.

An `internet` (lowercase “i”) is any collection of separate physical networks, interconnected by a common protocol, to form a single logical network.

*The* `Internet` (uppercase “I”) is the worldwide collection of interconnected networks, which grew out of the original ARPAnet, that uses `IP` to link the various physical networks into a single logical network.

`Intranets` are `TCP/IP`-based enterprise networks that use Internet techniques and web tools to disseminate internal corporate information.

##TCP/IP Important Features

* Open protocol standards, freely available and developed independently from any specific computer hardware or operating system. This makes TCP/IP ideal for uniting different hardware and software components, even when not communicating over the Internet.
* Independence from specific physical network hardware. This allows TCP/IP to integrate many different kinds of networks. TCP/IP can be run over an Ethernet, a DSL connection, a dial-up line, an optical network, and virtually any other kind of physical transmission medium.
* A common addressing scheme that allows any TCP/IP device to uniquely address any other device in the entire network, even if the network is as large as the worldwide Internet.
* Standardized high-level protocols for consistent, widely available user services.

##Protocol Standards

`Protocols` are formal rules of behavior.

TCP/IP creates a heterogeneous network with open protocols that are independent of operating system and architectural differences.

The open nature of TCP/IP protocols requires an open standards development process and publicly available standards documents.

 Internet standards are developed by the Internet Engineering Task Force (IETF) in open, public meetings.

`RFCs` – The protocols developed in this process are published as 'Requests for Comments' (RFCs). 

There are three basic types of `RFCs`: standards `STD`, best current practices `BCP`, and informational `FYI`.
Creating an official Internet standard is a rigorous process. Standards track `RFCs` pass through three maturity levels before becoming standards:* Proposed Standard* Draft Standard* Internet Standard
There are two categories of standards: A Technical Specification `TS` defines a protocol. An Applicability Statement `AS` defines when the protocol is to be used. 
There are three requirement levels that define the applicability of a standard:
* Required* Recommended* Elective

**OSI** – Open Systems Interconnect Reference Model. An architectural model developed by the International Standards Organization (ISO) that is used to describe the structure and function of data communications protocols.

The OSI Reference Model contains seven layers that define the functions of data communications protocols. These seven layers are often called a **stack** or **protocol stack**.

￼7 – **Application Layer** consists of application programs that use the network.

6 – **Presentation Layer** standardizes data presentation to the applications.￼5 – **Session Layer** manages sessions between applications.￼4 – **Transport Layer** provides end-to-end error detection and correction.￼3 – **Network Layer** manages connections across the network for the upper layers.
2 – **Data Link Layer** provides reliable data delivery across the physical link.
￼1 – **Physical Layer** defines the physical characteristics of the network media.

**Peers** – A `peer` is an implementation of the same protocol in the equivalent layer on a remote system. e.g. the local file transfer protocol is the peer of a remote file transfer protocol.

In the abstract, each protocol is concerned only with communicating to its peers; it does not care about the layers above or below it.

However, there must also be agreement on how to pass data between the layers on a single computer, because every layer is involved in sending data from a local application to an equivalent remote application.

Data is passed down the stack from one layer to the next until it is transmitted over the network by the Physical Layer protocols.

At the remote end, the data is passed up the stack to the receiving application.

The individual layers do not need to know how the layers above and below them function; they need to know only how to pass data to them.

Although the OSI model is useful, the TCP/IP protocols don’t match its structure exactly.

The Transport Layer in the `OSI` reference model guarantees that the receiver gets the data exactly as it was sent. In `TCP/IP`, this function is performed by the Transmission Control Protocol `TCP`. However, `TCP/IP` offers a second Transport Layer service, User Datagram Protocol `UDP`, that does not perform the end-to-end reliability checks.

The **Internet Protocol** `IP`, which isolates the upper layer protocols from the underlying network and handles the addressing and delivery of data, is usually described as `TCP/IP`’s Network Layer.

##TCP/IP Protocol Architecture

TCP/IP is generally viewed as being composed of fewer layers than the seven used in the OSI model. Most descriptions of TCP/IP define three to five functional levels in the protocol architecture.

￼4 – **Application Layer** consists of applications and processes that use the network.
￼3 – **Host-to-Host Transport Layer** provides end-to-end data delivery services.
￼2 – **Internet Layer** defines the datagram and handles the routing of data.
￼1 – **Network Access Layer** consists of routines for accessing physical networks.


As in the OSI model, data is passed down the stack when it is being sent to the network, and up the stack when it is being received from the network.

Each layer in the stack adds control information to ensure proper delivery. This control information is called a `header` because it is placed in front of the data to be transmitted. Each layer treats all the information it receives from the layer above as data, and places its own header in front of that information. The addition of delivery information at every layer is called encapsulation.

When data is received, the opposite happens. Each layer strips off its **header** before passing the data on to the layer above. As information flows back up the stack, information received from a lower layer is interpreted as both a header and data.

Each layer has its own independent data structures. Conceptually, a layer is unaware of the data structures used by the layers above and below it. In reality, the data structures of a layer are designed to be compatible with the structures used by the surrounding layers for the sake of more efficient data transmission.

Still, each layer has its own data structure and its own terminology to describe that structure.

Applications using **TCP** refer to data as a `stream`, while applications using **UDP** refer to data as a message. **TCP** calls data a `segment`, and **UDP** calls its data a `packet`. The **Internet layer** views all data as blocks called `datagrams`.

Most networks refer to transmitted data as `packets` or `frames`.

##A Closer Look at the functions of each layer

### The Network Access Layer

The protocols in this layer provide the means for the system to deliver data to the other devices on a directly attached network.

This layer defines how to use the network to transmit an IP datagram.

Unlike higher-level protocols, **Network Access Layer**protocols must know the details of the underlying network (its packet structure, addressing, etc.) to correctly format the data being transmitted to comply with the network constraints. The `TCP/IP` **Network Access Layer** can encompass the functions of all three lower layers of the OSI Reference Model (Network, Data Link, and Physical).
The design of `TCP/IP` hides the function of the lower layers, and the better-known protocols (**IP, TCP, UDP, etc.**) are all higher-level protocols.

Functions performed at this level include encapsulation of IP datagrams into the frames transmitted by the network, and mapping of IP addresses to the physical addresses used by the network.

The IP address must be converted into an address that is appropriate for the physical network over which the datagram is transmitted.

### Internet Layer

The Internet Protocol `IP` is the most important protocol in this layer.

The release of IP used in the current Internet is IP version 4 `IPv4`, which is defined in RFC 791. `IPv6` is an IP standard that provides greatly expanded addressing capacity. Because `IPv6` uses a completely different address structure, it is not interoperable with `IPv4`.

The Internet Protocol is the heart of TCP/IP. IP provides the basic packet delivery service on which TCP/IP networks are built. All protocols, in the layers above and below IP, use the Internet Protocol to deliver data. All incoming and outgoing TCP/IP data flows through IP, regardless of its final destination.

### Internet Protocol

The Internet Protocol is the building block of the Internet. Its functions include:
* Defining the datagram, which is the basic unit of transmission in the Internet* Defining the Internet addressing scheme* Moving data between the Network Access Layer and the Transport Layer* Routing datagrams to remote hosts* Performing fragmentation and re-assembly of datagrams
`IP` is a connectionless protocol. This means that it does not exchange control information (called a “handshake”) to establish an end-to-end connection before transmitting data.

This means that it does not exchange control information (called a “handshake”) to establish an end-to-end connection before transmitting data. In contrast, a connectionoriented protocol exchanges control information with the remote system to verify that it is ready to receive data before any data is sent. When the handshaking is successful, the systems are said to have established a connection. The Internet Protocol relies on protocols in other layers to establish the connection if they require connection-oriented service.

`IP` can be relied upon to accurately deliver your data to the connected network, but it doesn’t check whether that data was correctly received. Protocols in other layers of the `TCP/IP` architecture provide this checking when it is required.

 A **packet** is a block of data that carries with it the information necessary to deliver it, similar to a postal letter, which has an address written on its envelope. A packet-switching network uses the addressing information in the packets to switch packets from one physical network to another, moving them toward their final destination. Each packet travels the network independently of any other packet.
 
The datagram is the packet format defined by the Internet Protocol.

The Internet Protocol delivers the datagram by checking the Destination Address in word 5 of the header.

If the Destination Address is the address of a host on the local network, the packet is delivered directly to the destination. If the Destination Address is not on the local network, the packet is passed to a gateway for delivery. Gateways are devices that switch packets between the different physical networks. Deciding which gateway to use is called routing. IP makes the routing decision for each individual packet.

Internet gateways are commonly (and perhaps more accurately) referred to as IP routers because they use Internet Protocol to route packets between networks.

Each type of network has a maximum transmission unit (MTU), which is the largest packet that it can transfer.

## Internet Control Message Protocol

**Internet Control Message Protocol (ICMP)** is part of the Internet Layer and uses the IP datagram delivery facility to send its messages.


## Transport Layer

The two most important protocols in the Transport Layer are Transmission Control Protocol (TCP) and User Datagram Protocol (UDP). TCP provides reliable data delivery service with end-to-end error detec- tion and correction. UDP provides low-overhead, connectionless datagram delivery service. Both protocols deliver data between the Application Layer and the Internet Layer. Applications programmers can choose whichever service is more appropriate for their specific applications.

### User Datagram Protocol (UDP)
The User Datagram Protocol gives application programs direct access to a datagram delivery service. 

Applications that fit a query-response model are also excellent candidates for using UDP. The response can be used as a positive acknowledgment to the query. If a response isn’t received within a certain time period, the application just sends another query.

### Transmission Control Protocol (TCP)

Applications that require the transport protocol to provide reliable data delivery use TCP because it verifies that data is delivered across the network accurately and in the proper sequence.

The unit of data exchanged between cooperating TCP modules is called a **segment**.

If the data segment is received undamaged, the receiver sends a positive acknowledgment back to the sender. If the data segment is damaged, the receiver discards it.

It establishes a logical end-to-end connection between the two communicating hosts. Control information, called a handshake, is exchanged between the two endpoints to establish a dialogue before data is transmitted.

TCP views the data it sends as a continuous stream of bytes, not as independent packets. Therefore, TCP takes care to maintain the sequence in which bytes are sent and received.

TCP is also responsible for delivering data received from IP to the correct applica- tion. The application that the data is bound for is identified by a 16-bit number called the port number. The Source Port and Destination Port are contained in the first word of the segment header.

## The Applcation Layer

The Application Layer includes:

* **Telnet** – The Network Terminal Protocol, which provides remote login over the network.* **FTP** – The File Transfer Protocol, which is used for interactive file transfer.* **SMTP** – The Simple Mail Transfer Protocol, which delivers electronic mail.* **HTTP** – The Hypertext Transfer Protocol, which delivers web pages over the network.
* **Domain Name System (DNS)** – Also called name service, this application maps IP addresses to the names assigned to network devices.* **Open Shortest Path First (OSPF)** – Routing is central to the way TCP/IP works. OSPF is used by network devices to exchange routing information. * **Network File System (NFS)** – This protocol allows files to be shared by various hosts on the network.
## Addressing, Routing, and Multiplexing
TCP/IP uses three schemes to move the data across the network to the correct host, and within that host to the correct user or process.
* **Addressing** – IP addresses, which uniquely identify every host on the network, deliver data to the correct host.* **Routing** – Gateways deliver data to the correct network.* **Multiplexing** – Protocol and port numbers deliver data to the correct software module within the host.
### The IP Address
An IP address is a 32-bit value that uniquely identifies every device attached to a TCP/IP network. Each of the four numbers in the IP address is in the range 0–255 (the decimal values possible in a single byte).
IP addresses are often called host addresses.
IP addresses are assigned to network interfaces, not to computer systems. A gateway has a different address for each network to which it is connected. The gateway is known to other devices by the address associated with the network that it shares with those devices.
Systems can be addressed in three different ways. Individual systems are directly addressed by a host address, which is called a **unicast address**. Groups of systems can be addressed using a **multicast address**. All systems on a network are addressed using the **broadcast address**.
Not all network addresses or host addresses can be assigned to a network device. Some host addresses are reserved for special uses. On all networks, host numbers `0` and `255` are reserved. An IP address with all host bits set to 1 is a broadcast address.

The broadcast address for network `172.16` is `172.16.255.255`. A datagram sent to this address is delivered to every indi- vidual host on network 172.16. An IP address with all host bits set to `0` identifies the network itself. For example, `10.0.0.0` refers to network `10`, and `172.16.0.0` refers to network `172.16`.

Network addresses with a first byte value greater than 223 cannot be assigned to a physical network, because those addresses are reserved for special use.

Network `0.0.0.0` designates the default route and network `127.0.0.1` is the loopback address. The default route is used to simplify the routing information that IP must handle. The loopback address simplifies network applications by allowing the local host to be addressed in the same manner as a remote host. These addresses are not assigned to devices on real networks.

## Address Structure

An IP address contains a network part and a host part, but the format of these parts is not the same in every IP address.

The number of address bits used to identify the net- work and the number used to identify the host vary according to the prefix length of the address. The prefix length is determined by the address bit mask. 

An address bit mask works like this: if a bit is on in the mask, that equivalent bit in the address is interpreted as a network bit; if a bit in the mask is off, the bit belongs to the host part of the address.

A shorthand notation is available for writing an address with its associated address mask. We can write `172.31.26.32/27`. The format of this notation is address/prefix-length, where prefix-length is the number of bits in the network portion of the address. Without this notation, the address `172.31.26.32` could easily be misinterpreted.

Organizations usually obtain official IP addresses by purchasing a block of addresses from their Internet service provider. The ISP normally assigns a single organization a continuous block of addresses that is appropriate for the needs of the organization.

Internally, however, the organization may have several separate physical networks within the address block. The flexibility of address masks means that service provid- ers can assign arbitrary length blocks of addresses to their customers, and the cus- tomers can subdivide those address blocks using different length masks.

##Subnets

The structure of an IP address can be locally modified by using host address bits as additional network address bits. Essentially, the “dividing line” between network address bits and host address bits is moved, creating additional networks but reduc- ing the maximum number of hosts that can belong to each network. These newly designated network bits define an address block within the larger address block, which is called a **subnet**.

Organizations usually decide to subnet in order to overcome topological or organizational problems. Subnetting allows decentralized management of host addressing.

Subnetting divides a single address block into many unique subnet addresses, so that each physical network can have its own unique address.

On the outside, the address is still interpreted using the address mask known to the outside world.

Because of the dual role of IP addresses, the flexibility of address masks not only makes more addresses available for use, but also has a positive impact on routing.

## CIDR Blocks and Route Aggregation

The use of an address mask instead of the old address classes to determine the destination network is called Classless Inter-Domain Routing (CIDR).

In the TCP/IP protocol suite, addressing is defined by the IP protocol. There- fore, to define a new address structure, the Internet Engineering Task Force (IETF) created a new version of IP called IPv6.##IPv6
IPv6 has a very large 128-bit address, so address depletion is not an issue.
Other benefits of IPv6 are:* Improved security built into the protocol* Simplified, fixed-length, word-aligned headers to speed header processing and reduce overhead* Improved techniques for handling header options## Internet Routing Architecture
The routing information passed to the other network systems is called reachability information.
* **reachability information** – The routing information passed to the other network systems is called reachability information. It simply says which networks can be reached through that autonomous system.
The new routing model is based on co-equal collections of autonomous systems called routing domains. Routing domains exchange routing information with other domains using Border Gateway Protocol (BGP).
NSF created the Routing Arbiter (RA) servers when it created the Network Access Points (NAPs) that provide interconnection points for the various service provider networks. A route arbiter is located at each NAP. The server pro- vides access to the Routing Arbiter Database (RADB), which replaced the PRDB. ISPs can query servers to validate the reachability information advertised by an autono- mous system.
The RADB is only part of the Internet Routing Registry (IRR).
Creating an effective routing architecture continues to be a major challenge for the Internet, and the routing architecture will certainly evolve over time. No matter how it is derived, the routing information eventually winds up in your local gateway, where it is used by IP to make routing decisions.
## The Routing Table
Gateways route data between networks, but all network devices, hosts as well as gateways, must make routing decisions. For most hosts, the routing decisions are simple:
* If the destination host is on the local network, the data is delivered to the desti- nation host.* If the destination host is on a remote network, the data is forwarded to a local gateway.
IP routing decisions are simply table lookups. Packets are routed toward their destinations as directed by the routing table (also called the forwarding table).The routing table maps destinations to the router and network interface that IP must use to reach that destination.Most systems use two routing tables: the Forwarding Information Base (FIB), which is the table we are interested in because it is used for the routing decision, and the kernel routing cache, which lists the source and destination of recently used routes.
Each entry in the routing table starts with a destination value.
When an address matches an entry in the table, the Gateway field tells IP how to reach the specified destination. If the Gateway field contains the IP address of a router, the router is used.
If the Gateway field contains all 0s (i.e. 0.0.0.0), the destination network is a directly connected network and the “gateway” is the computer’s network interface.
The destination, gateway, mask, and interface define the route.
The routing cache is different from the routing table because the cache shows established routes. The routing table is used to make routing decisions; the routing cache is used after the decision is made. The routing cache shows the source and destina- tion of a network connection and the gateway and interface used to make that connection.
The default route is the other reserved network number mentioned earlier: `0.0.0.0.` The default gateway is used whenever there is no specific route in the table for a destination network address.
All of the gateways that appear in the routing table are on networks directly connected to the local system.The gateways that a host uses to reach the rest of the Internet must be on its subnet.
A routing table does not contain end-to-end routes. A route points only to the next gateway, called the next hop, along the path to the destination network. The host relies on the local gateway to deliver the data, and the gateway relies on other gateways. 
IP uses the network portion of the address to route the datagram between networks. The full address, including the host information, is used to make final delivery when the datagram reaches the destination network.
## Address Resolution
The IP address and the routing table direct a datagram to a specific physical network, but when data travels across a network, it must obey the physical layer proto- cols used by that network. The physical networks underlying the TCP/IP network do not understand IP addressing. Physical networks have their own addressing schemes, and there are as many different addressing schemes as there are different types of physical networks. One task of the network access protocols is to map IP addresses to physical network addresses.

The most common example of this Network Access Layer function is the translation of IP addresses to Ethernet addresses, performed by the **Address Resolution Protocol (ARP)**.

The ARP software maintains a table of translations between IP addresses and Ethernet addresses. This table is built dynamically.

Answering ARP queries for other computers is called **proxy ARP**. Proxy ARP is used to answer queries for systems that can’t answer for themselves.

ARP tables normally don’t require any attention because they are built automatically by the ARP protocol, which is very stable.

## Protocols, Ports, and Sockets

Once data is routed through the network and delivered to a specific host, it must be delivered to the correct user or process.

As the data moves up or down the TCP/IP layers, a mechanism is needed to deliver it to the correct protocols in each layer. The system must be able to combine data from many applications into a few transport protocols, and from the transport protocols into the Internet Protocol. Combining many sources of data into a single data stream is called **multiplexing**.

Data arriving from the network must be **demultiplexed**: divided for delivery to multiple processes. To accomplish this task, IP uses protocol numbers to identify transport protocols, and the transport protocols use port numbers to identify applications.

The protocol numbers and port numbers are assigned to well-known services by the Internet Assigned Numbers Authority (IANA). Officially assigned numbers are documented at [http://www.iana.org](http://www.iana.org).

### Protocol Numbers

The protocol number is a single byte in the third word of the datagram header.

On a Unix system, the protocol numbers are defined in `/etc/protocols`.

When a datagram arrives and its destination address matches the local IP address, the IP layer knows that the datagram has to be delivered to one of the transport protocols above it. To decide which protocol should receive the datagram, IP looks at the datagram’s protocol number.

### Port Numbers

After IP passes incoming data to the transport protocol, the transport protocol passes the data to the correct application process. Application processes (also called network services) are identified by port numbers, which are 16-bit values.
Port numbers below 1024 are reserved for well-known services (like FTP and Telnet) and are assigned by the IANA.

Ports numbered from 1024 to 49151 are “registered ports.” IANA tries to maintain a registry of services that use these ports, but it does not officially assign port numbers in this range.The port numbers from 49152 to 65535 are the “private ports.” Private port numbers are available for any use.It is the combination of protocol and port numbers that uniquely identifies the specific process to which the data should be delivered.
On Unix systems, port numbers are defined in `/etc/services`.
The `/etc/services` file, combined with the `/etc/protocols` file, provides all of the information necessary to deliver data to the correct application.
A datagram arrives at its destination based on the destination address in the fifth word of the datagram header. Using the protocol number in the third word of the datagram header, IP delivers the data from the datagram to the proper transport layer protocol. The first word of the data delivered to the transport protocol contains the destination port number that tells the transport protocol to pass the data up to a specific application.
The `portmapper` program makes it possible to install widely used services without formally obtaining a well-known port.
### Sockets
Well-known ports are standardized port numbers that enable remote computers to know which port to connect to for a particular network service. This simplifies the connection process because both the sender and receiver know in advance that data bound for a specific process will use a specific port.
Equally important is a second type of port number called a **dynamically allocated port**. As the name implies, dynamically allocated ports are not pre-assigned; they are assigned to processes when needed.Dynamically allocated ports provide the flexibility needed to support multiple users.

It is the *pair of port numbers*, source and destination, that uniquely identifies each network connection.

The combination of an IP address and a port number is called a **socket**.

A **socket** uniquely identifies a single network process within the entire Internet.A pair of sockets, one socket for the receiving host and one for the sending host, define the connection for connection-oriented protocols such as TCP.
# Network Services
Some network servers provide essential computer-to-computer services. These differ from application services in that they are not directly accessed by end users.
Some of these services include:
* Name service for converting IP addresses to hostnames* Configuration servers that simplify the installation of networked hosts by handling part or all of the TCP/IP configuration* Electronic mail services for moving mail through the network from the sender to the recipient* File servers that allow client computers to transparently share files* Print servers that allow printers to be centrally maintained and shared by all users
Every Unix host on your network can be both a server and a client. The hosts on a TCP/IP network are **peers**. All systems are equal, and the network is not dependent on any one server.
## Names and Addresses
The Internet Protocol document defines names, addresses, and routes as follows:
> A name indicates what we seek.<br> > An address indicates where it is.<br> > A route indicates how to get there.

Every network interface attached to a TCP/IP network is identified by a unique 32-bit IP address. A name (called a hostname) can be assigned to any device that has an IP address. Names are assigned to devices because, compared to numeric Internet addresses, names are easier to remember and type correctly. Names aren’t required by the network software, but they do make it easier for humans to use the network.

In most cases, hostnames and numeric addresses can be used interchangeably.

A user wishing to telnet to the workstation at IP address `172.16.12.2` can enter:

	$ telnet 172.16.12.2or use the hostname associated with that address and enter the equivalent command:	$ telnet rodent.wrotethebook.comWhether a command is entered with an address or a hostname, the network connection always takes place based on the IP address. The system converts the hostname to an address before the network connection is made.
There are two common methods for translating names into addresses. The older method simply looks up the hostname in a table called the host table. The newer technique uses a distributed database system called the **Domain Name System (DNS)** to translate names to addresses.

## The Host Table

The host table is a simple text file that associates IP addresses with hostnames. On most Unix systems, the table is in the file `/etc/hosts`.

In a host table, you can have many names resolving to the same IP address. Much like aliases.

`loghost` is a special hostname used by Solaris in the syslog.conf configuration file. Other commonly used generic hostnames are `lprhost`, `mailhost`, and `dumphost`.

The host address `127.0.0.1` is a special address used to designate the loopback address of the local host—hence the hostname `localhost`.This special addressing convention allows the host to address itself the same way it addresses a remote host. The loopback address simplifies software by allowing common code to be used for communicating with local or remote processes. This addressing convention also reduces network traffic because the localhost address is associated with a loopback device that loops data back to the host before it is written out to the net- work.
Although the host table system has been superseded by DNS, it is still widely used for the following reasons:
* Most systems have a small host table containing name and address information about the important hosts on the local network. This small table is used when DNS is not running, such as during the initial system startup.
* Sites that use NIS use the host table as input to the NIS host database. You can  use NIS in conjunction with DNS, but even when they are used together, most NIS sites create host tables that have an entry for every host on the local network.
* Very small sites that are not connected to the Internet sometimes use the host table.The old host table system is inadequate for the global Internet for two reasons: inability to scale and lack of an automated update process. Prior to the development of DNS, an organization called the Network Information Center (NIC) maintained a large table of Internet hosts called the NIC host table. Hosts included in the table were called registered hosts, and the NIC placed hostnames and addresses into this file for all sites on the Internet.
The table got way too big, so DNS stepped in.
## DNS
DNS overcomes both major weaknesses of the host table:* DNS scales well. It doesn’t rely on a single large table; it is a distributed database system that doesn’t bog down as the database grows. DNS currently provides information on approximately 100,000,000 hosts, while fewer than 10,000 were listed in the host table.* DNS guarantees that new host information will be disseminated to the rest of the network as it is needed. 
Information is automatically disseminated, and only to those who are interested.
### How DNS works 
If a DNS server receives a request for information about a host for which it has no information, it passes on the request to an authoritative server. An authoritative server is any server responsible for maintaining accurate information about the domain being queried. When the authoritative server answers, the local server saves, or caches, the answer for future use. The next time the local server receives a request for this information, it answers the request itself.
## The Domain Hierarchy
Under DNS, there is no central database with all of the Internet host information. The information is distributed among thousands of name servers organized into a hierarchy similar to the hierarchy of the Unix file system. DNS has a root domain at the top of the domain hierarchy that is served by a group of name servers called the **root servers**.
Just as directories in the Unix filesystem are found by following a path from the root directory through subordinate directories to the target directory, information about a domain is found by tracing pointers from the root domain through subordinate domains to the target domain.
Directly under the root domain are the top-level domains. There are two basic types of top-level domains—geographic and organizational. Geographic domains have been set aside for each country in the world and are identified by a two-letter country code. Thus, this type of domain is called a country code top-level domain (ccTLD). For example, the ccTLD for the United Kingdom is .uk, for Japan it is .jp, and for the United States it is .us. When .us is used as the top-level domain, the second-level domain is usually a state’s two-letter postal abbreviation (e.g., .wy.us for Wyoming). U.S. geographic domains are usually used by state governments and K-12 schools but are not widely used for other hosts.
Within the United States, the most popular top-level domains are organizational — that is, membership in a domain is based on the type of organization (commercial, military, etc.) to which the system belongs. These domains are called **generic top-level domains** or **general-purpose top-level domains (gTLDs)**.
No servers, not even the root servers, have complete information about all domains, but the root servers have pointers to the servers for the second-level domains.* So while the root servers may not know the answer to a query, they know who to ask.
## Creating Domains and Subdomains
Several domain name registrars have been authorized by the **Internet Corporation for Assigned Names and Numbers (ICANN)**.
A new subdomain becomes accessible when pointers to the servers for the new domain are placed in the domain above it. Remote servers cannot locate the `example.com` domain until a pointer to its server is placed in the com domain. Likewise, the subdomains like `events.example.com` and `articles.example.com` cannot be accessed until pointers to them are placed in `example.com`.
The DNS database record that points to the name servers for a domain is the NS (name server) record. This record contains the name of the domain and the name of the host that is a server for that domain.When a local server receives a request for a hostname that it does not have stored in its cache, it queries a root server and receives the name of the server housing the queried hostname. After receiving the IP address from the server housing the hostname, the local server caches the **A (address) record** and each of the NS records.In a recursive search, the server follows the pointers and returns the final answer for the query. The root servers generally per- form only nonrecursive searches. Most other servers perform recursive searches.## Domain Names
Domain names reflect the domain hierarchy. They are written from most specific (a hostname) to least specific (a top-level domain), with each part of the domain name separated by a dot. A **fully qualified domain name (FQDN)** starts with a specific host and ends with a top-level domain. `rodent.example.com` is the **FQDN** of workstation rodent, in the example domain, of the com domain.
## BIND, Resolvers, and named
The implementation of DNS used on Unix systems is the Berkeley Internet Name Domain (BIND) software.
DNS software is conceptually divided into two components — a **resolver** and a **name server**. The resolver is the software that forms the query; it asks the questions. The name server is the process that responds to the query; it answers the questions.
The resolver does not exist as a distinct process running on the computer. Rather, the resolver is a library of software routines (called the resolver code) that is linked into any program that needs to look up addresses. This library knows how to ask the name server for host information.
Under BIND, all computers use resolver code, but not all computers run the name server process. A computer that does not run a local name server process and relies on other systems for all name service answers is called a resolver-only system. Resolver-only configurations are common on single-user systems. Larger Unix sys- tems usually run a local name server process.
The BIND name server runs as a distinct process called **named** (pronounced “name” “d”). 
Name servers are classified differently depending on how they are configured. The three main categories of name servers are:
### MasterThe master server (also called the primary server) is the server from which all data about a domain is derived. The master server loads the domain’s information directly from a disk file created by the domain administrator. Master servers are authoritative, meaning they have complete information about their domain and their responses are always accurate. There should be only one master server for a domain.### SlaveSlave servers (also known as secondary servers) transfer the entire domain database from the master server. A particular domain’s database file is called a zone file; copying this file to a slave server is called a zone file transfer. A slave server assures that it has current information about a domain by periodically transferring the domain’s zone file. Slave servers are also authoritative for their domain.### Caching-onlyCaching-only servers get the answers to all name service queries from other name servers. Once a caching server has received an answer to a query, it caches the information and will use it in the future to answer queries itself. Most name servers cache answers and use them in this way. What makes the caching-only server unique is that this is the only technique it uses to build its domain database. Caching servers are non-authoritative, meaning that their information is second-hand and incomplete, though usually accurate.
Under DNS, there should be only one primary name server for each domain.## Network Information Service
The **Network Information Service (NIS)** is an administrative database system developed by Sun Microsystems. It provides central control and automatic dissemination of important administrative files. NIS can be used in conjunction with DNS or as an alternative to it.
Unlike DNS, NIS only provides service for local area networks. NIS is not intended as a service for the Internet as a whole. 
NIS provides access to a wider range of information than DNS—much more than name-to-address conversions. It converts several standard Unix files into databases that can be queried over the network. These databases are called **NIS maps**.
NIS converts files such as `/etc/hosts` and `/etc/networks` into maps. The maps can be stored on a central server where they can be centrally maintained while still being fully accessible to the NIS clients.
But NIS is not an alternative to DNS for Internet hosts because the host table, and therefore NIS, contains only a fraction of the information available to DNS. For this reason DNS and NIS are usually used together.
## Mail Services
TCP/IP provides a reliable, flexible email system built on a few basic protocols. These protocols are **Simple Mail Transfer Protocol (SMTP)**, **Post Office Protocol (POP)**, **Internet Message Access Protocol (IMAP)**, and **Multipurpose Internet Mail Extensions (MIME)**.
### Simple Mail Transfer Protocol (SMTP)
SMTP is the TCP/IP mail delivery protocol. It moves mail across the Internet and across your local network and it uses well-known port number 25.
SMTP provides direct end-to-end mail delivery. Other mail systems, like UUCP and X.400, use store and forward protocols that move mail toward its destination one hop at a time, storing the complete message at each hop and then forwarding it on to the next system. The message proceeds in this manner until final delivery is made.
Direct delivery allows SMTP to deliver mail without relying on intermediate hosts. If the delivery fails, the local system knows it right away. The disadvantage of direct delivery is that it requires both systems to be fully capable of handling mail.
Some systems cannot handle mail, particularly small systems such as PCs or mobile systems such as laptops. These systems are usually shut down at the end of the day and are frequently offline. Mail directed from a remote host fails with a “cannot connect” error when the local system is turned off or is offline. To handle these cases, features in the DNS system are used to route the message to a mail server in lieu of direct delivery. The mail is then moved from the server to the client system when the client is back online. One of the protocols TCP/IP networks use for this task is **POP**.

### Post Office Protocol (POP)There are two versions of Post Office Protocol: POP2 and POP3. POP2, defined in RFC 937, uses `port 109`, and POP3, defined in RFC 1725, uses `port 110`. These are **incompatible protocols** that use different commands, although they perform the same basic functions.
The POP protocols verify the user’s login name and password and move the user’s mail from the server to the user’s local mail reader. POP2 is rarely used anymore.

On an average POP server, the entire contents of the mailbox are moved to the client and either deleted from the server or retained as if never read. Email clients that want to remotely maintain a mailbox on the server are more likely to use IMAP.

### Internet Message Access Protocol (IMAP)

**Internet Message Access Protocol (IMAP)** is an alternative to POP. It provides the same basic service as POP and adds features to support mailbox synchronization, which is the ability to read individual mail messages on a client or directly on the server while keeping the mailboxes on both systems completely up to date. IMAP provides the ability to manipulate individual messages on the client or the server and to have those changes reflected in the mailboxes of both systems.

IMAP uses TCP for reliable, sequenced data delivery. The IMAP port is TCP port 143. Like the POP protocol, IMAP is also a request/response protocol with a small set of commands. The IMAP command set is somewhat more complex than the one used by POP because IMAP does more, yet there are still fewer than 25 IMAP com- mands.## Multipurpose Internet Mail Extensions (MIME)
MIME is an extension of the existing TCP/IP mail system, not a replacement for it.
MIME is more concerned with what the mail system delivers than with the mechanics of delivery. It doesn’t attempt to replace SMTP or TCP; it extends the definition of what constitutes “mail.”
MIME extends the RFC for traditional main into two areas not covered by the original RFC:
* Support for various data types besides plain vanilla ASCII
* Support for complex message bodies.
MIME addresses these two weaknesses by defining encoding techniques for carrying various forms of data and by defining a structure for the message body that allows multiple objects to be carried in a single message.
MIME defines two headers: the **Content-Type** header and the **Content-Transfer-Encoding** header.
The original 7 content-types (which have been expanded on since) are:
* text
* application (binary data)
* image
* video
* audio
* multipart
* message

The Content-Transfer-Encoding header identifies the type of encoding used on the data.

MIME defines data types that SMTP was not designed to carry.

One response of the `EHLO` command is for the receiving system to return a list of the SMTP extensions it supports. This response allows the sending system to know what extended services can be used, and to avoid those that are not implemented on the remote system. SMTP implementations that support the `EHLO` command are called **Extended SMTP (ESMTP)**.

**ESMTP** and **MIME** are important because they provide a standard way to transfer non-ASCII data through email.

## File and Print Servers

### File Sharing

File sharing is not the same as file transfer; it is not simply the ability to move a file from one system to another. A true file-sharing system does not require you to move files across the network. It allows files to be accessed at the record level so that it is possible for a client to read a record from a file located on a remote server, update that record, and write it back to the server—without moving the entire file from the server to the client.

File sharing is transparent to the user and to the application software running on the user’s system.

Through file sharing, users and programs access files located on remote systems as if they were local files. In a perfect file-sharing environment, the user neither knows nor cares where files are actually stored.

File sharing didn’t exist in the original TCP/IP protocol suite. It was added to support diskless workstations. Several TCP/IP protocols for file sharing have been defined, but two hold the lion’s share of the file sharing market:

1. **NetBIOS/Server Message Block (SMB)**NetBIOS was originally defined by IBM. It is the basic networking used on Microsoft Windows systems. Unix systems can act as file and print servers for Windows clients by running the Samba software package that implements NetBIOS and Server Message Block (SMB) protocols.
2. **Network File System (NFS)**NFS was defined by Sun Microsystems to support their diskless workstations. NFS is designed primarily for LAN applications and is implemented for all Unix systems and many other operating systems.
For file sharing between Unix systems, you will probably use NFS. If you need to support Windows clients using Unix servers, you will probably use Samba.
### Print Services
A print server allows printers to be shared by everyone on the network.
There are two techniques commonly used for sharing printers on a corporate network. One technique is to use the sharing services provided by Samba. This is the technique preferred by Windows clients. The other approach is to use the traditional Unix `lpr` command and an `lpd` server.## Configuration Servers
The powerful features that add to the utility and flexibility of TCP/IP also add to its complexity. TCP/IP is not as easy to configure as some other networking systems. TCP/IP requires that the configuration provide hardware, addressing, and routing information. It is designed to be independent of any specific underlying network hardware, so configuration information that can be built into the hardware in some network systems cannot be built in for TCP/IP. The information must be provided by the person responsible for the configuration.
Configuration servers make it possible for the network administrator to control TCP/IP configuration from a central point. This relieves the end user of some of the burden of configuration and improves the quality of the information used to config- ure systems.
TCP/IP has used three protocols to simplify the task of configuration: `RARP`, `BOOTP`, and `DHCP`. We begin with `RARP`, the oldest and most basic of these con- figuration tools.
### Reverse Address Resolution Protocol (RARP)**RARP** is a protocol that converts a physical network address into an IP address, which is the reverse of what **Address Resolution Protocol (ARP)** does.

A **Reverse Address Resolution Protocol** server maps a physical address to an IP address for a client that doesn’t know its own IP address. The client sends out a broadcast using the broadcast services of the physical network. The broadcast packet contains the client’s physical network address and asks if any system on the network knows what IP address is associated with the address. The RARP server responds with a packet that contains the client’s IP address.
The RARP server looks up the IP address that it uses in its response to the client in the `/etc/ethers` file. The `/etc/ethers` file contains the client’s Ethernet address followed by the client’s hostname. E.g.

	2:60:8c:48:84:49	clock	0:0:c0:a1:5e:10		ring
 
To respond to a RARP request, the server must also resolve the hostname found in the `/etc/ethers` file into an IP address. DNS or the hosts file is used for this task.

The following hosts file entries could be used with the ethers file shown above:
    clock           172.16.3.10    ring            172.16.3.16RARP is a useful tool, but it provides only the IP address. There are still several other values that need to be manually configured. **Bootstrap Protocol (BOOTP)** is a more flexible configuration tool that provides more values than just the IP address and can deliver those values via the network.BOOTP is an alternative to RARP; when BOOTP is used, RARP is not needed. BOOTP, however, is a more comprehensive configuration protocol than RARP. It provides much more configuration information.
BOOTP and its extensions became the basis for the **Dynamic Host Configuration Protocol (DHCP)**. DHCP has superseded BOOTP, so DHCP is the configuration protocol that you will use on your network.
### Dynamic Host Configuration Protocol (DHCP)
DHCP is the correct configuration protocol for your network because DHCP exceeds the capabilities of BOOTP while maintaining support for existing BOOTP clients.DHCP uses the same UDP ports as BOOTP (`67` and `68`) and the same basic packet format. But DHCP is more than just an update of BOOTP. The new protocol expands the function of BOOTP in two areas:* The configuration parameters provided by a DHCP server include everything defined in the Requirements for Internet Hosts RFC. DHCP provides a client with a complete set of TCP/IP configuration values.* DHCP permits automated allocation of IP addresses.DHCP expands the original BOOTP packet in order to indicate the DHCP packet type and to carry a complete set of configuration information. DHCP calls the values in this part of the packet `options`.
Default values are provided in most TCP/IP implementations, and the defaults need to be changed only in special circumstances.
For most network administrators, *automatic allocation of IP addresses* is a more interesting feature of DHCP. 
DHCP allows addresses to be assigned in four ways:

1. **Permanent fixed addresses:** The Administrator assigns the address manually without using the DHCP system. While this happens completely outside of DHCP, DHCP makes allowances for it by permitting addresses to be excluded from the range of addresses under the control of the DHCP server.

2. **Manual allocation:** The network administrator keeps complete control over addresses by specifi- cally assigning them to clients in the DHCP configuration. This is exactly the same way that addresses are handled under BOOTP.

3. **Automatic allocation:** The DHCP server permanently assigns an address from a pool of addresses. The administrator is not involved in the details of assigning a client an address.

4. **Dynamic allocation:** The server assigns an address to a DHCP client for a limited period of time. The limited life of the address is called a lease. The client can return the address to the server at any time but must request an extension from the server to retain the address longer than the time permitted. The server automatically reclaims the address after the lease expires if the client has not requested an extension. Dynamic allocation uses the full power of DHCP, whereas the others don't.

Unused addresses are returned to the pool of addresses without relying on users or system administrators to deliberately return them. Addresses are used only when and where they’re needed. Dynamic allocation allows a network to make the maximum use of a limited set of addresses.
Dynamic address allocation does not work for every system.