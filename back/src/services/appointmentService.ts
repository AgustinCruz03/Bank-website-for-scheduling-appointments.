import { appointmentModel, userModel } from "../config/data-source";
import AppointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";
import IAppointment from "../interfaces/IAppointment";


export const getAppointmentService = async (): Promise<Appointment[]> => {
    const appointments: Appointment[] = await appointmentModel.find({
        relations:{
            user:true
        }
    })
    if(appointments.length === 0) throw Error("No se encontraron turnos")
    return appointments;
}

export const getAppointmentByIDService = async (id: number): Promise<Appointment> => {
    const resul: Appointment | null = await appointmentModel.findOneBy({ id })
    if (resul) return resul
    else throw Error("Id de Turno no encontrado")
}

export const createAppointmentService = async (data: AppointmentDto): Promise<Appointment> => {
    const appointment: Appointment = appointmentModel.create({
        date: data.date,
        time: data.time,
        userId: data.userId,
        description:data.description
    })
    const appointmentSaved = await appointmentModel.save(appointment);

    const user = await userModel.findOneBy({id:data.userId})
    if(user){
        appointment.user = user
        const result = await appointmentModel.save(appointment)
        return result
    }else{
        throw Error("Usuario no encontrado")
    }
    
}

export const cancelAppointmentService = async (id: number): Promise<Appointment> => {
    const appointment: Appointment | null = await appointmentModel.findOneBy({ id })
    if (appointment) {
        appointment.status = "cancelled"
        await appointmentModel.save(appointment)
        return appointment;
    } else {
        throw Error("Appointment no encontrado, ingrese un Id válido")
    }
}