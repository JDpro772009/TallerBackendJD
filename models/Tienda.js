import { Schema,model } from "mongoose";

let coleccion = "Tiendas"

let schema = new Schema({
    nombre:{type:String,required:true},
    direccion:{type:String,required:true},
    telefono:{type:Number,required:true}
})

let Tienda = model(coleccion,schema)


export default Tienda