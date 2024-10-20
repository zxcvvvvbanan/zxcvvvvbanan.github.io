# Install Nvidia driver in Rocky 9.4

::: warning
Written for specific Rocky(RHEL) Linux distribution
:::


## Intro

Installing Nvidia driver by .run file is your option but unless you need specific driver version for your purpose, I found it kind of annoying 
blocking nouveau, rebuilding initramfs, stopping lightdm service and etc.

Since this is much simpler, give it a try. If it does not work, please refer better guides out there.

### Step 1. Enable EPEL

```
sudo dnf install epel-release
```

### Step 2. Add the official NVIDIA repo

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