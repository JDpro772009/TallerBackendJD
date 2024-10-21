import "dotenv/config.js"
import "../../config/database.js"
import Empleado from "../Empleado.js";

const empleados = [
    { nombre: "Juan Pérez", cargo: "Gerente", salario: 50000 },
    { nombre: "Ana Gómez", cargo: "Gerente", salario: 48000 },
    { nombre: "Luis Fernández", cargo: "Desarrollador", salario: 40000 },
    { nombre: "María López", cargo: "Desarrolladora", salario: 39000 },
    { nombre: "Pedro Martínez", cargo: "Vendedor", salario: 30000 },
    { nombre: "Laura Sánchez", cargo: "Vendedora", salario: 31000 },
    { nombre: "Carlos Ramírez", cargo: "Recursos Humanos", salario: 38000 },
    { nombre: "Sofía Torres", cargo: "Marketing", salario: 37000 },
    { nombre: "Javier Morales", cargo: "Soporte Técnico", salario: 32000 },
    { nombre: "Claudia Díaz", cargo: "Asistente Administrativa", salario: 29000 },
    { nombre: "Andrés Castro", cargo: "Desarrollador", salario: 42000 },
    { nombre: "Marta Ruiz", cargo: "Diseñadora", salario: 36000 },
    { nombre: "Diego Jiménez", cargo: "Analista", salario: 41000 },
    { nombre: "Patricia Romero", cargo: "Analista", salario: 40000 },
    { nombre: "Fernando Ortega", cargo: "Gerente de Proyecto", salario: 55000 },
    { nombre: "Carmen Hernández", cargo: "Administrativa", salario: 33000 },
    { nombre: "Miguel Ángel", cargo: "Técnico", salario: 34000 },
    { nombre: "Isabel Castro", cargo: "Jefa de Ventas", salario: 48000 },
    { nombre: "Fernando Vega", cargo: "Analista Financiero", salario: 46000 },
    { nombre: "Valeria González", cargo: "Desarrolladora", salario: 45000 },
    { nombre: "Ricardo Salinas", cargo: "Diseñador", salario: 38000 },
];
Empleado.insertMany(empleados)
