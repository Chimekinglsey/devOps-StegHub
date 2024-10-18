# Self study takeaways
1. **DNS Server** is a server that translates domain names to IP addresses. It is like a phone book for the internet. When you type a domain name in the browser, the browser sends a request to the DNS server to get the IP address of the domain name. The DNS server then returns the IP address to the browser, and the browser uses the IP address to connect to the server.
1. **DNS Record/Zone File** is a record in the zone file that contains information about a domain name. It contains information about the domain name, such as the IP address of the domain name, the name servers of the domain name, and the mail servers of the domain name. The DNS server uses the DNS record to translate domain names to IP addresses.
1. **Round Robin DNS** is a technique used to distribute incoming network traffic across multiple servers. This technique is used to improve the performance and reliability of the servers. In Round Robin DNS, the DNS server returns a list of IP addresses for a domain name. The browser then uses the IP addresses in the list to connect to the servers in a round-robin fashion.
1. **Load Balancing** is a technique used to distribute incoming network traffic across multiple servers. This technique is used to improve the performance and reliability of the servers.
1. **L4 Network Load Balancer** is a device that distributes incoming network traffic across multiple servers based on the IP address and port number of the incoming network traffic. The L4 network load balancer can distribute incoming network traffic based on various criteria, such as round-robin, least connections, and IP hash.
1. **L7 Application Load Balancer** is a device that distributes incoming network traffic across multiple servers based on the application layer information of the incoming network traffic.  The L7 Application Load Balancer can distribute incoming network traffic based on various criteria, such as the URL, the HTTP headers, and the cookies.
1. **Load Balancer** is a device that distributes incoming network traffic across multiple servers.  The load balancer can distribute incoming network traffic based on various criteria, such as round-robin, least connections, and IP hash.
1. **Types of Load Balancing**:
Load balancers can be categorized into different types based on the layer at which they operate, the criteria they use to distribute incoming network traffic, and the method they use to distribute incoming network traffic.
### Static and Dynamic Load Balancing
Load balancers can be categorized into two types based on the method they use to distribute incoming network traffic: Static Load Balancing and Dynamic Load Balancing.
1. **Dynamic Load Balancing**: In Dynamic Load Balancing, the load balancer distributes incoming network traffic across multiple servers based on the current load of the servers. Example: Least Connections Load Balancing, Least Response Time Load Balancing, and Weighted Round Robin Load Balancing.
    - **Least Connections**: The load balancer performs a health check on the servers and distributes incoming network traffic to the server with the least number of active connections.
    - **Least Response Time**: The load balancer performs a health check on the servers and distributes incoming network traffic to the server with the least response time.
    - **Weighted Round Robin**: The load balancer distributes incoming network traffic to the servers based on the weight assigned to each server. The weight is used to determine the number of requests that each server can handle.

1. **Static Load Balancing**: In Static Load Balancing, the load balancer distributes incoming network traffic across multiple servers based on a predefined set of rules. Example: Round Robin Load Balancing, IP Hash Load Balancing, and URL Hash Load Balancing.
    - **Round Robin**: The load balancer distributes incoming network traffic to the servers in a round-robin fashion.
    - **IP Hash**: The load balancer distributes incoming network traffic to the servers based on the hash of the client's IP address.
    - **URL Hash**: The load balancer distributes incoming network traffic to the servers based on the hash of the URL.
### Netword and Application Layer Load Balancing
These devices are used to improve the performance and reliability of the servers. 
1. **Layer 7 Load Balancing**: In Layer 7 Load Balancing, the load balancer distributes incoming network traffic across multiple servers based on the application layer information of the incoming network traffic. Example: URL Hash Load Balancing, HTTP Header Load Balancing, and Cookie Load Balancing.
    - **URL Hash**: The load balancer distributes incoming network traffic to the servers based on the hash of the URL.
    - **HTTP Header**: The load balancer distributes incoming network traffic to the servers based on the HTTP headers.
    - **Cookie**: The load balancer distributes incoming network traffic to the servers based on the cookies.
1. **Layer 4 Load Balancing**: In Layer 4 Load Balancing, the load balancer distributes incoming network traffic across multiple servers based on the IP address and port number of the incoming network traffic. Example: Round Robin Load Balancing, IP Hash Load Balancing, and Least Connections Load Balancing.
    - **Round Robin**: The load balancer distributes incoming network traffic to the servers in a round-robin fashion. That is, the load balancer distributes the incoming network traffic to the servers in a circular order in an equal manner.
    - **IP Hash**: The load balancer distributes incoming network traffic to the servers based on the hash of the client's IP address.
    - **Least Connections**: The load balancer performs a health check on the servers and distributes incoming network traffic to the server with the least number of active connections.

