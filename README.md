# Proyecto de Tienda Online de Personajes

Este proyecto es una aplicación web que permite visualizar personajes, agregarlos al carrito, gestionar su cantidad y precio, y realizar pagos a través de un formulario. Utiliza **React.js**, **React Router**, **Context API** y **Fetch API** para interactuar con datos externos.

## Funcionalidades

- Visualización de personajes obtenidos desde una API.
- Agregar personajes al carrito con control de stock.
- Gestión de la cantidad de personajes en el carrito.
- Redirección al Checkout Page para completar el pago.
- Validación de pago con formulario (nombre, apellido y número de tarjeta).
- Vaciar el carrito después de realizar el pago.

## Tecnologías utilizadas

- **React.js**: Para la creación de la interfaz de usuario.
- **React Router**: Para la navegación entre las distintas páginas de la aplicación.
- **Context API**: Para manejar el estado global del carrito de compras.
- **Fetch API**: Para obtener los datos de personajes desde una API externa.
- **Vercel**: Para el despliegue del proyecto en la web. (https://proyecto-final-react-osu1.vercel.app/)

## Estructura del Proyecto

```bash
src/
├── components/
│   ├── CartWidget.jsx         # Componente que muestra el carrito en el header
│   ├── Item.jsx               # Componente para mostrar los personajes individuales
│   └── ItemDetail.jsx         # Componente para mostrar detalles de un personaje
├── context/
│   └── CartContext.jsx        # Contexto para manejar el carrito y su estado
├── pages/
│   ├── CartPage.jsx           # Página del carrito de compras
│   └── ItemDetailPage.jsx     # Página de detalles de un personaje
├── App.jsx                    # Componente principal que maneja las rutas
└── index.js                   # Punto de entrada del proyecto
