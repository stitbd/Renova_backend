import express from "express";
import { ShopBannerController } from "./shopBanner.controller";

const router = express.Router();

router.post("/create", ShopBannerController.createShopBanner);
router.get("/get", ShopBannerController.getShopBanner);
router.patch("/update/:id", ShopBannerController.updateShopBanner);
router.delete("/delete/:id", ShopBannerController.deleteShopBanner);

export const ShopBannerRoutes = router;