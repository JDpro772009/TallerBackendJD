import { Router } from "express";
import {allpromocion,fechaInicioPromocion,fechaFinPromocion,descuentoPromocion} from "../controladores/promociones/read.js";
import {crearUnaPromocion,crearVariasPromociones} from "../controladores/promociones/create.js";



const router = Router()

router.get("/all", allpromocion)
router.get("/fechaInicio/:fecha_inic", fechaInicioPromocion)
router.get("/fechaFin/:fecha_de_fin",fechaFinPromocion)
router.get("/descuento/:porcentaje",descuentoPromocion)
router.post("/crear",crearUnaPromocion)
router.post("/crearVarias",crearVariasPromociones)



   export default router