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
Under DNS, there is no central database with all of the Internet host information. The information is distributed among thousands of name servers organized into a hierarchy similar to the hierarchy of the Unix file system. DNS has a root domain at the top of the domain hierarchy that is served by a group of name servers called the root servers.
