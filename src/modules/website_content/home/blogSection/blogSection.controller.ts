import { Request, Response } from "express";
import { BlogSectionService } from "./blogSection.service";

const createBlogSection = async (
    req: Request,
    res: Response
) => {
    const result =
        await BlogSectionService.createBlogSection(
            req.body
        );

    res.status(201).json({
        success: true,
        message: "Blog section created successfully",
        data: result,
    });
};

const getBlogSection = async (
    req: Request,
    res: Response
) => {
    const result =
        await BlogSectionService.getBlogSection();

    res.status(200).json({
        success: true,
        message: "Blog section retrieved successfully",
        data: result,
    });
};

const updateBlogSection = async (
    req: Request,
    res: Response
) => {
    const result =
        await BlogSectionService.updateBlogSection(
            req.params.id as string,
            req.body
        );

    res.status(200).json({
        success: true,
        message: "Blog section updated successfully",
        data: result,
    });
};

export const BlogSectionController = {
    createBlogSection,
    getBlogSection,
    updateBlogSection,
};