### Load Balancing Algorithms
Load balancers use different algorithms to distribute incoming network traffic across multiple servers. These algorithms are used to improve the performance and reliability of the servers. Some of the common load balancing methods used in apache are:
1. **bytraffic**: The bytraffic method distributes incoming network traffic to the servers based on the amount of traffic each server can handle. The bytraffic method is used to distribute incoming network traffic to the servers based on the traffic load of the servers.
1. **byrequests**: The byrequests method distributes incoming network traffic to the servers based on the number of requests each server can handle. The byrequests method is used to distribute incoming network traffic to the servers based on the number of requests the servers can handle.
1. **bybusyness**: The bybusyness method distributes incoming network traffic to the servers based on the busyness of the servers. The bybusyness method is used to distribute incoming network traffic to the servers based on the busyness of the servers.
1. **bycpu**: The bycpu method distributes incoming network traffic to the servers based on the CPU usage of the servers. The bycpu method is used to distribute incoming network traffic to the servers based on the CPU usage of the servers.

**lb factor** is a parameter that specifies the weight of the server in the load balancer. The lb factor is used to determine the number of requests that each server can handle, hence, distributes incoming network traffic to the servers based on the weight assigned to each server.



# Steps
This solution uses one NFS server and two web servers on RHEL, one  database server on Ubunut and one load balancer on RHEL.

1. Spinned as configure a RHEL 9 EC2 server on AWS as the NFS server.
1. Created and attached three EBS volumes (each 10GB) to the NFS server.
1. Logged into the NFS server and partitioned the attached volumes using `gdisk`.
1. Installed `lvm2` to enable LVM management and created a volume group and logical volumes using the following commands:
    - `vgcreate` for volume groups.
    - `lvcreate` for logical volumes.
1. Formatted the logical volumes with `mkfs.xfs` and mounted them to `/mnt`.
1. Added entries to `/etc/fstab` for persistent mounting using their `blkid UUID`.
1. Installed `nfs-utils` and configured NFS by editing `/etc/exports` to share directories across instances:
    ```bash
    /mnt/apps my_server_subnet_cidr(rw,sync,no_root_squash,no_all_squash)
    /mnt/logs my_server_subnet_cidr(rw,sync,no_root_squash,no_all_squash)
    /mnt/opt my_server_subnet_cidr(rw,sync,no_root_squash,no_all_squash)
    ```
1. Verified the NFS exports using:
    ```bash
    sudo exportfs -arv
    ```
1. Started and enabled the NFS server using:
    ```bash
    sudo systemctl start nfs-server
    sudo systemctl enable nfs-server
    ```

## Web Server Configuration
1. Spinned as configure two RHEL 9 EC2 servers on AWS as web servers.
1. Used the user script below to install Apache, PHP and setup NFS mounts:
```bash
#!/bin/bash

# Install NFS utilities and create mount points
sudo yum update -y
sudo yum install nfs-utils nfs4-acl-tools -y
sudo mkdir -p /var/www var/logs /mnt/opt

# Mount NFS shared directories
sudo mount -t nfs -o rw,nosuid 172.31.11.52:/mnt/apps /var/www
sudo mount -t nfs -o rw,nosuid 172.31.11.52:/var/logs /var/logs


# Add entries to /etc/fstab
echo "172.31.11.52:/mnt/apps /var/www nfs defaults 0 0" | sudo tee -a /etc/fstab
echo "172.31.11.52:/var/logs /var/logs nfs defaults 0 0" | sudo tee -a /etc/fstab
# echo "172.31.11.52:/mnt/opt /mnt/opt nfs defaults 0 0" | sudo tee -a /etc/fstab

# Reload systemd and mount the filesystems
sudo systemctl daemon-reload
sudo mount -a

# Install Apache and PHP
sudo yum install httpd -y
sudo dnf install php php-opcache php-gd php-curl php-mysqlnd -y

sudo systemctl start httpd
sudo systemctl enable httpd

# Install git and clone the steghub tooling repository
sudo yum install git mysql -y
git clone https://github.com/StegTechHub/tooling.git
cd tooling
sudo cp -rp html    /var/www/
sudo chown -R apache:apache /var/www/html
sudo systemctl restart httpd
sudo setenforce 0
# persist setenforce to 0
sudo sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux

```

## Database Server Configuration
1. Spinned as configure a Ubuntu 24.04 EC2 server on AWS as the database server.
1. Installed MySQL, created a database and user using `mysql_secure_installation`.
1. Created a database and user for the tooling project.
1. Loaded `tooling-db.sql` into the database from web server 1 using the following command:
    ```bash
    mysql -u username -p tooling -h db_server_ip < tooling-db.sql
    ```
1. Updated the `/etc/mysql/mysql.conf.d/mysqld.cnf` file to allow remote connections by setting `bind-address` to `0.0.0.0` and restarted the MySQL service.
1. Opened port 3306 on the database server's security group to allow incoming traffic from the web servers.

## Load Balancer Configuration
1. Spinned and configure ubuntu 24.04 EC2 server on AWS as the load balancer.
1. Install Apache and PHP and configure the load balancer to distribute incoming network traffic across the web servers.

1. Configured local DNS to resolve the domain name to the load balancer's IP address.
1. Tested the setup by accessing the domain name in the browser and verifying that the load balancer distributes incoming network traffic across the web servers.