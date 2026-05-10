import express from "express";
import { outletController } from "./outlet.controller";
import catchAsync from "../../utils/catch_async";

const router = express.Router();

router.post("/create", catchAsync(outletController.create));
router.get("/getAll", catchAsync(outletController.getAll));
router.get("/getSingle/:id", catchAsync(outletController.getById));
router.patch("/update/:id", catchAsync(outletController.update));
router.delete("/delete/:id", catchAsync(outletController.delete));

export const outletRoutes = router;