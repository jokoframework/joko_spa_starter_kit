
>
> En esta versión hemos deprecado muchas funcionalidades, como el login y JWT, por motivos de simplicidad.
> Para las versiones anteriores referir a los [releases](https://github.com/jokoframework/joko_spa_starter_kit/releases).
>

# Joko SPA Starter Kit

Proyecto utilitario para empezar a construir una aplicación web SPA (Single Page Application).

Cuenta con funcionalidades y código repetitivo ya fuera de la caja.

Como segundo objetivo este proyecto tiene la intención de establecer un patrón a seguir en cuanto a estructuración y nombramiento de archivos para un proyecto JavaScript,
y también sobre nomenclaturas y patrones de código.

## Funcionalidades
- [Backbone.js](http://backbonejs.org/)
- [Marionette.js](http://marionettejs.com/)
- [Lodash](https://lodash.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Sass](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)
- [Karma](http://karma-runner.github.io/0.12/index.html)
- [Mocha](http://mochajs.org/)
- [Chai](http://chaijs.com/)
- [Webpack](http://webpack.github.io/)
- [Babel](https://babeljs.io/)

## Requerimientos

  * Mac OS X, Windows, o Linux
  * [Node.js](https://nodejs.org/) v5.0.0 o mayor (`node -v` para saber versión actual)

## Inicio Rápido

### Obtener la última versión

Clone en su máquina la última versión de JSSK (Joko SPA Starter Kit):

```shell
$ git clone https://github.com/jokoframework/joko_spa_starter_kit.git app_ejemplo
$ cd app_ejemplo
```

### Ejecutar en desarrollo

```shell
npm install
```

Esto va a instalar las dependencias en tiempo de ejecución y las dependencias de desarrolladores
listadas en el archivo [package.json](../package.json)

```shell
npm run start
```

Este comando va a construir la aplicación, copiando los archivos de código fuente situados en `/src` al directorio `/dist` de salida.

Tan pronto como esta construcción finalice, se podrá acceder a la página inicial lanzando el navegador en la ruta:

> [http://localhost:9000/](http://localhost:9000/)

### Construir para producción

Este comando construye una versión minificada de la aplicaicón en el directorio dist.

```shell
$ npm run build
```

### Corriendo tests

Tests de integración y unitarios se ejecutan con [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/) y [Chai](http://chaijs.com/):

```shell
$ npm test
```

Para detectar posibles errores y problemas se usa [JSHint](http://jshint.com/):

```shell
$ npm run lint
```

## Créditos

Inspirado y construido sobre el [starter.marionette](https://github.com/Rentlio/starter.marionette) de [Rentlio](https://github.com/Rentlio)

## Colaboración

Para colaborar favor referir a nuestra [guía de colaboración](CONTRIBUTING.md).

## Colaboradores

+ [Carlos Carvallo](https://github.com/carloscarvallo)
+ [Guillermo Leguizamon](https://github.com/quesoka)
+ [Jesus Pavia](https://github.com/Pavs10)


## Pendientes

* Documentación con recetas para agregar nuevas vistas de Backbone y otras funcionalidades
* Documentación con recetas para agregar librerías y utilitarios de terceros
* Documentación general y limpieza del código ya existente
