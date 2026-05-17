import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const doctorUnavailableDateBaseSchema = z.object({
    doctorId: z.string().uuid().optional(),

    unavailableDate: z.string().regex(dateRegex, "Date must be YYYY-MM-DD"),

    startTime: z.string().regex(timeRegex, "Time must be HH:mm").optional(),

    endTime: z.string().regex(timeRegex, "Time must be HH:mm").optional(),

    reason: z.string().max(2000).optional(),
});

const validateStartEndTimeTogether = (
    data: Partial<z.infer<typeof doctorUnavailableDateBaseSchema>>
) => {
    if (data.startTime && !data.endTime) return false;
    if (!data.startTime && data.endTime) return false;
    return true;
};

export const createDoctorUnavailableDateValidationSchema =
    doctorUnavailableDateBaseSchema.refine(validateStartEndTimeTogether, {
        message: "Both startTime and endTime are required together",
        path: ["endTime"],
    });

export const updateDoctorUnavailableDateValidationSchema =
    doctorUnavailableDateBaseSchema.partial().refine(validateStartEndTimeTogether, {
        message: "Both startTime and endTime are required together",
        path: ["endTime"],
    });