import { Router } from "express";
import { allProductos,nombreProduct,tipoProduct,precioProduct } from "../controladores/productos/read.js";
import {createOneProduct,crearVariosProductos} from "../controladores/productos/create.js";



const router = Router()

router.get("/all", allProductos)
router.get("/nombre/:nombre", nombreProduct)
router.get("/tipo/:tipo",tipoProduct )
router.get("/precio/:cantidad", precioProduct)
router.post("/crear",createOneProduct)
router.post("/crearVarios",crearVariosProductos)

   export default router