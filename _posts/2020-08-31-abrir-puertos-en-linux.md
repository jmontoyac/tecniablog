---
layout: post
title:  "Cómo abrir puertos en Linux"
author: jay
categories: [ linux, tutorial ]
image: assets/images/puertos.jpg
featured: true
hidden: true
---
 
 Para abrir puertos en sistemas  Linux RedHat  y derivados, como  CentOS 7  lo podemos hacer por medio del firewall que viene con estos sistemas, que es <em>firewall-cmd</em>.

 Como primer ejemplo, de la siguiente manera se agrega el puerto 443 por protocolo TCP de manera temporal, lo que significa que esta configuración no se mantendrá después de un reinicio de la máquina o de una recarga del servicio de firewall. 
<pre class="wp-block-preformatted">#  firewall-cmd --zone=public --add-port=443/tcp 
success</pre>

 Para hacer que la configuración del puerto sea permanente, se debe agregar el parámetro --permanent y recargar la configuración del firewall. 
 

 
<pre class="wp-block-preformatted">#  firewall-cmd --zone=public --permanent --add-port=443/tcp 
success</pre>
 

 
<pre class="wp-block-preformatted">#  firewall-cmd --reload 
success</pre>
 

 
 Para ver la lista de puertos abiertos actualmente en la zona public, usar el siguiente comando: 
 

 
<pre class="wp-block-preformatted">#  firewall-cmd --zone=public --list-ports </pre>
 