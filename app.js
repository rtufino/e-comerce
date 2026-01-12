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

// 4. Crear la primera "Ruta" cuando el usuario ingrese a la raiz de nuestra app
app.get('/', (req, res) => {
    res.send('<h1>Servidor de E-commerce Iniciado</h1><p>NPM y Express funcionando...</p>');
});

// 5. Encender el servidor
app.listen(PORT, () =>{
    console.log(`>>> Servidor corriendo en http://localhost:${PORT}`);
    console.log(`>>> Presione Ctrl + c para detener`);
});
