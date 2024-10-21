import "dotenv/config.js"
import "../../config/database.js"
import Comentario from "../Comentario.js"

let comentarios = [
    {
        fecha_comentario: "2024-10-01",
        calificacion: 5,
        comentario: "Excelente producto, superó mis expectativas."
    },
    {
        fecha_comentario: "2024-10-02",
        calificacion: 4,
        comentario: "Muy buen servicio, aunque el envío tardó un poco."
    },
    {
        fecha_comentario: "2024-10-03",
        calificacion: 3,
        comentario: "El producto es bueno, pero llegó con un pequeño defecto."
    },
    {
        fecha_comentario: "2024-10-04",
        calificacion: 2,
        comentario: "No estoy satisfecho, la calidad no es la esperada."
    },
    {
        fecha_comentario: "2024-10-05",
        calificacion: 1,
        comentario: "Totalmente decepcionado, no lo recomendaría."
    },
    {
        fecha_comentario: "2024-10-06",
        calificacion: 5,
        comentario: "Increíble calidad y entrega rápida."
    },
    {
        fecha_comentario: "2024-10-07",
        calificacion: 4,
        comentario: "Muy satisfecho con la compra, volveré a comprar."
    },
    {
        fecha_comentario: "2024-10-08",
        calificacion: 3,
        comentario: "Buen producto, aunque esperaba un poco más."
    },
    {
        fecha_comentario: "2024-10-09",
        calificacion: 5,
        comentario: "Recomendado al 100%, excelente experiencia."
    },
    {
        fecha_comentario: "2024-10-10",
        calificacion: 4,
        comentario: "Todo bien, pero el embalaje podría mejorar."
    },
    {
        fecha_comentario: "2024-10-11",
        calificacion: 2,
        comentario: "Me llegó un producto diferente al que pedí."
    },
    {
        fecha_comentario: "2024-10-12",
        calificacion: 1,
        comentario: "Mal servicio al cliente, no responden."
    },
    {
        fecha_comentario: "2024-10-13",
        calificacion: 5,
        comentario: "Estoy encantado con mi compra, excelente."
    },
    {
        fecha_comentario: "2024-10-14",
        calificacion: 4,
        comentario: "Buen producto, aunque el precio es un poco alto."
    },
    {
        fecha_comentario: "2024-10-15",
        calificacion: 3,
        comentario: "Me gusta, pero creo que hay mejores opciones."
    },
    {
        fecha_comentario: "2024-10-16",
        calificacion: 5,
        comentario: "Simplemente perfecto, volveré a comprar."
    },
    {
        fecha_comentario: "2024-10-17",
        calificacion: 4,
        comentario: "Satisfecho con la compra, aunque el envío fue lento."
    },
    {
        fecha_comentario: "2024-10-18",
        calificacion: 2,
        comentario: "No vale la pena, esperaba más calidad."
    },
    {
        fecha_comentario: "2024-10-19",
        calificacion: 1,
        comentario: "Definitivamente no lo recomendaría."
    },
    {
        fecha_comentario: "2024-10-20",
        calificacion: 5,
        comentario: "Maravilloso, me encanta este producto."
    },
    {
        fecha_comentario: "2024-10-21",
        calificacion: 4,
        comentario: "Buen producto, el servicio fue rápido."
    },
    {
        fecha_comentario: "2024-10-22",
        calificacion: 3,
        comentario: "Está bien, pero no me sorprendió."
    },
    {
        fecha_comentario: "2024-10-23",
        calificacion: 5,
        comentario: "Excelente atención y calidad."
    },
    {
        fecha_comentario: "2024-10-24",
        calificacion: 4,
        comentario: "Me gustó mucho, aunque hay margen de mejora."
    },
    {
        fecha_comentario: "2024-10-25",
        calificacion: 2,
        comentario: "No cumple con lo que promete."
    },
    {
        fecha_comentario: "2024-10-26",
        calificacion: 1,
        comentario: "Un desastre, no volveré a comprar aquí."
    },
    {
        fecha_comentario: "2024-10-27",
        calificacion: 5,
        comentario: "Recomiendo este producto, muy bueno."
    },
    {
        fecha_comentario: "2024-10-28",
        calificacion: 4,
        comentario: "Buen servicio, aunque el producto llegó tarde."
    },
    {
        fecha_comentario: "2024-10-29",
        calificacion: 3,
        comentario: "No está mal, pero podría ser mejor."
    },
    {
        fecha_comentario: "2024-10-30",
        calificacion: 5,
        comentario: "Increíble, estoy muy satisfecho con mi compra."
    }
]


Comentario.insertMany(comentarios)
