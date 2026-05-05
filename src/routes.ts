import { Router } from "express";
import authRoute from "./modules/auth/auth.route";
import { patientRoutes } from "./modules/patient/patient.route";


const appRouter = Router();

const moduleRoutes = [
  { path: "/auth", route: authRoute },
  { path: "/patients", route: patientRoutes },
];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));
export default appRouter;
