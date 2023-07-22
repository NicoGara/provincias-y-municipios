# Provincias y municipios

## Funcionalidad

Esta página muestra dos elementos `select` anidados para seleccionar una provincia y un municipio de Argentina. El código JavaScript carga información de provincias y municipios desde una API pública.

## Detalles técnicos

La función `loadProvinces` obtiene las provincias y las agrega como opciones en el primer elemento `select`. La función `loadTowns` obtiene los municipios de una provincia seleccionada y los agrega como opciones en el segundo elemento `select`. Cuando el contenido del documento se carga, se llama a la función `loadProvinces` para cargar las opciones de provincias. Cuando se selecciona una provincia, se llama a la función `loadTowns` para cargar las opciones de municipios.
