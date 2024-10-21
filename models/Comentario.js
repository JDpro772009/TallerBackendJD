import { Schema,model } from "mongoose";

let coleccion = "Comentarios"

let schema = new Schema({
    fecha_comentario:{type:String,required:true},
    calificacion:{type:Number,required:true},
    comentario:{type:String,required:true}
})

let Comentario = model(coleccion,schema)


export default Comentario