import { NextFunction, Request, Response } from "express";
import { ZodSchema, z } from "zod";

export const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      console.log("REQ BODY:", JSON.stringify(req.body, null, 2));
      console.log("ZOD ISSUES:", JSON.stringify(result.error.issues, null, 2));

      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: z.treeifyError(result.error),
      });
    }

    req.body = result.data;
    next();
  };
};