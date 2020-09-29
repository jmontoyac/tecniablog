---
layout: post
title:  "Permisos de llaves SSH y archivos relacionados"
author: jay
categories: [ tutorial, linux ]
image: assets/images/ssh-cliente-servidor.jpg
featured: false
hidden: false
rating: 4.0
---
# Permisos de archivos SSH

Los archivos relacionados a llaves ssh requieren permisos de lectura con 
ciertas resrtricciones para funcionar de manera correcta, a continuación 
se muestran  los permisos que corresponden a cada archivo:

```
chmod 700 ~/.ssh
chmod 644 ~/.ssh/authorized_keys
chmod 644 ~/.ssh/known_hosts
chmod 644 ~/.ssh/config
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/github_rsa
chmod 644 ~/.ssh/github_rsa.pub
chmod 600 ~/.ssh/mozilla_rsa
chmod 644 ~/.ssh/mozilla_rsa.pub
```