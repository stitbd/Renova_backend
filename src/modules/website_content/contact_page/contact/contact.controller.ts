import { Request, Response } from "express";
import { ContactSectionService } from "./contact.service";

const createContactSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await ContactSectionService.createContactSection(
      req.body
    );

  res.status(201).json({
    success: true,
    message: "Contact section created successfully",
    data: result,
  });
};

const getContactSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await ContactSectionService.getContactSection();

  res.status(200).json({
    success: true,
    message: "Contact section retrieved successfully",
    data: result,
  });
};

const updateContactSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await ContactSectionService.updateContactSection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Contact section updated successfully",
    data: result,
  });
};

const deleteContactSection = async (
  req: Request,
  res: Response
) => {
  await ContactSectionService.deleteContactSection(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message: "Contact section deleted successfully",
  });
};

export const ContactSectionController = {
  createContactSection,
  getContactSection,
  updateContactSection,
  deleteContactSection,
};