import Tienda from "../../models/Tienda.js";

let allTiendas = async (req,res,next)=>{
    try {
        let all = await Tienda.find()
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
let citiTiendas = async (req,res,next)=>{
    try {
        let direccion = req.params.direccion
        let direc = await Tienda.find({direccion:direccion})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:direc
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}
let nameTiendas = async (req,res,next)=>{
    try {
        let nombre = req.params.nombre
        let nom = await Tienda.find({nombre:nombre})
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

export {allTiendas,citiTiendas,nameTiendas}