import { NextFunction, Request, Response } from "express";
//el unico problema con esta función de orden superior es que no encontré la forma de sobreescribir
//el middleware de manejadores de errores de express, porque recibe 4 parametros
//err, req, res, next; y mi problema es que no se que tipo es err 
const catchAsync = (controller: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        controller(req, res).catch((err: Error) => next(err));
    };
};
export default catchAsync;