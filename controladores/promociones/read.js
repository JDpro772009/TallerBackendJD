import Promocion from "../../models/Promocion.js"

let allpromocion= async (req,res,next)=>{
    try {
        let all = await Promocion.find()
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
let fechaInicioPromocion = async (req,res,next)=>{
    try {
        let inicio = req.params.fecha_inic
        let encontrarInc = await Promocion.find({fecha_inicio:inicio})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:encontrarInc
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}
let fechaFinPromocion = async (req,res,next)=>{
    try {
        let fin = req.params.fecha_de_fin
        let encontrarFin = await Promocion.find({fecha_fin:fin})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:encontrarFin
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}
let descuentoPromocion = async (req,res,next)=>{
    try {
        let descuento = req.params.porcentaje
        let encontrarDesc = await Promocion.find({descuento:descuento})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:encontrarDesc
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}

export {allpromocion,fechaInicioPromocion,fechaFinPromocion,descuentoPromocion}