//data transfer object (dto)

interface AppointmentDto {
    date: Date,
    time: string,
    userId: number,
    description:string
}

export default AppointmentDto;