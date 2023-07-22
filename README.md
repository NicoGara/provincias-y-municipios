# Provincias y municipios

## Funcionalidad

Esta página muestra dos elementos `select` anidados para seleccionar una provincia y un municipio de Argentina. El código JavaScript carga información de provincias y municipios desde una API pública. Los usuarios pueden seleccionar una provincia en el primer elemento `select` y luego seleccionar un municipio en el segundo elemento `select`.

## Detalles técnicos

La página utiliza dos funciones principales para cargar las opciones de provincias y municipios: `loadProvinces` y `loadTowns`.

### Función loadProvinces

La función `loadProvinces` obtiene las provincias desde una API pública utilizando la función `fetch`. Una vez que se reciben los datos, se crea una cadena de opciones de provincias utilizando un bucle `forEach` para recorrer el arreglo de provincias. Luego, se agrega la cadena de opciones al elemento `select` correspondiente utilizando la propiedad `innerHTML`. Si ocurre un error al obtener los datos, se muestra un mensaje de error en el elemento siguiente al elemento `select`.

### Función loadTowns

La función `loadTowns` funciona de manera similar a la función `loadProvinces`, pero obtiene los municipios de una provincia seleccionada desde una API pública. También crea una cadena de opciones de municipios y la agrega al elemento `select` correspondiente. Si ocurre un error al obtener los datos, se muestra un mensaje de error en el elemento siguiente al elemento `select`.

### Eventos

Cuando el contenido del documento se carga, se llama a la función `loadProvinces` para cargar las opciones de provincias utilizando un evento `DOMContentLoaded`. Cuando se selecciona una provincia en el primer elemento `select`, se llama a la función `loadTowns` para cargar las opciones de municipios utilizando un evento `change`.
