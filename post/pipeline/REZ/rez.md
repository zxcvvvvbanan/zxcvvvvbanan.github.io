---
title: Install and Configure Rez on Fedora
date: 2024-07-12T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP -->
This provides a detailed guide on how to install and configure Rez on Fedora 41. Since Fedora 41 defaults to Python 3.13, which Rez does not support, the guide suggests using Python 3.11 via Pyenv.
<!-- AI Summerized -->

<!-- DESC SEP -->
:::

# Install and Configure Rez on Fedora


## Initial System Preparation

Fedora 41 sets Python 3.13 as the default, but Rez does not yet support this version. We will use Python 3.11 via `Pyenv` and install Rez.

Install build dependencies:
```bash
sudo dnf install -y make gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel
```

## Install Pyenv

```bash
curl https://pyenv.run | bash
```
```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   270  100   270    0     0     66      0  0:00:04  0:00:04 --:--:--    67
Cloning into '/home/fedoracho/.pyenv'...
```

## Edit Bashrc

Append this to your `~/.bashrc` to use pyenv command on your console.

```
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

## Install Python 3.11

```bash
pyenv install 3.11
```

If you encounter any errors during installation, possibly due to missing packages on Fedora, simply copy and paste the log into ChatGPT, and it will kindly suggest the packages you need to install.

List of packages I was missing are the following. 

`tk-devel sqlite-devel readline-devel openssl-devel ncurses-devel`

```bash
pyenv install 3.11
Downloading Python-3.11.11.tar.xz...
-> https://www.python.org/ftp/python/3.11.11/Python-3.11.11.tar.xz
Installing Python-3.11.11...
Installed Python-3.11.11 to /home/fedoracho/.pyenv/versions/3.11.11
```

## Check Installed Versions

```bash
pyenv versions
* system (set by /home/fedoracho/.pyenv/version)
  3.11.11
```

## Set Default Python to 3.11.11

```bash
pyenv global 3.11.11
```

```bash
pyenv versions
  system (set by /home/fedoracho/.pyenv/version)
* 3.11.11
```

## Rez Install Preparation

I recommend you create a dev directory. I love to put it under `/home/yongjuncho/DEV`.

```bash
git clone https://github.com/AcademySoftwareFoundation/rez
```

The Rez guide suggests running `python ./install.py`, and this installs rez to `/opt/rez`, which requires privileged permissions, and I prefer not to install it there.

Also, note that sudo python won't work because sudo usually resets or modifies the PATH environment. You can either configure sudo to use the same environment as your user shell or specify the exact Python version you want to use with sudo.

Use `python ./install.py {YOUR PATH}` to change installation path.


## Install Rez

```bash
python ./install.py {YOUR PATH}
```

```bash
[notice] A new release of pip is available: 24.0 -> 24.3.1
[notice] To update, run: /home/fedoracho/Dev/opt/rez/bin/python -m pip install --upgrade pip
14:05:05 INFO     changing mode of /home/fedoracho/Dev/opt/rez/bin/rez/rez-3.1 to 755
14:05:05 INFO     changing mode of /home/fedoracho/Dev/opt/rez/bin/rez/rez to 755
14:05:05 INFO     changing mode of /home/fedoracho/Dev/opt/rez/bin/rez/rezolve to 755
14:05:05 INFO     changing mode of /home/fedoracho/Dev/opt/rez/bin/rez/rezolve-3.1 to 755
14:05:05 INFO     changing mode of /home/fedoracho/Dev/opt/rez/bin/rez/_rez-complete-3.1 to 755

SUCCESS!
Rez executable installed to: /home/fedoracho/Dev/opt/rez/bin/rez/rez
Rez Python package installed to: /home/fedoracho/Dev/opt/rez/lib/python3.11/site-packages/rez

To activate Rez, add the following path to $PATH:
/home/fedoracho/Dev/opt/rez/bin/rez

You may also want to source the completion script (for bash):
source /home/fedoracho/Dev/opt/rez/completion/complete.sh
```

Let's set the path:

```bash
export PATH="/home/fedoracho/Dev/opt/rez/bin/rez":$PATH
```

```bash
fedoracho@fedora:~/Dev/rez$ rez-bind --quickstart
Binding platform into /home/fedoracho/packages...
Binding arch into /home/fedoracho/packages...
Binding os into /home/fedoracho/packages...
Binding python into /home/fedoracho/packages...
Binding rez into /home/fedoracho/packages...
Binding rezgui into /home/fedoracho/packages...
Binding setuptools into /home/fedoracho/packages...
Binding pip into /home/fedoracho/packages...

Successfully converted the following software found on the current system into Rez packages:

PACKAGE     URI
-------     ---
arch        /home/fedoracho/packages/arch/x86_64/package.py
os          /home/fedoracho/packages/os/fedora-41/package.py
pip         /home/fedoracho/packages/pip/24.3.1/package.py
platform    /home/fedoracho/packages/platform/linux/package.py
python      /home/fedoracho/packages/python/3.11.11/package.py
rez         /home/fedoracho/packages/rez/3.2.1/package.py
rezgui      /home/fedoracho/packages/rezgui/3.2.1/package.py
setuptools  /home/fedoracho/packages/setuptools/65.5.0/package.py
```

```bash
rez-env python
```

You are now in a Rez-configured environment.

```bash
resolved by fedoracho@fedora, on Thu Dec 19 12:23:41 2024, using Rez v3.2.1

requested packages:
python            
~platform==linux  (implicit)
~arch==x86_64     (implicit)
~os==Fedora-41    (implicit)

resolved packages:
arch-x86_64     /home/fedoracho/packages/arch/x86_64                                             (local)
os-Fedora-41    /home/fedoracho/packages/os/Fedora-41                                            (local)
platform-linux  /home/fedoracho/packages/platform/linux                                          (local)
python-3.11.11  /home/fedoracho/packages/python/3.11.11/platform-linux/arch-x86_64/os-Fedora-41  (local)
```
