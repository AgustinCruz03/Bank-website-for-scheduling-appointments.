import { credentialModel } from "../config/data-source"
import ICredentialDto from "../dto/credentialDto"
import { Credential } from "../entities/Credential"
import ICredential from "../interfaces/ICredential"


export const createCredential = async (data: ICredentialDto): Promise<Credential> => {
    const { username, password } = data
    const newCredential: Credential = await credentialModel.create({ username, password })
    const results = await credentialModel.save(newCredential)
    return results
}

export const userValidation = async (data: ICredentialDto): Promise<number> => {
    const { username, password } = data
    const credential: Credential | null = await credentialModel.findOneBy({ username, password })
    if (credential) return credential.id;
    else throw Error("credenciales no encontradas")
}