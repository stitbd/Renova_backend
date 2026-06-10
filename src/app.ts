import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
import globalErrorHandler from "./middlewares/global_error_handler";
import { createDefaultSuperAdmin } from "./utils/createDefaultSuperAdmin";

const app: Application = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173",

      "https://renovalifecare.com",
      "https://www.renovalifecare.com",
      "https://renovafrontend-e3309yxqk-md-soyaib-hossains-projects.vercel.app",
      "https://admin.renovalifecare.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Renova backend is running smoothly!",
  });
});

// API routes
app.use("/api/v1", routes);

// Create default super admin if it doesn't exist
createDefaultSuperAdmin().catch(err => console.error("Failed to create default super admin:", err));

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// Global error handler
app.use(globalErrorHandler);


export default app;