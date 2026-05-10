import express from "express";
import catchAsync from "../../../utils/catch_async";
import { outletAuthController } from "./outlet_user_auth.controller";



const router = express.Router();

router.post(
    "/login",
    catchAsync(outletAuthController.login)
);

router.post(
    "/refresh-token",
    catchAsync(
        outletAuthController.refreshToken
    )
);

export const outletAuthRoutes = router;