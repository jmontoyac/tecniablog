---
layout: post
title:  "Instalación de Virtualenv para Python"
author: jay
categories: [ tutorial ]
image: assets/images/python-virtual-environments.png
comments: true
featured: true
hidden: false
rating: 4
---

# Virtualenv

Virtualenv es una herramienta que permite la creación de ambientes aislados de Python para tus proyectos. Éste crea un ambiente que tiene sus propios directorios de instalación, que no comparte dependencias con otros ambientes virtualenv (y de manera opcional tampoco tiene acceso a las dependencias globales). Taqmbién se puede configurar  qué versión de Python se quiere usar para cada ambiente individual. Es muy recomendable el uso de ´´´virtualenv´´´ cuando tratamos con aplicaciones Python.

# Instalación

Para instalar virtualenv, ejecutar:
´´´
pip install virtualenv
´´´

# Uso

Si se tiene un proyecto llamado por ejemplo my-project se puede configurar virtualenv para ese proyecto ejecutando:
´´´
cd my-project/
virtualenv venv
´´´

Estos comandos vrean un direcorio ´´´venv/´´´ dentro del proyecto, en el cual se instalan todas las dependencias. El ambiente virtual necesita ser activado (en cada instancia de la terminal que se esté usando en el proyecto):

´´´
source venv/bin/activate
´´´

Al inicio del prompt de la terminal va a a parecer (venv) indicando que se está trabajando dentro de ´´´virtualenv´´´. Cuando se instale algo como esto:

´´´
pip install <paquete>
´´´

Será instalado en el folder ´´´venv´´´ y no hará conflicto con otros proyectos.

Para salir del ambiente virtual, ejecutar:

´´´
deactivate
´´´