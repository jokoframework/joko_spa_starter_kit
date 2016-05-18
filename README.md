## Joko SPA Starter Kit

Proyecto utilitario para empezar a construir una aplicación web SPA (Single Page Application). 

Cuenta con funcionalidades y código repetitivo ya fuera de la caja.

Como segundo objetivo este proyecto tiene la intención de establecer un patrón a seguir en cuanto a estructuración y nombramiento de archivos para un proyecto JavaScript,
y también sobre nomenclaturas y patrones de código.

### Funcionalidades
  * Página template de login de usuarios 
  * Módulo de autenticación con [JWT](https://jwt.io/introduction/)
  * Servidor Mock [Express](http://expressjs.com/) con API de prueba para autenticación JWT
  * Twitter Bootstrap
  * jQuery
  * Backbone
  * Marionette
  * Validación de formularios con [Parsleyjs](http://parsleyjs.org/)
  * Manejador de errores de peticiones AJAX
  * Wrapper construido sobre [Noty](http://ned.im/noty/#/about) para mensajes y notificaciones
  * Templates con [Handlebars](http://handlebarsjs.com/)

### Requerimientos

  * Mac OS X, Windows, o Linux
  * [Node.js](https://nodejs.org/) v4.4.4 o mayor (`node -v` para saber versión actual)
  * [npm](https://docs.npmjs.com/) v3.8.9 o mayor (`npm -v` para saber versión actual)
  
### Estructura de directorio

Antes de empezar, tómese unos minutos para mirar como luce la estructura de directorio del proyecto:

```
+-- /app/                       # El código de la aplicación
¦   +-- /assets/                # Imágenes y otros recursos de la aplicación
¦   +-- /js/                    # Código Marionette/Backbone de la aplicación
    ¦   +-- /controllers/       # Controlador de rutas de Marionette
    ¦   +-- /lib/               # Librerias y utilitarios de Joko y adicionales que se vayan creando
	¦   +-- /models/            # Modelos de Backbone
	¦   +-- /routers/           # Router de Marionette con las rutas de la aplicación
	¦   +-- /templates/         # Templates con notación de Handlerbars
	¦   +-- /views/             # Vistas de Backbone
	¦   +-- app.js              # Aplicación de Marionette con métodos globales
	¦   +-- config.js           # Configuración global de aplicación
	¦   +-- errorhandler.js     # Manejador genérico de errores para peticiones AJAX
	¦   +-- main.js             # Punto de entrada de nuestra aplicación, aqui empieza todo :)
¦   +-- /styles/                # CSS de la aplicación
¦   +-- /vendor/                # JS y CSS de terceros que queremos congelar para esta aplicación
¦   +-- index.html              # La página HTML que carga la aplicación que desarrollamos en /js/
+-- /node_modules/              # Librerías y utilitarios de terceros
+-- /public/                    # La carpeta para salida de archivos compilados
+-- /server/                    # Servidor Express
+-- /tasks/                     # Scripts para automatizar la construcción de la aplicación
¦   +-- /assets.js              # Copia las imágenes al directorio public
¦   +-- /browserify.js          # Convierte nuestros código fuente JS en algo ejecutable en un browser, los copia a /public/
¦   +-- /paths.js               # Utilitario que contiene las rutas de entrada y salida
¦   +-- /serverMock.js          # Lanza un servidor de pruebas Express
¦   +-- /styles.js              # Procesa los archivos de estilo CSS y los copia a un directorio de /public/
+-- gulpfile.js                 # Script padre que ejecuta las tareas de /tasks/
+-- package.json                # Lista de librerías y utilidades de terceros
```

### Inicio Rápido

#### 1. Obtener la última versión

Clone en su máquina la última versión de JSSK (Joko SPA Starter Kit):

```shell
$ git clone https://github.com/jokoframework/joko_spa_starter_kit.git app_ejemplo
$ cd app_ejemplo
```

#### 2. Ejecutar `npm install`

Esto va a instalar las dependencias en tiempo de ejecución y las dependencias de desarrolladores 
listadas en el archivo [package.json](../package.json)


#### 3. Ejecutar `npm run start:mock`

Este comando va a construir la aplicación, copiando los archivos de código fuente situados en `/app` al directorio `/public` de salida. 

Tan pronto como esta construcción finalice, se lanzará un servidor de pruebas abriéndose el navegador en la ruta:

> [http://localhost:9000/](http://localhost:9000/)

Se puede acceder a la aplicación usando las credenciales de prueba:
```
email: clark@nomail.com
clave: 12345
```

### TODO

* Documentación con recetas para agregar nuevas vistas de Backbone y otras funcionalidades
* Documentación con recetas para agregar librerías y utilitarios de terceros
* Documentación general y limpieza del código ya existente
* Scripts para construir la aplicación en modo desarrollo (sin servidor de pruebas)
* Scripts para construir la aplicación en modo producción