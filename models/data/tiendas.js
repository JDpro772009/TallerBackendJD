import "dotenv/config.js"
import "../../config/database.js"
import Tienda from "../Tienda.js"

const tiendas = [
    {
        nombre: "El Corte Inglés",
        direccion: "Calle Fuencarral, 50",
        telefono: 914197700
    },
    {
        nombre: "Carrefour",
        direccion: "Calle Vallehermoso, 79",
        telefono: 917882900
    },
    {
        nombre: "Mercadona",
        direccion: "Calle Atocha, 55",
        telefono: 900500103
    },
    {
        nombre: "IKEA",
        direccion: "Ctra. Coruña, km 8",
        telefono: 917499400
    },
    {
        nombre: "Decathlon",
        direccion: "Calle de la Palmera, 39",
        telefono: 917429555
    },
    {
        nombre: "FNAC",
        direccion: "Calle Preciados, 28",
        telefono: 917014300
    },
    {
        nombre: "Zara",
        direccion: "Gran Vía, 32",
        telefono: 917020000
    }
];
Tienda.insertMany(tiendas)
