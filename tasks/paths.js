/**
 * Definimos las rutas a las carpetas que deben ser procesadas por las tareas de gulp
 * # src: el código de nuestra aplicacion: index.html, templates (arhivos *.hbs), JS, CSS
 * # dest: destino de donde debemos copiar nuestros archivos para desarrollo
 * # vendor: archivos de terceros que deben ser procesos
 * # assets: todavia no está definido
 * # node: módulos JS de node descargados con NPM
 */
module.exports = {
  src: './app/',
  dest: './public/',
  vendor: './app/vendor/',
  assets: './app/assets/',
  node: './node_modules'
};
