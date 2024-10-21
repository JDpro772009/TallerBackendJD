import Promocion from "../../models/Promocion.js"

const crearUnaPromocion = async (req, res,next) => {
  try {
   
    await Promocion.create(req.body)
   
    return res.status(201).json({ success: true })
  } catch (error) {
    next(error)
  }
}

const crearVariasPromociones = async (req, res,next) => {
  try {
   
    await Promocion.insertMany(req.body.Promociones)
  
    return res.status(201).json({ success: true })
  } catch (error) {
    next(error)
  }
}


export {crearUnaPromocion,crearVariasPromociones}
