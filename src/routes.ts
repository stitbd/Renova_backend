import { Router } from "express";

import { patientRoutes } from "./modules/patient/patient.route";
import { doctorRoutes } from "./modules/doctor/doctor.route";
import { doctorDocumentRoutes } from "./modules/doctor_documents/doctor_documents.route";
import { doctorSpecializationRoutes } from "./modules/doctor_specialization/doctor_specialization.route";
import { doctorScheduleRoutes } from "./modules/doctor_schedule/doctor_schedule.route";
import { patientAuthRoutes } from "./modules/auth/patientAuth/patientAuth.route";
import { doctorAuthRoutes } from "./modules/auth/doctorAuth/doctorAuth.route";
import { outletRoutes } from "./modules/outlet/outlet.route";
import { outletUserRoutes } from "./modules/outlet_user/outlet_user.route";
import { roleRoutes } from "./modules/role/role.route";
import { permissionRoutes } from "./modules/permission/permission.route";
import { outletAuthRoutes } from "./modules/auth/outlet_user_auth/outlet_user_auth.route";
import { superAdminRoutes } from "./modules/super_admin/super_admin.route";
import { superAdminRoleRoutes } from "./modules/super_admin_role/super_admin_role.route";


const appRouter = Router();

const moduleRoutes = [
  { path: "/patients", route: patientRoutes },
  { path: "/auth/patients", route: patientAuthRoutes },
  { path: "/auth/doctors", route: doctorAuthRoutes },
  {
    path: "/auth/outlet-users", route: outletAuthRoutes
  },
  { path: "/doctors", route: doctorRoutes },
  { path: "/doctor-specializations", route: doctorSpecializationRoutes },
  { path: "/doctor-documents", route: doctorDocumentRoutes },
  { path: "/doctor-schedules", route: doctorScheduleRoutes },
  { path: "/outlets", route: outletRoutes },
  { path: "/outlet-users", route: outletUserRoutes },
  { path: "/roles", route: roleRoutes },
  { path: "/permissions", route: permissionRoutes },
  { path: "/super-admins", route: superAdminRoutes },
  { path: "/super-admin-roles", route: superAdminRoleRoutes },

];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));
export default appRouter;


