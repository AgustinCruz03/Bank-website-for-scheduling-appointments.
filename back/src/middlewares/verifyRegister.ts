import { Request, Response, NextFunction } from "express";

const verifyRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, nDni, username, password } = req.body
    if (!name || !email || !birthdate || !nDni || !username || !password) {
        res.status(400).json({message:"Error. Datos incompletos"})
    }else{
        next()
    }
}

export default verifyRegister;

