import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from "typeorm"
import { AppDataSource } from "../config/data-source"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"


@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthdate: Date

    @Column("integer")
    nDni: number

    // @Column("integer")
    // credentialsId:number
    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Appointment, (appointment => appointment.user))
    appointments: Appointment[]
}
