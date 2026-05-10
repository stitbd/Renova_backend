import express from "express";
import { outletUserController } from "./outlet_user.controller";
import catchAsync from "../../utils/catch_async";


const router = express.Router();

router.post("/create", catchAsync(outletUserController.create));
router.get("/getAll/:outletId", catchAsync(outletUserController.getAll));
router.get("/getSingle/:id", catchAsync(outletUserController.getById));
router.patch("/update/:id", catchAsync(outletUserController.update));
router.patch("/assign-roles/:id", catchAsync(outletUserController.assignRoles));
router.patch("/update-status/:id", catchAsync(outletUserController.updateStatus));
router.delete("/delete/:id", catchAsync(outletUserController.delete));

export const outletUserRoutes = router;










