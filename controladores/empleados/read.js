import Empleado from "../../models/Empleado.js"

let allEmpleados = async (req,res,next)=>{
    try {
        let all = await Empleado.find()
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
let cargoEmpleado = async (req,res,next)=>{
    try {
        let cargo = req.params.tipo_cargo
        let cargEmp = await Empleado.find({cargo:cargo})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:cargEmp
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}
let salarioEmpleado = async (req,res,next)=>{
    try {
        let salario = req.params.cantidad
        let Empsalario = await Empleado.find({salario:salario})
        let respuesta = req
        next(respuesta)
        return res.status(200).json({
            response:Empsalario
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}

export {allEmpleados,cargoEmpleado,salarioEmpleado}