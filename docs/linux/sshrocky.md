
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

Open the SSH configuration file:

```bash
sudo vi /etc/ssh/sshd_config
```

## Find and locate to the following line:

```bash
#Port 22
```

## Remove the `#` and change the port number:

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

Add a new port to the SELinux (Security-Enhanced Linux) policy to allow SSH connections:

```bash
sudo semanage port -a -t ssh_port_t -p tcp {YOUR PORT NUMBER}
```

## Confirm that SSH is listening on the new port

```bash
sudo netstat -tuln | grep {YOUR PORT NUMBER}
```