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

The prefix length is determined by the address bit mask.
