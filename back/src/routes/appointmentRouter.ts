import { Router } from "express";
import { agendarTurno, cancelarTurno, getAppointment, getAppointmentByID } from "../controllers/appointmentController";
import verifySchedule from "../middlewares/verifySchedule";

const appointmentRouter = Router()

appointmentRouter.get("/", getAppointment)
appointmentRouter.get("/:id", getAppointmentByID)

appointmentRouter.post("/schedule", verifySchedule, agendarTurno)
appointmentRouter.put("/cancel/:id", cancelarTurno)
export default appointmentRouter;