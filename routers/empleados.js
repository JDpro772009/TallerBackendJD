import { Router } from "express";
import { allEmpleados,cargoEmpleado,salarioEmpleado} from "../controladores/empleados/read.js";
import {createOneEmpleado,crearVariosEmpleados} from "../controladores/empleados/create.js";



const router = Router()

router.get("/all", allEmpleados)
router.get("/cargo/:tipo_cargo", cargoEmpleado)
router.get("/salario/:cantidad", salarioEmpleado)
router.post("/crear",createOneEmpleado)
router.post("/crearVarios",crearVariosEmpleados)

   export default router