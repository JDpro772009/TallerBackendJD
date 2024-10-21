import Comentario from "../../models/Comentario.js"

const crearUnComentario = async (req, res,next) => {
  try {

    
    await Comentario.create(req.body)
 
    return res.status(201).json({ success: true })
    
  } catch (error) {
 next(error)
  }
}

const crearVariosComentarios = async (req, res,next) => {
  try {
    
    await Comentario.insertMany(req.body.Comentarios)

    return res.status(201).json({ success: true })

  } catch (error) {
  
    next(error)
  }
}


export {crearUnComentario,crearVariosComentarios}
