// app.js




// Array de productos (cuadros)
const cuadros = [
    { id: 1, nombre: "La Soledad", precio: 650000, img: "imagenes/pintura_1.jpg"},
    { id: 2, nombre: "Otoño", precio: 930000, img: "imagenes/pintura_13.jpg" },
    { id: 3, nombre: "Flor Marchita", precio: 180000, img: "imagenes/pintura_2.jpg" },
    { id: 4, nombre: "Bosque", precio: 250000, img: "imagenes/pintura_15.jpg" },
    { id: 5, nombre: "Naturaleza", precio: 130000, img: "imagenes/pintura_11.jpg" },
    { id: 6, nombre: "Abstracto", precio: 220000, img: "imagenes/pintura_7.jpg" },
    { id: 7, nombre: "Moderno", precio: 160000, img: "imagenes/pintura_9.jpg" },
    { id: 8, nombre: "Clásico ", precio: 170000, img: "imagenes/pintura_10.jpg" },
    { id: 9, nombre: "Paisaje ", precio: 190000, img: "imagenes/pintura_14.jpg" },
    { id: 10, nombre: "Realismo", precio: 110000, img: "imagenes/pintura_8.jpg" },
    { id: 11, nombre: "Cuadrados", precio: 130000, img: "imagenes/pintura_3.jpg" },
    { id: 12, nombre: "Manos Pintadas", precio: 140000, img: "imagenes/pintura_4.jpg" },

];
// Seleccionar el contenedor de productos y carrito
const productGrid = document.getElementById('product-grid');
const cartCount = document.getElementById('cartCount');
const carritoLista = document.getElementById('carrito-lista'); // Este div contendrá los productos añadidos
let carrito = [];

// Función para mostrar los cuadros
function mostrarCuadros() {
    cuadros.forEach(cuadro => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Formatear el precio con toLocaleString
        const precioFormateado = cuadro.precio.toLocaleString('es-ES');

        productCard.innerHTML = `
            <img src="${cuadro.img}" alt="${cuadro.nombre}">
            <h3>${cuadro.nombre}</h3>
            <p>Precio: $${precioFormateado}</p>
            <button onclick="agregarAlCarrito(${cuadro.id})">Agregar al carrito</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Función para agregar un cuadro al carrito
function agregarAlCarrito(id) {
    const cuadroSeleccionado = cuadros.find(cuadro => cuadro.id === id);
    carrito.push(cuadroSeleccionado);
    actualizarCarrito();
}

// Función para eliminar un cuadro del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(cuadro => cuadro.id !== id);  // Filtrar el carrito para eliminar el cuadro seleccionado
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    // Actualiza el contador del carrito
    cartCount.textContent = carrito.length;

    // Mostrar los productos en el carrito
    carritoLista.innerHTML = '';  // Limpiar el contenido actual
    carrito.forEach(cuadro => {
        const item = document.createElement('div');
        item.classList.add('cart-item');

        // Formatear el precio con toLocaleString
        const precioFormateado = cuadro.precio.toLocaleString('es-ES');

        item.innerHTML = `
            <p>${cuadro.nombre} - $${precioFormateado}</p>
            <button onclick="eliminarDelCarrito(${cuadro.id})">Eliminar</button>
        `;
        carritoLista.appendChild(item);
    });
}

// Inicializar la página mostrando los cuadros
mostrarCuadros();
