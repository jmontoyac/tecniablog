---
layout: post
title:  "Cómo borrar el historial de comandos en CentOS"
author: jay
categories: [ tutorial ]
image: assets/images/remove-directory-centos.png
comments: true
featured: false
hidden: false
rating: 4
---

# Cómo borrar el historial de comandos en CentOS

El historial de bash conserva el registro de todos los comandos ejecutados por un usuario en la línea de comandos de Linux. Esto permite volver a ejecutar comandos ejecutados recientemente mediante el uso de la "tecla arriba" o "tecla abajo" para desplazarse a través del archivo histórico de comandos.

En este artículo se muestran dos maneras de eliminar el historial de la lista de comandos en Linux.

La razón principal de remover el historial de la línea de comandos de la terminal Linux es prevenir la vista de esos comandos por parte de otro usuario que esté usando la misma cuenta.

Por ejemplo, si se ejecutó un comando que contenga una contraseña sin encriptar y se quiere prevenir que otro usuario del sistema o algún atacante vea la contraseña, es necesario eliminar el archivo de historial.

Si vemos el siguiente comando, un usuario escribió la contraseña del servidor de base de datos en la línea de comandos.

```bash
$ sudo mysql -u root -pSaa?labD@
```

Si revisamos el archivo de historial de Bash, al final veremos la contraseña que se  introdujo en el comando.

```bash
$ history
```

El archivo de historia **bash_history** normalmente se ubica en el directorio home del usuario **/home/nombreUsuario/.bash_history**.

```bash
$ ls -l /home/jemc/.bash_history
```

Para eliminar una sola línea del archivo, se usa la opción `-d`. Por ejemplo, si se desea borrar un comando en el que se introdujo unna contraseña sin encriptar, como en el ejemploa nterior, se debe encontrar el número de línea en el archivo de historial y ejecutar este comando:

```bash
$ history -d 2038
```

Para eliminar todas las entradas del historial de Bash, es a través del comando `history` con la opción `-c`.

```bash
$ history -c
```

Otra manera de eliminar el archivo de histrial completo es:

```bash
$ cat /dev/null > ~/.bash_history
```

**Nota:** Un usuario normal solo puede ver su propio historial de comandos, pero el usurio `root` puede ver el historial de comandos de todos los usuarios del sistema.

Se puede ahondar más sobre el funcionamiento del historial de Bash en la siguiente liga: [The Power of Linux "History Command" in a Bash Shell](https://www.tecmint.com/history-command-examples/).

Se debe recordar que todos los comandos ejecutados son registrados en el archivo de historial, así que se debe evitar ejecutar comandos con contraseñas sin encriptar.

