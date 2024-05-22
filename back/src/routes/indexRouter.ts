import { Router } from "express";
import userRouter from "./usersRouter";
import appointmentRouter from "./appointmentRouter";

const router = Router()

router.use("/users", userRouter)
router.use("/appointment", appointmentRouter)
export default router