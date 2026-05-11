import express from "express";
import { TestimonialSectionController } from "./testimonialSection.controller";

const router = express.Router();

router.post(
  "/create",
  TestimonialSectionController.createTestimonialSection
);

router.get(
  "/get",
  TestimonialSectionController.getTestimonialSection
);

router.patch(
  "/update/:id",
  TestimonialSectionController.updateTestimonialSection
);

export const TestimonialSectionRoutes = router;