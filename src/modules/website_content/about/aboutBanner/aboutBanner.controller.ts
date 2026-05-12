import { Request, Response } from "express";
import { AboutBannerService } from "./aboutBanner.service";

const createAboutBanner = async (
    req: Request,
    res: Response
) => {
    const result =
        await AboutBannerService.createAboutBanner(
            req.body
        );

    res.status(201).json({
        success: true,
        message: "About banner created successfully",
        data: result,
    });
};

const getAboutBanner = async (
    req: Request,
    res: Response
) => {
    const result =
        await AboutBannerService.getAboutBanner();

    res.status(200).json({
        success: true,
        message: "About banner retrieved successfully",
        data: result,
    });
};

const updateAboutBanner = async (
    req: Request,
    res: Response
) => {
    const result =
        await AboutBannerService.updateAboutBanner(
            req.params.id as string,
            req.body
        );

    res.status(200).json({
        success: true,
        message: "About banner updated successfully",
        data: result,
    });
};

const deleteAboutBanner = async (
    req: Request,
    res: Response
) => {
    await AboutBannerService.deleteAboutBanner(
        req.params.id as string
    );

    res.status(200).json({
        success: true,
        message: "About banner deleted successfully",
    });
};


export const AboutBannerController = {
    createAboutBanner,
    getAboutBanner,
    updateAboutBanner,
    deleteAboutBanner
};