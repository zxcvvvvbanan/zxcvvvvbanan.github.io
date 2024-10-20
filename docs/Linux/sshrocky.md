# Setting SSH on Feodra

::: warning
Tested on Fedora Linux distribution
:::


## Intro
d

## Check Whether SSH is Running on Server Side (Fedora in my case)

```
systemctl status sshd.service
```


## Start sshd Service

```
systemctl start sshd.service
```

## Change Default Port

Open 

```
sudo vi /etc/ssh/sshd_config
```

2. Locate the following line:
   ```
   #Port 22
   ```

3. Remove the `#` and change the port number to 5156:
   ```
   Port 5156
   ```