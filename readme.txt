# Instalación y Configuración del Proyecto

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js (v14.x o superior)
- npm (normalmente se instala junto con Node.js)
- Docker (opcional, solo si deseas ejecutar el contenedor Docker)

## Instalación

1. **Clona el Repositorio:**

   git clone https://github.com/FedericoCampi/apiNodejs.git

2. **Instala las Dependencias:**

   cd server
   npm install

## Configuración

1. **Variables de Entorno:**

   Crea un archivo .env en el directorio raíz del proyecto y configura las variables de entorno necesarias. Puedes encontrar un ejemplo de las variables requeridas en el archivo .env.example.

2. **Base de Datos:**

   Asegúrate de tener una instancia de MongoDB ejecutándose y configura la URL de conexión en tu archivo .env.

## Ejecución

- **Modo de Desarrollo:**

  npm run dev

  Esto iniciará el servidor en modo de desarrollo utilizando nodemon, lo que significa que se reiniciará automáticamente cuando detecte cambios en los archivos.

- **Modo de Producción:**

  npm start

  Este comando ejecutará el servidor en modo de producción.

## Pruebas

- **Ejecutar Pruebas:**

  npm test

  Esto ejecutará las pruebas unitarias utilizando Jest.

## Construcción

- **Construir el Proyecto:**

  npm run build

  Esto compilará el código TypeScript en JavaScript en el directorio dist/.

## Ejecución con Docker

- **Construir la Imagen de Docker:**

  npm run build:docker

- **Iniciar el Contenedor Docker:**

  npm run start:docker

  Esto ejecutará el servidor dentro de un contenedor Docker.