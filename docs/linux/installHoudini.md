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

:::warning
Downloading Launcher may differ and will not covered in this post.
:::

## Unzip your tar.gz

```
tar -xzvf houdini-20.*-linux_x86_64_gcc11.2.tar.gz
```

## Locate to unzip folder and run the script

```
./houdini.install
```

## Go ahead and install

Installer requires sudo permission, go ahead and install.
:::tip
Hit spacebar to down scroll license agreement
:::

```

        SIDE EFFECTS SOFTWARE HOUDINI 20.5.370 INSTALLATION

    The installer is not being run as root.  You may not be able to
    install the desired features unless the installer is run as root.
    
    Re-run installer as root (y or n) ==> 

...

                    SIDE EFFECTS SOFTWARE
                      LICENSE AGREEMENT


(*) For greater certainty, SideFX reserves the right to decline
to consent to any relocation of the License from the dedicated
Computer or License Server beyond the number expressly permitted
above, in its sole and absolute discretion.
Do you agree to the above license terms? [yes or no] yes 

```

## After Installation

### Other RHEL distros

Might require libGLU or libxcb.


### Fedora

SELinux is probably blocking your sesinetd from starting.
Below will solve the problem.

:::danger
Do not disable your SELinux.

sesinetd can still work in enforced mode.

Set it to at least 'Permissive'
:::

Register your service to systemd if not.

```
sudo cp /usr/lib/sesi/sesinetd.service /etc/systemd/system/
sudo systemctl enable sesinetd.service
```

#### Result
```
Synchronizing state of sesinetd.service with SysV service script with /usr/lib/systemd/systemd-sysv-install.
Executing: /usr/lib/systemd/systemd-sysv-install enable sesinetd
Created symlink /etc/systemd/system/multi-user.target.wants/sesinetd.service → /etc/systemd/system/sesinetd.service.
```

Now enable your service 
```
sudo systemctl enable sesinetd.service
```

### Wayland ! Move to X11

Houdini will crash on Wayland windowing system. Change to X11

```bash
sudo vim /etc/gdm/custom.conf
```

Uncomment the following line

```
#WaylandEnable=false
```

