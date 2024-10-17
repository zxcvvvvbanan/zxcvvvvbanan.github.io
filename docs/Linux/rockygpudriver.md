# Install Nvidia driver in Rocky 9.4

::: warning
Written for specific Linux distribution Rocky (RHEL)
:::


## Intro

I know. There are so many guides available online and there are different ways to install Nvidia drivers on Linux but this one does not require manually blocking Nouveau driver by editing modprobe.d and rebuilding kernel initramfs.

Moreover, when you install Nvidia driver by .run file, you have to stop lightdm service and etc.

Anyways, try this on your system, if it does not work, there are plenty guides out there.

### Step 1. enable EPEL by install

```
sudo dnf install epel-release
```

### Step 2.  add the official NVIDIA repository

```
sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel9/x86_64/cuda-rhel9.repo
```

### Step 3. Install kernel-devel and kernel-headers used by the drivers

```
sudo dnf install kernel-devel-$(uname -r) kernel-headers-$(uname -r)
```

### Step 4. Install Nvidia driver and misc

```
sudo dnf install nvidia-driver nvidia-settings nvidia-smi
```

### Step 5. Reboot your system and check.

Reboot. That's it.

After reboot, make sure to run nvidia-smi to check whether it has been successfully installed.

```
nvidia-smi
```

Something like this below should appear.

```
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 560.35.03              Driver Version: 560.35.03      CUDA Version: 12.6     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
```