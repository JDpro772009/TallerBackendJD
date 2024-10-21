import { Router } from "express";
import {allcomentarios,fechaComentario,calificacionComentario} from "../controladores/comentarios/read.js";
import {crearUnComentario,crearVariosComentarios} from "../controladores/comentarios/create.js";



const router = Router()

router.get("/all", allcomentarios)
router.get("/fechaComentario/:fecha", fechaComentario)
router.get("/calificacion/:calificacion",calificacionComentario)
router.post("/crear", crearUnComentario)
router.post("/crearVarios", crearVariosComentarios)



   export default router