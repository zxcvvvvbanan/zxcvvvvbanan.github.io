---
Date: 2024-10-20
---

# Install SideFX Houdini in Rocky 9.4

::: warning
Tested on Rocky Linux
:::


## Intro

To whom it may concern.

You have chosen difficult way to do get your work done.

Jokes aside, doing your stuff in different environment might help you through your career especially when
troubleshooting. 

So, I would say it is a good choice!

Let me walk you through.


## Get Houdini install file


```
0.5's password:
Last login: Sun Oct 20 19:38:59 2024 from 192.168.100.11
slave@fedora:~$ sudo ln -s /usr/lib/sesi/sesinetd /etc/init.d/sesinetd
[sudo] password for slave:
ln: failed to create symbolic link '/etc/init.d/sesinetd': File exists
slave@fedora:~$ sudo cp /usr/lib/sesi/sesinetd.service /etc/systemd/system/
slave@fedora:~$ sudo systemctl start sesinetd.service
Job for sesinetd.service failed because the control process exited with error code.
See "systemctl status sesinetd.service" and "journalctl -xeu sesinetd.service" for details.
slave@fedora:~$ sudo systemctl restart sesinetd.service
Job for sesinetd.service failed because the control process exited with error code.
See "systemctl status sesinetd.service" and "journalctl -xeu sesinetd.service" for details.
slave@fedora:~$ sudo systemctl enable sesinetd.service
Synchronizing state of sesinetd.service with SysV service script with /usr/lib/systemd/systemd-sysv-install.
Executing: /usr/lib/systemd/systemd-sysv-install enable sesinetd
Created symlink /etc/systemd/system/multi-user.target.wants/sesinetd.service → /etc/systemd/system/sesinetd.service.
slave@fedora:~$ sudo systemctl restart sesinetd.service
slave@fedora:~$ sudo systemctl start sesinetd.service
slave@fedora:~$ reboot
```