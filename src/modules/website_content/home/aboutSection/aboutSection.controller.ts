import { Request, Response } from "express";
import { AboutSectionService } from "./aboutSection.service";

const createAboutSection = async (req: Request, res: Response) => {
    const result = await AboutSectionService.createAboutSection(req.body);

    res.status(201).json({
        success: true,
        message: "About section created successfully",
        data: result,
    });
};

const getActiveAboutSection = async (req: Request, res: Response) => {
    const result = await AboutSectionService.getActiveAboutSection();

    res.status(200).json({
        success: true,
        message: "Active about section retrieved successfully",
        data: result,
    });
};

const updateAboutSection = async (req: Request, res: Response) => {
    const result = await AboutSectionService.updateAboutSection(
        req.params.id as string,
        req.body
    );

    res.status(200).json({
        success: true,
        message: "About section updated successfully",
        data: result,
    });
};

const deleteAboutSection = async (req: Request, res: Response) => {
    await AboutSectionService.deleteAboutSection(req.params.id as string);

    res.status(200).json({
        success: true,
        message: "About section deleted successfully",
    });
};

export const AboutSectionController = {
    createAboutSection,
    updateAboutSection,
    deleteAboutSection,
    getActiveAboutSection,
};