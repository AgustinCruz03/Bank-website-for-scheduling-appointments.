import express, { NextFunction, Request, Response } from "express"
import router from "./routes/indexRouter";
import cors from "cors"
// import errDto from "./dto/errorDto";
const morgan = require("morgan")

const server = express()

server.use(cors())
server.use(morgan("dev"))
server.use(express.json())

server.use(router)

// server.use((err:errDto, req:Request,res:Response, next:NextFunction):void => {
//     res.status(err.statusCode || 500).json({ error: err.message });
// })

export default server;

