// 1. Importar la librería para crear aplicaciones Web
const express = require('express');
const mongoose = require('mongoose');
// Importar el modelo de Producto
const Producto = require('./models/Producto');

// 2. Crear una instacia de express (aplicación principal)
const app = express();

// 3. Definir un puerto sobre el cual funciona nuestra app
const PORT = 3000;

// --- CONFIGURACIÓN ---
// Establecer EJS como motor de vistas
app.set('view engine', 'ejs');

// Establecer la carpeta publica con elementos estáticos
app.use(express.static('public'));

// ---- CONEXION CON MONGODB ----
mongoose.connect('mongodb://127.0.0.1:27017/tienda')
    .then(() => console.log("[ OK ] Conectado a MongoDB local"))
    .catch(err => console.log("[FAIL] Error de conexión:", err));

// -- RUTAS --
app.get('/', async (req, res) => {
    // Consultamos la base de datos EN CADA petición
    const listaProductos = await Producto.find();

    // Renderizar la plantilla con los datos proporcionados
    res.render('index', { 
        productos: listaProductos, 
        titulo: "Todos los Productos" 
    }); 
});

// Ruta dinámica para categorías
app.get('/categoria/:nombreCategoria', async (req, res) => {
    const cat = req.params.nombreCategoria;
    
    try {
        // Dejamos que MongoDB haga el filtro (más eficiente)
        const productosFiltrados = await Producto.find({ categoria: cat });
        
        res.render('index', { 
            productos: productosFiltrados, 
            titulo: cat.charAt(0).toUpperCase() + cat.slice(1)
        });
    } catch (error) {
        res.status(500).send("Error al filtrar categorías");
    }
});

// 5. Encender el servidor
app.listen(PORT, () =>{
    console.log(`>>> Servidor corriendo en http://localhost:${PORT}`);
    console.log(`>>> Presione Ctrl + c para detener`);
});
