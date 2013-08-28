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
* **Domain Name System (DNS)** – Also called name service, this application maps IP addresses to the names assigned to network devices.* **Open Shortest Path First (OSPF)** – Routing is central to the way TCP/IP works. OSPF is used by network devices to exchange routing information. * **Network File System (NFS)** – This protocol allows files to be shared by various hosts on the network.
* **Addressing** – IP addresses, which uniquely identify every host on the network, deliver data to the correct host.* **Routing** – Gateways deliver data to the correct network.* **Multiplexing** – Protocol and port numbers deliver data to the correct software module within the host.
* **IP Address** – An IP address is a 32-bit value that uniquely identifies every device attached to a TCP/IP network. Each of the four numbers in the IP address is in the range 0–255 (the decimal values possible in a single byte). 
* **host addresses** – Another name for IP Addresses
* 

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
