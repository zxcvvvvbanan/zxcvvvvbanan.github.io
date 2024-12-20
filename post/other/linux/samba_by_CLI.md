---
title: Mount Network Drive through samba
date: 2024-12-17T19:41:00Z
---

::: details Summary (AI Generation)
<!-- DESC SEP -->
Mount network drive on Linux.
<!-- AI Summerized -->
<!-- DESC SEP -->
:::

# Mount Network Drive through samba

::: warning
Tested on Rocky Linux 9.4, Fedora Linux 41
:::


## Intro

I have my workstation and server separated for multiple purposes. Server has Proxmox as host OS to run two VMs (Truenas and Fedora). 

Linux mainly for Docker, Syncthing, backup regular files from Linux, license server and etc. Some could be done by just creating container in Proxmox. 

Anyways, I wanted to mount network drive on Fedora through terminal since no display manager is installed.


## Make sure Samba can be provided by your OS

```bash
dnf install samba samba-common samba-client
```


## Find your network drive

SAMBA SHARE PATH would be path you set on Truenas. Refer to your Truenas setting.
USERNAME: your truenas user who has access to shared path above


```bash
sudo smbclient {SAMBA SHARES PATH} -U {USERNAME}
```

In my case, it was

```bash
sudo smbclient //TRUENAS/directory -U jim

or

sudo smbclient //192.168.100.18/directory -U jim
```

Result,

```bash
*@*:~$ sudo smbclient //TRUENAS/directory -U jim
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

### Make directory to mount

```bash
mkdir /mnt/smb_share
```

### Mount


```bash
mount -t cifs //[server-ip]/[share-path] /[mount-point]
```

```bash
sudo mount -t cifs -o username=jim //192.168.100.18/directory /mnt/truenas
```

Now, cd /mnt/truenas

Check the result,

```bash
*@*:/mnt/truenas$ ls
02_Photo  05_Backup  blog_asssets Illustrator  jim  Tutorial
```

## Edit permission

Add this to your command

`uid={User ID},gid={Group ID},file_mode=0755,dir_mode=0775` 



## To keep the mount after reboot


Ah, so you've noticed that the mount is gone after reboot.

We have to edit `fstab `

```bash
vim /etc/fstab
```

### Append at the end of the file

```bash
//192.168.100.18/directory/fx /mnt/fx cifs username=jim,password={PASSWORD},uid=fedoracho,gid=fedoracho,file_mode=0755,dir_mode=0755 0 0

```

I added uid and file mode but those can be skipped.

