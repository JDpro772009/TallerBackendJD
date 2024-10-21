import Empleado from "../../models/Empleado.js"

const createOneEmpleado = async (req, res,next) => {
  try {
   
    await Empleado.create(req.body)
   
    return res.status(201).json({ success: true })
  } catch (error) {
    next(error)
  }
}
const crearVariosEmpleados = async (req, res,next) => {
  try {
   
    await Empleado.insertMany(req.body.Empleados)
  
    return res.status(201).json({ success: true })
  } catch (error) {
    next(error)
  }
}

export {createOneEmpleado,crearVariosEmpleados}