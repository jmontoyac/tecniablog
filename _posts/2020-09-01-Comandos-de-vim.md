---
layout: post
title:  "Comandos simples de Vim"
author: jay
categories: [ linux, tutorial ]
image: assets/images/vim.png
featured: true
hidden: true
---

**Comandos simples de Vim**



1. Modo de inserción (En el que se puede escribir como en cualquier editor de textos normal)

2. Modo de comandos (En el que se puede dar comandos al editor. Se accede al modo de comandos presionando `ESC`)



La mayoría de los siguientes comandos se dan en modo de comandos



​    `x` - para borrar caracter

​    `u` - deshace el último comando y `U` deshace la última línea

​    `CTRL-R` para rehacer (redo)

​    `A` - agregar texto al final

​    `:wq` - grabar y salir

​    `:q!` - salir sin grabar

​    `dw` - mueve el cursor al inicio de la palabrapara borrar la palabra

​    `2w` - mueve el cursor 2 palabras hacia adelante

​    `3e` - mueve el cursor al final de la tercera palabra hacia adelante

​    `0` (cero) - mueve el cursor al inicio de la línea

​    `d2w` - borra 2 palabras, se puede cambiar el número para borrar la cantidd de palabras consecutivas, ej. `d3w`

​    `dd` - borra la línea actual y `2dd` borra 2 líneas consecutivas



------

El formato para un comando de cambio es: `operador [número] acción`



**operador** - es lo que se desea hacer, tal como d para borrar (delete)

**[número]** - es un contador opcional para repetir la acción

**acción** - actúa sobre el texto a modificar, tal como `w` para palabra (word), `$` para fin de línea, etc.



​    `p` - pega el texto previamente borrado después del cursor (pulsa dd para borrar la línea y almacenbarla en un registro de Vim, y usa el comando p para pegar la línea)

​    `r` - reemplaza la letra, ej. teclea re para reemplazar la letra con e

​    `ce` - cambia hasta el final de la palabra (ej., con el cursor en la u de lubw, borrará ubw)    

​    `ce` - borra la palabra y deja en modo de inserción

​    `G` - mueve el cursor al final del archivo

​    `gg` - mueve el cursor al inicio del archivo

​    `:n` - ir a la línea n

​    `/texto` - buscar texto, n repite la búsqueda

​    `:s/texto/nuevoTexto/g` - reemplaza texto por nuevoTexto global en el archivo (g)

​    `?` búsqueda hacia atrás

​    `:!` para ejecutar comandos de shell, ej. :!ls

​    `:w` - guarda el archivo

​    `v` - inicia el modo visual para seleccionar líneas y ejecutar operaciones como d (delete)

​    `:r` - nombreDeArchivo inserta el contenido del archivo en el archivo actual  

​    `R` - reemplaza más de un caracter

​    `y` - comando para copiar texto en modo visual y p para pegarlo

​    `o` - inserta una línea abajo del cursor e inicia el modo de inserción7

​    `O` - inserta una línea arriba del cursor

​    `a` - abre el modo de inserción después del cursor

​    `A` - abre el modo deo inserción al final de la línea

​    `e` - mueve el cursor al final de la palabra

​    `y` - copia el texto, p pega el texto

​    `R` - inicia el modo Replace (Reemplazar) hasta que se presione ESC

​    `ctrl-w` salta entre ventanas

Para ver todos los comandos que inicien con una letra, escribir `:e` y presionar `ctrl+D`, después presionr `TAB` para completar el comando.