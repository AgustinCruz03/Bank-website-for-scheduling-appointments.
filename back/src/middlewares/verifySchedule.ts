import { Request, Response, NextFunction } from "express";

const verifySchedule = (req: Request, res: Response, next: NextFunction) => {
    // date: fecha del turno.
    // time: hora del turno.
    // userId: id del usuario.
    const { date, time, userId, description } = req.body
    const regexTime = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;//Esta expresión regular verifica si el string dado sigue el formato de una hora válido en el formato de 24 horas, como por ejemplo "14:00".
    const regexDate = /^\d{4}-\d{2}-\d{2}$/     //Esta expresión regular verifica si el string dado sigue el formato de fecha válido "YYYY-MM-DD", como por ejemplo "2004-09-05".

    if (!time.match(regexTime) || !date.match(regexDate) || !userId || !description) {
        res.status(400).json({ error: "Datos invalidos" })
    } else {
        next()
    }
}

export default verifySchedule