import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { User } from "./User"
import { type } from "os"

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"text"})
    date: Date

    @Column()
    time: string

    @Column()
    userId: number

    @Column()
    description:string

    @Column({default: "active"})
    status: "active" | "cancelled"

    @ManyToOne(() => User, (user) => user.appointments)
    user: User
}