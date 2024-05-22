import { Request, Response } from "express";
import { createUserService, getUserByIDService, getUsersService } from "../services/userService";
import IUser from "../interfaces/IUser";
// import catchAsync from "../utils/catchAsync";
import { userValidation } from "../services/credentialService";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { userModel } from "../config/data-source";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await getUsersService()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:"Error searching users"})
    }
}

export const getUserByID = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        const response: User = await getUserByIDService(Number(id))
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({message: "User not found"})
    }
}

export const registrarUsuario = async (req: Request, res: Response): Promise<void> => {
    const { name, email, birthdate, nDni, username, password } = req.body
    try {
        const newUser = await createUserService({ name, email, birthdate, nDni, username, password })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json("Error datos incompletos")
    }
}

export const logeandoUsuario = async (req: Request, res: Response): Promise<void> => {
    const {username, password} = req.body
    try {
        const idCredential: number = await userValidation({username, password})
        const user = await userModel.findOneBy({id:idCredential})
        res.status(200).json({loggin:true, user})
    } catch (error) {
        res.status(400).json({loggin:false,message:"Error. Los datos son incorrecto"})
    }
}

// export default {
//     getUsers:catchAsync(getUsers),
//     getUserByID:catchAsync(getUserByID),
//     registrarUsuario:catchAsync(registrarUsuario),
//     logeandoUsuario:catchAsync(logeandoUsuario)
// }