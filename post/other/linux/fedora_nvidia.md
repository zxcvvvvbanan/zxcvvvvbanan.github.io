---
title: Install Nvidia Driver 
date: 2025-4-03T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP -->
Installing NVIDIA drivers on **Fedora 41** is best done using RPM Fusion repositories instead of the `.run` installer. This approach simplifies the setup by avoiding manual tasks like blocking `nouveau`, rebuilding `initramfs`, or stopping display managers. By using `akmod-nvidia` from RPM Fusion, the driver integrates cleanly with system updates and supports Secure Boot via MOK enrollment, making it a more maintainable and user-friendly option.
<!-- AI Summerized -->

<!-- DESC SEP -->
:::

# Install Nvidia driver on Fedora

::: warning
Tested on Fedora 41 
:::

::: info
Q) Why rpmfusion?
1. It is easier. Manual Installation enables you to control Nvidia driver versions, but I won't choose specific version unless there is critial problem.

2. Driver are automatically updated alongside your system updates.

Q) Why do I have to go through MOK enrollment?
1. Related to Secure Boot. Secure Boot is a feature provided by UEFI that ensures only signed bootloaders and kernel moduels are loaded during the boot process. To bypass Secure Boot's restrictions, Linux distributions with Secure Boot enabled use MOK (Machine Owner Key) enrollment. This allows the user to sign the NVIDIA driver kernel module with their own key and then register that key with the system’s UEFI firmware. Once the key is enrolled, the system trusts any kernel modules signed with that key, allowing the NVIDIA module to load without Secure Boot blocking it.
:::

## Keep Your System up-to-date and Install Dependencies

```bash
sudo dnf update
dnf install @base-x kernel-devel kernel-headers gcc make dkms acpid libglvnd-glx libglvnd-opengl libglvnd-devel pkgconfig xorg-x11-server-Xwayland libxcb egl-wayland

 ```

## Block Nouveau Driver to Avoid Conflict

Append blacklist nouveau to blacklist.conf

```bash
echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf
```

## Update grub2 Configuration

```bash
grub2-mkconfig -o /boot/grub2/grub.cfg
```

Because the NVIDIA driver installation made changes to the bootloader configuration—particularly for kernel parameters or initrd setup, you run this to re generate grub2 config.

## Rebuilding initramfs

```bash
dracut /boot/initramfs-$(uname -r).img $(uname -r)
```

We have blocked Nouveau.

## Enable RPMFusion repo

```bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

## Install Nvidia diver

```bash
sudo dnf install akmod-nvidia
```

## After Installation

Asking you to enable 'Nvidia Linux Graphics Driver' will pop up from your software application. Enable it.

![](/assets/blog/pics/gpuinstall/1.png)

Remember your MOK password. UEFI will require this password on your MOK enrollment process.

![](/assets/blog/pics/gpuinstall/2.png)

## Reboot and enroll MOK

![](/assets/blog/pics/gpuinstall/3.png)

Now, reboot. Follow the process or find the guide on Google. There are plenty step-by-step guides.

Do `nvidia-smi` to check whether your Nvidia driver has beeen installed.