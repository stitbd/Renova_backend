import express from "express";
import { AboutSectionController } from "./aboutSection.controller";

const router = express.Router();

router.post("/create", AboutSectionController.createAboutSection);
router.get("/get", AboutSectionController.getActiveAboutSection);

router.patch("/update/:id", AboutSectionController.updateAboutSection);

router.delete("/delete/:id", AboutSectionController.deleteAboutSection);

export const AboutSectionRoutes = router;