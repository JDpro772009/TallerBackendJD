import Tienda from "../../models/Tienda.js"

const createOneTienda = async (req, res,next) => {
  try {
    let respuesta = req
    next(respuesta)

    await Tienda.create(req.body)
   
    return res.status(201).json({ success: true })
  } catch (error) {
    next(error)
  }
}


const crearVariastiendas = async (req, res,next) => {
  try {
    

    await Tienda.insertMany(req.body.Tiendas)
    let respuesta = req
    next(respuesta)
    return res.status(201).json({ success: true })
  } catch (error) {
    next(error)
  }
}


export {createOneTienda,crearVariastiendas}