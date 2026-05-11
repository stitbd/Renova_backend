import express from "express";
import { BlogSectionController } from "./blogSection.controller";

const router = express.Router();

router.post(
    "/create",
    BlogSectionController.createBlogSection
);

router.get(
    "/get",
    BlogSectionController.getBlogSection
);

router.patch(
    "/update/:id",
    BlogSectionController.updateBlogSection
);

export const BlogSectionRoutes = router;