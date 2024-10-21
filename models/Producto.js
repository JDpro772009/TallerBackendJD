import { Schema,model } from "mongoose";

let coleccion = "Productos"

let schema = new Schema({
    nombre:{type:String,required:true},
    marca:{type:String,required:true},
    tipo:{type:String,required:true},
    precio:{type:Number,required:true}
})

let Producto = model(coleccion,schema)


export default Producto