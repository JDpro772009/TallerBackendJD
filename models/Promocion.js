import { Schema,model } from "mongoose";

let coleccion = "Promociones"

let schema = new Schema({
    descripcion:{type:String,required:true},
    fecha_inicio:{type:String,required:true},
    fecha_fin:{type:String,required:true},
    descuento:{type:Number,required:true}
})

let Promocion= model(coleccion,schema)


export default Promocion