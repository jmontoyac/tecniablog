---
layout: post
title:  "Ubuntu, privilegios de usuario sudo sin password"
author: jay
categories: [ tutorial ]
image: assets/images/tux.jpeg
comments: true
featured: false
hidden: false
rating: 5
---

# Otorgar privilegios de administrador a un usuario en Ubuntu - sudo

**Ubuntu 20.04**

El comando `sudo` es un mecanismo para otorgar a usuarios normales privilegios de administrador, que comunmente están disponibles solo para el usuario root. Esta guía  muestra una manera sencilla de crear un usuario con acceso sudo en **Ubuntu**.

Los siguientes pasos deben ser ejecutados desde la cuenta del usuario `root`:

1. Respaldar el archivo `/etc/sudoers` con el siguiente comando:
```bash
$ cp /etc/sudoers /root/sudoers.bak
```
2. Editar el archivo `/etc/sudoers` usando el siguiente comando:
```bash
$ visudo
```
3. Agregar o editar la línea como sigue en el archivo `/etc/sudoers` para el usuario llamado 'bob':
```bash
bob    ALL=(ALL) NOPASSWD:ALL
```
4. Guardar el archivo y saler del editor.

##¿Cómo probarlo?

Se puede probar que el procedimiento haya sido correcto por medio del siguiente comando, ejecutado desde la cuenta de `bob`:
```bash
[bob@server]$ sudo /bin/systemctl restart httpd.service
```