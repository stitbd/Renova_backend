import express from "express";

import { roleController } from "./role.controller";
import catchAsync from "../../utils/catch_async";


const router = express.Router();

router.post(
    "/create",
    catchAsync(roleController.create)
);

router.get(
    "/getAll/:outletId",
    catchAsync(roleController.getAll)
);

router.get(
    "/getSingle/:id",
    catchAsync(roleController.getById)
);

router.patch(
    "/update/:id",
    catchAsync(roleController.update)
);

router.patch(
    "/assign-permissions/:id",
    catchAsync(roleController.assignPermissions)
);

router.delete(
    "/delete/:id",
    catchAsync(roleController.delete)
);

export const roleRoutes = router;