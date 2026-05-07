import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
import globalErrorHandler from "./middlewares/global_error_handler";
import { createDefaultSuperAdmin } from "./utils/createDefaultSuperAdmin";

const app: Application = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Renova backend is running",
  });
});

// API routes
app.use("/api/v1", routes);

// Create default super admin if it doesn't exist
createDefaultSuperAdmin();

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// Global error handler
app.use(globalErrorHandler);


export default app;