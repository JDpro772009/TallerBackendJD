import Comentario from "../../models/Comentario.js"

let allcomentarios= async (req,res,next)=>{
    try {
        
        let all = await Comentario.find()
    
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
let fechaComentario = async (req,res,next)=>{
    try {
       
        let fecha = req.params.fecha

        let encontrarCom = await Comentario.find({fecha_comentario:fecha})

        let respuesta = req
        next(respuesta)

        return res.status(200).json({
            response:encontrarCom
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}
let calificacionComentario = async (req,res,next)=>{
    try {
       
        let calificacion = req.params.calificacion

        let encontrarCal = await Comentario.find({calificacion:calificacion})

        let respuesta = req
        next(respuesta)
        
        return res.status(200).json({
            response:encontrarCal
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}



export {allcomentarios,fechaComentario,calificacionComentario}