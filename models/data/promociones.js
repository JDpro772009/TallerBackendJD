import "dotenv/config.js"
import "../../config/database.js"
import Promocion from "../Promocion.js"

let promociones=[
    {
        descripcion: "Descuento del 15% en toda la tienda",
        fecha_inicio: "2024-10-01",
        fecha_fin: "2024-10-15",
        descuento: 15
    },
    {
        descripcion: "2x1 en productos seleccionados",
        fecha_inicio: "2024-10-05",
        fecha_fin: "2024-10-10",
        descuento: 50
    },
    {
        descripcion: "20% de descuento en calzado",
        fecha_inicio: "2024-10-08",
        fecha_fin: "2024-10-20",
        descuento: 20
    },
    {
        descripcion: "Descuento del 10% en compras mayores a $100",
        fecha_inicio: "2024-10-11",
        fecha_fin: "2024-10-30",
        descuento: 10
    },
    {
        descripcion: "25% de descuento en accesorios",
        fecha_inicio: "2024-10-12",
        fecha_fin: "2024-10-25",
        descuento: 25
    },
    {
        descripcion: "Descuentos especiales para estudiantes: 30%",
        fecha_inicio: "2024-10-15",
        fecha_fin: "2024-10-31",
        descuento: 30
    },
    {
        descripcion: "Descuento del 5% en productos de temporada",
        fecha_inicio: "2024-10-18",
        fecha_fin: "2024-10-31",
        descuento: 5
    },
    {
        descripcion: "Descuento del 40% en liquidación de verano",
        fecha_inicio: "2024-10-20",
        fecha_fin: "2024-10-31",
        descuento: 40
    },
    {
        descripcion: "15% de descuento para miembros del club de fidelidad",
        fecha_inicio: "2024-10-01",
        fecha_fin: "2024-10-31",
        descuento: 15
    },
    {
        descripcion: "Descuento del 50% en productos de muestra",
        fecha_inicio: "2024-10-25",
        fecha_fin: "2024-10-30",
        descuento: 50
    }
]

Promocion.insertMany(promociones)
