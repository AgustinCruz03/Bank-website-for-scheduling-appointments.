import { Request, Response } from "express"
import IAppointment from "../interfaces/IAppointment"
import { cancelAppointmentService, createAppointmentService, getAppointmentByIDService, getAppointmentService } from "../services/appointmentService"
// import catchAsync from "../utils/catchAsync"
import { Appointment } from "../entities/Appointment"

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAppointmentService()
        res.status(200).json(appointments)
    } catch (error) {
        res.status(404).json({message:"Error . no se encontraron turnos"})
    }
}

export const getAppointmentByID = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const appointment: Appointment = await getAppointmentByIDService(Number(id))
        res.status(200).json(appointment)
    } catch (error) {
        res.status(404).json({message:"Id not found"})
    }
}

export const agendarTurno = async (req: Request, res: Response) => {
    const { date, time, userId, description } = req.body;
    try {
        const newAppointment: Appointment = await createAppointmentService({ date, time, userId:Number(userId), description })
        res.status(201).json(newAppointment)
    } catch (error) {
        res.status(400).json({message:"Error. Usuario no encontrado"})
    }
}

export const cancelarTurno = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const response: Appointment = await cancelAppointmentService(Number(id))
        res.status(200).json({ message: "Turno Cancelado", appointmentData: response })
    } catch (error) {
        res.status(404).json({ message: "Turno no encontrado, ingrese un Id válido" })
    }
}

