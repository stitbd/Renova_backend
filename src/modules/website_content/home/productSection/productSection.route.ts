import express from "express";
import { ProductSectionController } from "./productSection.controller";

const router = express.Router();

router.post("/create", ProductSectionController.createProductSection);
router.get("/get", ProductSectionController.getProductSection);
router.patch("/update/:id", ProductSectionController.updateProductSection);


export const ProductSectionRoutes = router;

