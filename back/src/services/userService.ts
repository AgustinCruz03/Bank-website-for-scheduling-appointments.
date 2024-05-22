import { credentialModel, userModel } from "../config/data-source";
import UserDto from "../dto/userDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredential } from "./credentialService";

export const getUsersService = async (): Promise<User[]> => {
    const users: User[] = await userModel.find()
    return users;
}

export const getUserByIDService = async (id: number): Promise<User> => {
    const user: User | null = await userModel.findOne({
        where: {
            id,
        },
        relations: {
            appointments: true,
        }
    })
    if (user) return user
    else throw Error("User not found")
}

export const createUserService = async (data: UserDto): Promise<User> => {
    const { username, password } = data
    const credential: Credential = await createCredential({ username, password })
    const newUser: User = await userModel.create({
        name: data.name,
        email: data.email,
        birthdate: data.birthdate,
        nDni: data.nDni,
        credential
    })
    const result = await userModel.save(newUser)
    return result;
}
