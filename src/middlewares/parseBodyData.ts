import { NextFunction, Request, Response } from "express";

export const parseBodyData = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.data) {
    try {
      const parsedData = JSON.parse(req.body.data);
      req.body = { ...req.body, ...parsedData };
      delete req.body.data;
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid JSON format in the 'data' field",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
  next();
};
