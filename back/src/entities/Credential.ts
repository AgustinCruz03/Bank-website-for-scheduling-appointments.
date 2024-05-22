import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm"
import { User } from "./User"

@Entity({
    name:"credentials"
})
export class Credential{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username:string

    @Column()
    password:string

}