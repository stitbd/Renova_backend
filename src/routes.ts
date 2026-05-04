import { Router } from "express";
import authRoute from "./modules/auth/auth.route";


const appRouter = Router();

const moduleRoutes = [
  { path: "/auth", route: authRoute },

];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));
export default appRouter;
