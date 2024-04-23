
import express from "express"
import cors from "cors"

import { ApiResponse } from "./hubspotserver.js";
import { dailyInfo } from "./hubspotserver.js";
import { statusOptions } from "./siteJSON.js";

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para parsear el cuerpo de la solicitud JSON

console.log("SERVER IS ONLINE")


let paginationCounter;


//post es mas seguro ya que se envian peticiones por el cuerpo en lugar de la url con get que no es eficiente 
app.post("/api/search", (req, res) => {
    console.log("USER SEARCH >>>")
    // data recibe una promesa, pasamos el input del form & la opcion a realizar meduiante la url en el body de la petición
    const data = ApiResponse(req.body.userSearch, req.body.userOption, req.body.offsetValue)
        .then((result) => {
            //generamos la respuesta y la mandamos como json para ser consumida si se hace fetch a la url por el verbo GET que al entrar a la url cuenta como peticion 
            res.json(result)

        })

})


app.get("/api/statusOptions", (req, res) => {
    console.log("STATUS OPCS >>>")

    const opc = statusOptions()
    res.json(opc)
})

app.get("/api/dailyInfo", (req,res) =>{
    console.log("dailylInfo")
    const data = dailyInfo()
    .then((result)=>{
        res.json(result)

    })
})


app.listen(3009)





