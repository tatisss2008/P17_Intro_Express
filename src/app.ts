
import express ,{ Application, Request, Response,NextFunction } from 'express'
import passport from 'passport'



import dotenv from 'dotenv'
dotenv.config()
import router from './routes/rutas_ejemplo'
import rutas_auth from  './routes/rutas_autorizacion'
import miEstrategia from './config/passport'

//1. crear unobjeto de la clase express

const app: Application =express()

app.use('/auth',rutas_auth)

//Proteger las rutas siguientes
 passport.use(miEstrategia)
 app.use(passport.initialize())

//implementar las rutas
app.use('/', passport.authenticate('jwt',{session:false}), router)

//2. Respuesta cuando el recurso existe
app.use((req:Request, res:Response, next:NextFunction)=>{
     res.status(404).json({message:'No existe'})
})

//3.respuesta cuando existe un error

export default app