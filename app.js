// 1. Importar la librería para crear aplicaciones Web
const express = require('express');

// 2. Crear una instacia de express (aplicación principal)
const app = express();

// 3. Definir un puerto sobre el cual funciona nuestra app
const PORT = 3000;

// --- CONFIGURACIÓN ---
// Establecer EJS como motor de vistas
app.set('view engine', 'ejs');

// Establecer la carpeta publica con elementos estáticos
app.use(express.static('public'));

// -- RUTAS --
app.get('/', (req, res) => {
    // Simular una lista de productos
    const listaProductos = [
        {
            nombre: "Laptop Pro",
            precio: 850,
            imagen: "https://dummyimage.com/200x200/000/fff&text=Laptop"
        },
        {
            nombre: "Audifonos Sony",
            precio: 125,
            imagen: "https://dummyimage.com/200x200/000/fff&text=Audifonos"
        },
        {
            nombre: "Mouse ergonómico",
            precio: 50,
            imagen: "https://dummyimage.com/200x200/000/fff&text=Mouse"
        }
    ];
    // Renderizar la plantilla con los datos proporcionados
    res.render('index', {productos: listaProductos}); 
});

// 5. Encender el servidor
app.listen(PORT, () =>{
    console.log(`>>> Servidor corriendo en http://localhost:${PORT}`);
    console.log(`>>> Presione Ctrl + c para detener`);
});
