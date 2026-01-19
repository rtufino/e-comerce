const mongoose = require('mongoose');

// Definir el esquema
const productoSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    precio: {type: Number, require: true},
    categoria: {type: String, require: true},
    imagen: {type: String, default: "https://dummyimage.com/200x200/000/fff"}
});

// Exportar el modelo para usar
module.exports = mongoose.model('Producto', productoSchema);