import app from "./app";

//1. Iniciar servidor para responder las peticiones REST
const puerto=3000
app.listen(
    puerto,
    ()=>{
        console.log(`El servidor esta operando en el puerto ${puerto}`)
    }
)