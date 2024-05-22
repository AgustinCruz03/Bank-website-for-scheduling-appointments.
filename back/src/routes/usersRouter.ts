import { Router } from "express";
import { getUserByID, getUsers, logeandoUsuario, registrarUsuario } from "../controllers/usersController";
import verifyRegister from "../middlewares/verifyRegister";

const userRouter = Router()

userRouter.get("/", getUsers)

userRouter.get("/:id", getUserByID)

userRouter.post("/register", verifyRegister, registrarUsuario)

userRouter.post("/login", logeandoUsuario)

export default userRouter;