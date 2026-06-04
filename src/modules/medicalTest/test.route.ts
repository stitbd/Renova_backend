import express from "express";
import { TestController } from "./test.controller";
import {
  createTestValidationSchema,
  updateTestValidationSchema,
} from "./test.validation";
import { validateRequest } from "../../utils/validateRequest";
import catchAsync from "../../utils/catch_async";


const router = express.Router();

router.post(
  "/create",
  validateRequest(createTestValidationSchema),
  catchAsync(TestController.createTest)
);

router.get("/getAll", catchAsync(TestController.getAllTests));

router.get("/getSingle/:id", catchAsync(TestController.getTestById));

router.patch(
  "/update/:id",
  validateRequest(updateTestValidationSchema),
  catchAsync(TestController.updateTest)
);

router.delete("/delete/:id", catchAsync(TestController.deleteTest));

export const TestRoutes = router;