# mascotas

## Configuración del proyecto

Debe tener instalado en su equipo Node.js

(Versión de Node.js sugerida: 14.19.0)

Vaya al directorio donde esté el package.jason del proyecto y ejecute:
```
npm install
```

### Compilar y recargar en local
Liego de instalar las dependencias ejecute:
```
npm run serve
```
Abra en su navegador localhost:8080 o el puerto que haya configurado

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Descriprión del proyecto

El proyecto cuenta con una página inicial:

![image](https://user-images.githubusercontent.com/80132275/153859640-e568efb3-7bda-4b65-83cc-8def8253c51d.png)

La cual al momento de crearse el componente App.vue, se realiza una petición GET a la api 'The cat api' para traer la lista de gatos.

Esta página cuenta con un encabezado, un buscador, un botón de añadir gato a la lista y la descripción, que sería como título el nombre del gato, la imagen, datos generales del gato, descipción detallada y un link con más información.

Al lado superior derecho de la página se encuentra el link para ver la lista de los gatos que he añadido, y al lado de este link, un link con el nombre "Categories" que llevará a la página de filtro por categorías.

![image](https://user-images.githubusercontent.com/80132275/153859899-2a785c96-76cb-4cea-8f5f-c9ece0ea3af7.png)


En la página de categorías, cuenta con un buscador, que realiza una consulta GET para traer las imágenes de la categoría seleccionada, y las grafica bajo el buscador, y también cuenta con botón para retornar al menú inicial (home page).

### Componentes del proyecto

#Páginas: /Home y /Category.

- Header de la página.
![image](https://user-images.githubusercontent.com/80132275/153861083-2ee516d0-8a11-4b7d-90c6-d2f0049adb26.png)

- Buscador de gatos.
![image](https://user-images.githubusercontent.com/80132275/153861151-b4f86c19-6142-47eb-8c03-5ba863654220.png)

- Añadir gato al "carrito".
![image](https://user-images.githubusercontent.com/80132275/153861200-a5248fd9-f873-4983-8d66-bde2b63ad8c1.png)

- Mi lista de gatos.
![image](https://user-images.githubusercontent.com/80132275/153861326-5f3ae3e1-5fff-46a6-91ec-541214f7a01b.png)

- Descripción.
![image](https://user-images.githubusercontent.com/80132275/153861440-855de249-2e8e-4d09-997c-cad14577eb93.png)

- Modal de aviso al añadir gato.
![image](https://user-images.githubusercontent.com/80132275/153861555-785d5c80-a95e-4bde-8ce4-b6c0bb2228f8.png)

- Modal de aviso al comprar los gatos.
![image](https://user-images.githubusercontent.com/80132275/153861626-95fddc71-9170-4e3e-96c4-d00b528bf690.png)

- Buscar por categorias.
![image](https://user-images.githubusercontent.com/80132275/153861698-9bc675b7-577d-4f39-81a6-a7b9b8ff2227.png)

- Contenedor de imagenes.
![image](https://user-images.githubusercontent.com/80132275/153861741-df677e0b-21b3-4c21-b337-3cd06e657e45.png)

### Funcionalidad 

-Buscar gato -> actualiza la descripción.

-Añadir gato a la lista.

-Cambiar entre gatos, gracias a las flechas de navegación. (a los lados de la descripción).

-Ver lista de los gatos añadidos.

-Remover gato de la lista

-Filtrar gatos por categoria


### Tecnologías usadas en el proyecto:

-Vue.js 3. (CLI de vue, para construcción general del proyecto).

-Sass-loader, node-sass. (Como pre-procesadores css para los estilos de las páginas).

-Axios (Para consulta a la API).

-Vuex (Para manejar los estados de la aplicación).

-Vue-Router (Para redireccionar a páginas internas en el proyecto).

-Dependencias complementarias: @vue/cli, eslint, core-js.

-Docker compose (Para montar el aplicativo).

