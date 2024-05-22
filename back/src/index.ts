import server from "./server"
import { PORT } from "./config/envs"

import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(res=>{
    console.log("Conexion con la base de datos,");
    server.listen(PORT, () => {
        console.log(`Server listening in port: ${PORT}`)
    });
})
