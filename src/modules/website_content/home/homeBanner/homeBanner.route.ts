import express from "express";
import { HomeBannerController } from "./homeBanner.controller";

const router = express.Router();

router.post("/create", HomeBannerController.createHomeBanner);

router.get("/get-current-banner", HomeBannerController.getHomeBanner);

router.patch("/update/:id", HomeBannerController.updateHomeBanner);
router.delete("/delete/:id", HomeBannerController.deleteHomeBanner);

export const HomeBannerRoutes = router;
