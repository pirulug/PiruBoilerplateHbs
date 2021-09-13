<p align="center">
  <br>
  <img width="400" src="./src/img/logo.png" alt="Awesome Bootstrap Logo">
  <br>
  <br>
</p>

<!-- ![Logo GeleBatmHBS](./src/img/logo.png) -->

# PiruBoilerplateHbs

Es una sensilla estructura para plantillas Html estaticos.

## Caracteristicas de GeleBatmHBS

* Usa Webpack 5 para automarizar las tareas
* Esta basado en Sass y handlebars.
* Compila Hbs y actualiza el navegador con cada cambio
* Captura errores en Sass, Hbs y Js evitando que gulp se detenga.
* Crea los sourcemaps de los archivos compilados

## Modo de uso

1. Cree un fork de este repositorio y clonelo en local (o descargue este repositorio por zip).
2. Ejecute `npm install` (asegurese de tener npm actualizado y Nodejs en v12 como minimo)
3. Ejecute `npm run build` para compilar sus archivos para produccion
4. Ejecute `npm run dev` para compilar sus archivos para desarrollo
5. Ejecute `npm run watch` para escuchar los cambios y compilarlos
6. Ejecute `npm start` para iniciar servidor local y reflejar cambios al instante
7. Disfrute

## Estructura

1. La carpeta **src** contiene la estructura de archivos con la que trabajará
2. La carpeta **dist** contiene los archivos compilados que deberan llevarse a producción
3. Para Sass importe sus partials desde `app.scss`, el orden está indicado en el mismo archivo
4. Para Hbs, la carpeta `pages` contiene las paginas del proyecto y la carpeta `includes` los bloques.
5. Para Js, la carpeta `modules` contiene los módulos que serán importados desde `app.js`