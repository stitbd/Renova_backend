import { Router } from "express";

import { patientRoutes } from "./modules/patient/patient.route";
import { doctorRoutes } from "./modules/doctor/doctor.route";
import { doctorDocumentRoutes } from "./modules/doctor_documents/doctor_documents.route";
import { doctorSpecializationRoutes } from "./modules/doctor_specialization/doctor_specialization.route";
import { doctorScheduleRoutes } from "./modules/doctor_schedule/doctor_schedule.route";
import { patientAuthRoutes } from "./modules/auth/patientAuth/patientAuth.route";
import { doctorAuthRoutes } from "./modules/auth/doctorAuth/doctorAuth.route";


const appRouter = Router();

const moduleRoutes = [
  { path: "/patients", route: patientRoutes },
  { path: "/auth/patients", route: patientAuthRoutes },
  { path: "/auth/doctors", route: doctorAuthRoutes },
  { path: "/doctors", route: doctorRoutes },
  { path: "/doctor-specializations", route: doctorSpecializationRoutes },
  { path: "/doctor-documents", route: doctorDocumentRoutes },
  { path: "/doctor-schedules", route: doctorScheduleRoutes },
];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));
export default appRouter;
