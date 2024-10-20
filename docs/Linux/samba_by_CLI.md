# Mount Samba in Fedora

::: warning
Tested on Fedora Linux distribution
:::


## Intro

I have my workstation and server separated for multiple purposes. Server has Proxmox VE as host OS and I have installed Truenas(VM 101) and Fedora(VM 102) for Docker, Syncthing, backup regular files from Linux, License server and etc.

I needed to mount network drive on Fedora but working through VNC was painful so I decided do it with terminal.


## Just make sure Samba can be provided by your OS

```
dnf install samba samba-common samba-client
```


## Find your network drive

SAMBA SHARE PATH would be path you set on Truenas. Refer to your Truenas setting.
USERNAME: your truenas user who has access to shared path above


```
sudo smbclient {SAMBA SHARES PATH} -U {USERNAME}
```

In my case, it was

```
sudo smbclient //TRUENAS/directory -U jim

or

sudo smbclient //192.168.100.18/directory -U jim
```

Result,

```
slave@slave:~$ sudo smbclient //TRUENAS/directory -U jim
Password for [WORKGROUP\jim]:
Try "help" to get a list of possible commands.
smb: \> ls
  .                                   D        0  Sat Oct 12 20:58:28 2024
  ..                                  D        0  Sat Oct 12 20:58:28 2024
  jim                                 D        0  Sat Oct 12 20:41:14 2024
  05_Backup                          DA        0  Mon Sep 23 02:10:59 2024
  Illustrator                         D        0  Sat Oct 12 20:58:33 2024
  Tutorial                            D        0  Mon Jul 22 10:20:08 2024
  blog_asssets                        D        0  Sat Jul 27 03:12:43 2024
  02_Photo                           DA        0  Sat Jul 27 03:14:10 2024

                1880999936 blocks of size 1024. 1528222592 blocks available
```

### Mount it

```
mkdir /mnt/smb_share
```

make sure you put server ip. Name does not work.


```
mount -t cifs //[server-ip]/[share-path] /[mount-point]
```

```
sudo mount -t cifs -o username=jim //192.168.100.18/directory /mnt/truenas
```

Now, cd /mnt/truenas

Check the result,

```
slave@slave:/mnt/truenas$ ls
02_Photo  05_Backup  blog_asssets Illustrator  jim  Tutorial
```