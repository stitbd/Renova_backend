import { Router } from "express";

import { patientRoutes } from "./modules/patient/patient.route";
import { doctorRoutes } from "./modules/doctor/doctor.route";
import { doctorDocumentRoutes } from "./modules/doctor_documents/doctor_documents.route";
import { doctorSpecializationRoutes } from "./modules/doctor_specialization/doctor_specialization.route";
import { doctorScheduleRoutes } from "./modules/doctor_schedule/doctor_schedule.route";
import { outletRoutes } from "./modules/outlet/outlet.route";
import { outletUserRoutes } from "./modules/outlet_user/outlet_user.route";
import { superAdminRoutes } from "./modules/super_admin/super_admin.route";
import { superAdminRoleRoutes } from "./modules/super_admin_role/super_admin_role.route";
import { HomeBannerRoutes } from "./modules/website_content/home/banner/banner.route";
import { AboutSectionRoutes } from "./modules/website_content/home/aboutSection/aboutSection.route";
import { ServiceSectionRoutes } from "./modules/website_content/home/serviceSection/serviceSection.route";
import { DoctorSectionRoutes } from "./modules/website_content/home/doctorSection/doctorSection.route";
import { AppointmentSectionRoutes } from "./modules/website_content/home/appointmentSection/appointmentSection.route";
import { ProductSectionRoutes } from "./modules/website_content/home/productSection/productSection.route";
import { FacilitySectionRoutes } from "./modules/website_content/home/facilitySection/facilitySection.route";
import { TestimonialSectionRoutes } from "./modules/website_content/home/testimonialSection/testimonialSection.route";
import { BlogSectionRoutes } from "./modules/website_content/home/blogSection/blogSection.route";
import { AboutBannerRoutes } from "./modules/website_content/about/aboutBanner/aboutBanner.route";
import { MissionVisionSectionRoutes } from "./modules/website_content/about/MissionVisionSection/MissionVisionSection.route";
import { ManagingDirectorSectionRoutes } from "./modules/website_content/about/ManagingDirectorSection/ManagingDirectorSection.route";
import { LeadershipSectionRoutes } from "./modules/website_content/about/LeadershipSection/LeadershipSection.route";
import { DoctorBannerRoutes } from "./modules/website_content/doctors/doctors_banner/doctors_banner.route";
import { CareerSectionRoutes } from "./modules/website_content/doctors/careerSection/careerSection.route";
import { ContactSectionRoutes } from "./modules/website_content/contact_page/contact/contact.route";
import { ShopBannerRoutes } from "./modules/website_content/shop/shopBanner.route";
import { PackageBannerRoutes } from "./modules/website_content/packages/packages.route";
import { authRoutes } from "./modules/auth/auth.route";
import { outletPermissionRoutes } from "./modules/outlet_permission/outlet_permission.route";
import { outletRoleRoutes } from "./modules/outlet_role/outlet_role.route";
import { superAdminPermissionRoutes } from "./modules/super_admin_permission/super_admin_permission.route";
import { appointmentRoutes } from "./modules/appointment/appointment.route";
import { doctorUnavailableDateRoutes } from "./modules/doctorUnavailableDate/doctorUnavailableDate.route";
import { TestRoutes } from "./modules/test/test.route";
import { PackageRoutes } from "./modules/package/package.route";


const appRouter = Router();

const moduleRoutes = [
  { path: "/patients", route: patientRoutes },
  { path: "/auth", route: authRoutes },

  { path: "/doctors", route: doctorRoutes },
  { path: "/doctor-unavailable-dates", route: doctorUnavailableDateRoutes },
  { path: "/doctor-specializations", route: doctorSpecializationRoutes },
  { path: "/doctor-documents", route: doctorDocumentRoutes },
  { path: "/doctor-schedules", route: doctorScheduleRoutes },
  { path: "/outlets", route: outletRoutes },
  { path: "/outlet-users", route: outletUserRoutes },
  { path: "/outlet-roles", route: outletRoleRoutes },
  { path: "/outlet-permissions", route: outletPermissionRoutes },
  { path: "/super-admins", route: superAdminRoutes },
  { path: "/super-admin-roles", route: superAdminRoleRoutes },
  { path: "/super-admin-permission", route: superAdminPermissionRoutes },
  { path: "/appointments", route: appointmentRoutes },

  //create package 
  { path: "/tests", route: TestRoutes },
  { path: "/packages", route: PackageRoutes },



  // dynamic website content routes
  { path: "/website-content/home-banner", route: HomeBannerRoutes },
  { path: "/website-content/home-about", route: AboutSectionRoutes },
  { path: "/website-content/home-services", route: ServiceSectionRoutes },
  { path: "/website-content/home-doctors", route: DoctorSectionRoutes },
  { path: "/website-content/home-appointment", route: AppointmentSectionRoutes },
  { path: "/website-content/home-product", route: ProductSectionRoutes },
  { path: "/website-content/home-facility", route: FacilitySectionRoutes },
  { path: "/website-content/home-testimonial", route: TestimonialSectionRoutes },
  { path: "/website-content/home-blog", route: BlogSectionRoutes },
  { path: "/website-content/about-banner", route: AboutBannerRoutes },
  { path: "/website-content/about-mission-vision", route: MissionVisionSectionRoutes },
  { path: "/website-content/about-managing-director", route: ManagingDirectorSectionRoutes },
  { path: "/website-content/about-leadership", route: LeadershipSectionRoutes },
  { path: "/website-content/doctors-banner", route: DoctorBannerRoutes },
  { path: "/website-content/doctors-career", route: CareerSectionRoutes },
  { path: "/website-content/doctors-contact", route: ContactSectionRoutes },
  { path: "/website-content/shop-banner", route: ShopBannerRoutes },
  { path: "/website-content/package-banner", route: PackageBannerRoutes },
];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));
export default appRouter;

