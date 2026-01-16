# Discos Ionic Express Sequelize

## Descripción

**Discos Ionic Express Sequelize** es una aplicación **Full Stack** desarrollada con **Visual Studio Code**, **Node.js**, **Express**, **Sequelize** y **MySQL**, junto con un **frontend en Ionic/Angular**.

El proyecto consiste en una **base de datos de discos de música Heavy Metal**, organizada por distintos estilos y subgéneros dentro del metal.

La aplicación permite gestionar un catálogo completo de discos, incluyendo:

- Visualizar todos los discos registrados  
- Crear nuevos discos  
- Modificar discos existentes  
- Eliminar discos  
- Tomar una **fotografía desde el móvil** para registrar la carátula del disco  

---

## Objetivo del proyecto

Disponer de un sistema para **catalogar y administrar una colección de discos de Heavy Metal**, incorporando imágenes de portadas capturadas directamente desde el móvil.

---

## Base de datos

La base de datos utilizada es **MySQL** y se llama: db_discos_photos


Incluye tablas para:

- Discos  
- Usuarios  
- Fotografías de carátulas  

El archivo de respaldo SQL está incluido en el proyecto: frontend/db_discos_photos.sql


Este archivo permite recrear toda la base de datos fácilmente.

---

##  Tecnologías utilizadas

### Backend
- Node.js  
- Express  
- Sequelize ORM  
- MySQL  

### Frontend
- Ionic  
- Angular  
- Capacitor (uso de cámara del móvil)

### Herramientas
- Visual Studio Code  
- MySQL Workbench  
- Git & GitHub  

---

## Instalación y ejecución

### 1️Clonar el repositorio

Ejecutar el Backend

cd backend
npm install
npm start

Ejecutar el Frontend

cd frontend
npm install
ionic serve

La aplicación web se abre en: http://localhost:8080/home

