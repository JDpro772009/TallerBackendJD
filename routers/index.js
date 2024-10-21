import { Router } from "express";
import tiendasRouter from "./tiendas.js"
import productosRouter from "./productos.js"
import empleadosRouter from "./empleados.js"
import promocionesRouter from "./promociones.js"
import comentariosRouter from "./comentarios.js"
const router = Router()

router.use("/tiendas",tiendasRouter)
router.use("/productos",productosRouter)
router.use("/empleados",empleadosRouter)
router.use("/promociones", promocionesRouter)
router.use("/comentarios", comentariosRouter)

export default router