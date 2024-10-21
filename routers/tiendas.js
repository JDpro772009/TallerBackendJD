import { Router } from "express";
import { allTiendas,citiTiendas,nameTiendas } from "../controladores/tiendas/read.js";
import {createOneTienda,crearVariastiendas} from "../controladores/tiendas/create.js";



const router = Router()

router.get("/all", allTiendas)
router.get("/direccion/:direccion", citiTiendas)
router.get("/nombre/:nombre", nameTiendas)
router.post("/crear",createOneTienda)
router.post("/crearVarias",crearVariastiendas)

   export default router