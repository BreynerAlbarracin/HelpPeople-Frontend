# Prueba Tecnica para Help People
Author: Breyner Albarracin Lozada

## Scripts de inicio
### `npm install`
La aplicación usa como gestor de paquetes predetermiando NPM por lo que el comando debe permitir instalar las dependencias necesarias para compilar y correr el proyecto

### `npm start`
La aplicación corre por defecto en el puerto 3000 por lo que es necesario asegurarse de que esta libre

### `api/rest`
Por defecto el proyecto se configuro para consumir un apis usando localhost por el puerto 7048 (predeterminado por el proyecto .net que acompaña la prueba) de ser necesario un cambio para consumir desde otro host/puerto debe actualizar la clave en .\src\Config\axios.config.js linea 5

``````
const axiosInstance = axios.create({
  baseURL: 'https://localhost:7048',
});
``````

## Estructura del proyecto

| Ruta | Descripción |
| --------- | --------- |
| src   | Carpeta raiz de la solución   |
| src\Apis   | Archivos .js que exportan las funciones de consumo de apis   |
| src\Elements   | Archivos .jsx con expresiones atomicas de elementos html tales como inputs, buttons, selects entre otros   |
| src\Components   | Agrupaciones de Elements que cumplen una función mas concreta y definida   |
| src\Config   | Archivos .js con la configuración de librerias necesarias para el proyeto   |
| src\Enums   |  * Archivos con los valores estaticos requeridos y usando por la aplicación   |
| src\Layouts   |  Estructura para los diversos layouts que usa la aplicación   |
| src\Pages   |  Conjunto de Components agrupados para dar forma a un skeleton que cumple con un proposito como módulo de la aplicación   |
| src\Tools   |  Conjunto de archivos .js y .jsx que brindan apoyo a los diversos componentes de la aplicación   |


\* Al no usar Typescript el concepto de Enum es realmente reemplazado por un json