import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
import globalErrorHandler from "./middlewares/global_error_handler";
import { createDefaultSuperAdmin } from "./utils/createDefaultSuperAdmin";

const app: Application = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173",
  "https://renovafrontend.vercel.app",
  "https://renovalifecare.com"
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow Postman/server-to-server/no-origin requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
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