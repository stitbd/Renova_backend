import { Request, Response } from "express";
import { TestimonialSectionService } from "./testimonialSection.service";

const createTestimonialSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await TestimonialSectionService.createTestimonialSection(
      req.body
    );

  res.status(201).json({
    success: true,
    message: "Testimonial section created successfully",
    data: result,
  });
};

const getTestimonialSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await TestimonialSectionService.getTestimonialSection();

  res.status(200).json({
    success: true,
    message: "Testimonial section retrieved successfully",
    data: result,
  });
};

const updateTestimonialSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await TestimonialSectionService.updateTestimonialSection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Testimonial section updated successfully",
    data: result,
  });
};

export const TestimonialSectionController = {
  createTestimonialSection,
  getTestimonialSection,
  updateTestimonialSection,
};