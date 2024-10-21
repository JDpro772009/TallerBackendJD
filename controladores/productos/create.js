import Producto from "../../models/Producto.js"

const createOneProduct = async (req, res,next) => {
  try {
   
    await Producto.create(req.body)
   
    return res.status(201).json({ success: true })
  } catch (error) {
    next(error)
  }
}

const crearVariosProductos = async (req, res,next) => {
  try {
   
    await Producto.insertMany(req.body.Productos)
  
    return res.status(201).json({ success: true })
  } catch (error) {
    next(error)
  }
}


export {createOneProduct,crearVariosProductos}
