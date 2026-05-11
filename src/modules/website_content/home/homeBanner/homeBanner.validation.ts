import { z } from "zod";

export const createHomeBannerValidation = z.object({
  body: z.object({
    title1: z.string(),
    highlightedText: z.string().optional(),
    title2: z.string().optional(),
    description: z.string(),

    primaryButtonText: z.string().optional(),
    phoneNumber: z.string().optional(),

    cardTitle: z.string().optional(),
    cardSubtitle: z.string().optional(),

    patientsCount: z.string().optional(),
    doctorsCount: z.string().optional(),
    departmentsCount: z.string().optional(),
    experienceYears: z.string().optional(),

    patientsLabel: z.string().optional(),
    doctorsLabel: z.string().optional(),
    departmentsLabel: z.string().optional(),
    experienceLabel: z.string().optional(),

    certificationTitle: z.string().optional(),
    certificationSubtitle: z.string().optional(),

    emergencyText: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
});

export const updateHomeBannerValidation = z.object({
  body: createHomeBannerValidation.shape.body.partial(),
});