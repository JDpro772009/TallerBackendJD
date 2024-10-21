import { Schema,model } from "mongoose";

let coleccion = "Empleados"

let schema = new Schema({
    nombre:{type:String,required:true},
    cargo:{type:String,required:true},
    salario:{type:Number,required:true}
})

let Empleado = model(coleccion,schema)


export default Empleado