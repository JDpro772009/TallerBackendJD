import Producto from "../../models/Producto.js"

let allProductos = async (req,res,next)=>{
    try {
        let all = await Producto.find()
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}
let nombreProduct = async (req,res,next)=>{
    try {
        let nombre = req.params.nombre
        let nom = await Producto.find({nombre:nombre})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:nom
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}
let tipoProduct = async (req,res,next)=>{
    try {
        let tipo = req.params.tipo
        let tip = await Producto.find({tipo:tipo})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:tip
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}
let precioProduct = async (req,res,next)=>{
    try {
        let precio = req.params.cantidad
        let pres = await Producto.find({precio:precio})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:pres
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}

export {allProductos,nombreProduct,tipoProduct,precioProduct}