
import express ,{ Application, NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()
import router from "./routes/rutas_ejemplo";
import rutas_auth from  './routes/rutas_autorizacion'
//1. crear unobjeto de la clase express

const app: Application =express()

app.use('/auth',rutas_auth)

//implementar las rutas
app.use('/', router)

//2. Respuesta cuando el recurso existe
app.use((req:Request, res:Response, next:NextFunction)=>{
     res.status(404).json({message:'No existe'})
})

//3.respuesta cuando existe un error

export default app