---
layout: post
title:  "Cómo activar Wi-Fi en HP mini 110 con Ubuntu"
author: jay
categories: [ tutorial, linux ]
image: assets/images/hp110mini.jpeg
comments: true
featured: true
hidden: false
rating: 5
---

# Activar Wi-Fi en HP 110 Mini

Al revivir una antigua Netbook HP Mini 110 con Ubuntu, seleccioné la distribución Lubuntu 15.04 (Vivid Vervet) debido al poco consumo de recursos que requiere para su funcionamiento, ver [Lubuntu Vivid Vervet](http://lubuntu.net/blog/lubuntu-1504-vivid-vervet-released).

![hp110](../assets/images/hp-mini-110-negro-1.jpg)

Al terminar de instalar el sistema, el driver de red inalámbrica para la tarjeta de esta computadora no viene presente con la distribución de Lubuntu, por lo que la tarjeta de red WIFI no se puede activar después de esta instalación. El controlador recomendado para esta tarjeta es el Broadcom STA.

Después de terminar la instalación de la distribución Lubuntu, se debe reiniciar la computadora y todo queda funcionando correctamente, excepto la tarjeta de red inalámbrica. Para instalar el controlados recomendado, se debe conectar la computadora a Internet por medio de un cable Ethernet al ruteador e introducir los siguientes comandos para descargar e instalar el controlador STA:

```
sudo apt-get update
sudo apt-get --reinstall install bcmwl-kernel-source
```

Y después reiniciar el sistema. Después del reinicio, se podrá activar o encender la tarjeta WIFI con el interruptor manual que está al frente de la computadora, del lado derecho y configurar la conexión inalámbrica de red.

Para mayor información ver [Descargar Lubuntu](http://lubuntu.net/blog/lubuntu-1504-vivid-vervet-released), Sistema Operativo [Ubuntu](http://ubuntu.com)

