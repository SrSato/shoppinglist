# Shopping List

Un gestor de listas de la compra simple. Creado como ejemplo de desarrollo sin bases de datos, ni lenguajes de servidor. Sólo frontend y apoyo en programas de terceros.

## 📆 Última revisión: 
- 18/07/2022

## 🔗 Dependencias:

Este desarrollo se basa en tecnologías estandar y en sus versiones vanilla:
- [x] HTML 5
- [x] CSS 3
- [x] JS 2015 (EcmaScript 2015)

En las fases finales hemos añadido un creador y un lector de QR con código de terceros para poder exportar e importar datos de forma rápida y sin tecnologías de backend. En concreto dependemos de estos proyectos:
- [x] Lector de QR 👉🏽 https://www.npmjs.com/package/html5-qrcode
- [x] Creador de QR 👉🏽 https://github.com/parzibyte/ejemplos-javascript/tree/master/generar-qr

Todos estos proyectos son propiedad de sus respectivos autores y es aconsejable que visitéis sus paginas para conocer más detalles sobre sus trabajos y sobre las licencias de uso de cada proyecto.

## 💾 Instalación:

- [x] Descargate o clona el proyecto y súbelo con la misma estructura de carpetas a tu servidor web.

## 🔧 Configuración:

- Por ahora las tiendas posibles se guardan como un JSON asignado a una variable en el /js/tiendas.js y deben editarse a mano si queremos añadir, eliminar o cambiar alguna.

## 📝 ToDo:
- [ ] Separar los scripts de creación y lectura de QRs en sus propios ficheros.
- [ ] Generar el interfaz y el CRUD para la gestión de las tiendas.
- [ ] Pulir el CSS.
