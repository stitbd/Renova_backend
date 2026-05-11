import express from "express";
import { ServiceSectionController } from "./serviceSection.controller";

const router = express.Router();

router.post("/create", ServiceSectionController.createServiceSection);

router.get("/get", ServiceSectionController.getServiceSection);

router.patch("/update/:id", ServiceSectionController.updateServiceSection);

export const ServiceSectionRoutes = router;