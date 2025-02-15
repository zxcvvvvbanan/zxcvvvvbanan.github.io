---
title: Setting SSH on Fedora
date: 2024-01-03T19:41:00Z
---

::: details Summary (AI Generation)
<!-- DESC SEP -->
Setting up SSH on Fedora Linux involves checking and starting the SSH daemon service, modifying the default port for enhanced security, and properly configuring the SSH settings through the sshd_config file. The process requires administrative privileges and includes verifying the service status, editing configuration files, and restarting the service to apply changes. While straightforward, proper SSH configuration is crucial for secure remote system access and management.
<!-- AI Summerized -->

<!-- DESC SEP -->
:::

# Setting SSH on Fedora

::: warning
Tested on Fedora Linux
:::



## Check whether SSH is running on the server side (Fedora in my case)

```bash
systemctl status sshd.service
```

## Start the `sshd` service

```bash
systemctl start sshd.service
```

## Change the default port

Open the SSH configuration file

```bash
sudo vi /etc/ssh/sshd_config
```

## Find and locate to the following line

```bash
#Port 22
```

## Remove the `#` and change the port number

```bash
Port {YOUR PORT NUMBER}
```

## Save the file and exit the editor

In `vi`, you can do this by pressing `Esc`, then typing `:wq` and pressing Enter.

## Restart the SSH service for the changes to take effect:

```bash
sudo systemctl restart sshd
```

## Ensure the new port is allowed through your firewall

For example, if you're using `ufw`:

```bash
sudo ufw allow {YOUR PORT NUMBER}/tcp
```

::: warning
Usually, this works on other distros, but since we're on an SELinux system, we need to do one more thing.
:::

## Allow SSH connections in SELinux

Add a new port to the SELinux policy to allow SSH connections

Don't disable SELinux. Just add your port to SELinux and keep your system safer. 

```bash
sudo semanage port -a -t ssh_port_t -p tcp {YOUR PORT NUMBER}
```

## Confirm that SSH is listening on the new port

```bash
sudo netstat -tuln | grep {YOUR PORT NUMBER}
```