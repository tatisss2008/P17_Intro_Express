
import express, { Router, Request, Response } from "express";

const router:Router=Router()

//1. DEfinir las rutas
router.get(
    '/mensaje',
    (req:Request, res:Response)=>{
        res.send('Ruta Api')
    }
)

router.get(
    '/despedida',
    (req:Request, res:Response)=>{

        res.send('Hasta pronto!!')
    }
)


export default router