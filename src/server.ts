import express  from "express";
import router from "./router";
import  colors  from "colors";
import cors, { type CorsOptions } from 'cors'
import morgan from 'morgan'
import db from "./config/db";
import swaggerSpec , { swaggerUiOptions } from "./config/swagger";
import SwaggerUi  from "swagger-ui-express";

export async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.blue.bold('conexion Establecidad'))
    } catch (error) {
        console.log(colors.red.bold('Hubo un error en la conexion '))
    }
}

connectDB()
// Instancia de Express
const server = express()

//Permitir conexion
const corsOption : CorsOptions = {
    origin : function(origin, callback){
        // console.log('Origin recibido:', origin)
        // console.log('FRONTEND_URL:', process.env.FRONTEND_URL)
        
        if(origin === process.env.FRONTEND_URL){
            callback(null, true)  
        } else {
            callback(new Error('Error de CORS')) 
        }
    }
}
server.use(cors(corsOption))
 
//leer datos de Formularios
server.use(express.json())

server.use('/api/products', router)

server.use(morgan('dev'))

//Docs Server Swagger
server.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server