---
title: Install Nvidia driver
date: 2024-5-02T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP -->
Installing NVIDIA drivers on Rocky Linux 9.4 can be done efficiently through package repositories rather than using the .run installer file. The process involves enabling EPEL repository, adding the official NVIDIA repo, installing required kernel packages, and installing the NVIDIA driver packages through DNF. This method avoids manual steps like blocking nouveau and rebuilding initramfs, making it a simpler and more maintainable approach for most users.
<!-- AI Summerized -->

<!-- DESC SEP -->
:::

#### Intro

Installing Nvidia driver by .run file is your another option but unless you need specific driver version for your purpose, I found it annoying 
blocking nouveau, rebuilding initramfs, stopping lightdm service and etc.

## Install Nvidia driver in Rocky 9.4

::: warning
Tested on Rocky, Fedora Linux
:::

### Enable EPEL

```bash
sudo dnf install epel-release
```

### Add the official NVIDIA repo

```bash
sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel9/x86_64/cuda-rhel9.repo
```

### Install kernel-devel and kernel-headers used by the drivers

```bash
sudo dnf install kernel-devel-$(uname -r) kernel-headers-$(uname -r)
```

### Install Nvidia driver and misc

```bash
sudo dnf install nvidia-driver nvidia-settings nvidia-smi
```

### Reboot your system and check.

Reboot. That's it.

After reboot, make sure to run `nvidia-smi` to check whether graphics driver has been successfully installed.

Something like this below should appear.

```
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 560.35.03              Driver Version: 560.35.03      CUDA Version: 12.6     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
```


## Install Nvidia driver in Fedora 40

### Keep your system up-to-date

```bash
 sudo dnf update
 ```

### Enable RPMFusion repo

```
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Install Nvidia diver

```bash
sudo dnf install akmod-nvidia
```

### Optional for CUDA 

```bash
sudo dnf install xorg-x11-drv-nvidia-cuda
```

### Reboot

Do `nvidia-smi` to check!