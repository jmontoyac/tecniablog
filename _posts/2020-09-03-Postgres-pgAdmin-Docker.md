---
layout: post
title:  "Ambiente Postgres + pgAdmin + Docker Compose"
author: Jay
categories: [ linux, tutorial ]
image: assets/images/puertos.png
featured: true
hidden: true
---

**Ambiente Postgres + pgAdmin + Docker Compose**

En este artículo se aborda el tema de la creación de un ambiente listo para usarse con **Postgres** acompañado de la interfaz web gráfica **pgAdmin**, todo esto definido y configurado en plataforma **Docker** a través de un archivo `docker-compose.yml`.

Se creará un archivo docker-compose.yml con las instrucciones necesarias para crear dos contenedores, uno para el motor de base de datos Postgres y otro para la interfazweb gráfica pgAdmin, a travérs de la cual se hace el manejo de las bases de datos, tablas, etc., de Postgres.

