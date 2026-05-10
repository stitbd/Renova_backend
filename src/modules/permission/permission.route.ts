import express from "express";

import { permissionController } from "./permission.controller";
import catchAsync from "../../utils/catch_async";


const router = express.Router();

router.post(
    "/create",
    catchAsync(permissionController.create)
);

router.get(
    "/getAll",
    catchAsync(permissionController.getAll)
);

router.get(
    "/getSingle/:id",
    catchAsync(permissionController.getById)
);

router.patch(
    "/update/:id",
    catchAsync(permissionController.update)
);

router.delete(
    "/delete/:id",
    catchAsync(permissionController.delete)
);

export const permissionRoutes = router;