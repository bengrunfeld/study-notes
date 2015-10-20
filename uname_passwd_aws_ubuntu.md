# Enable Username and Password Access to AWS Ubuntu Instance

1. `ssh` into your AWS Instance
2. `sudo vi /etc/ssh/sshd_config`
3. Set `PasswordAuthentication` to `yes`
4. Save and Exit
5. `sudo vi /etc/ssh/ssh_config`
6. Uncomment `PasswordAuthentication yes`
7. Save and Exit
8. `sudo restart ssh`
9. `sudo passwd ubuntu`
10. Set new password for ubuntu
11. `exit` out of your `ssh` session

Now you can log in with `ssh ubuntu@PUBLIC_DNS` and it will prompt you for your password. 


# Enable Username and Password Access to AWS CentOS 6.* Instance

1. `ssh` into your AWS Instance
2. `sudo vi /etc/sshd/sshd_config`
3. Set `PasswordAuthentication` to `yes`
4. Save and Exit
8. `sudo passwd` (will reset for root)
10. `sudo reboot`
12. `exit` out of your `ssh` session

Now you can log in with `ssh root:password@PUBLIC_DNS` and it will prompt you for your password. 



