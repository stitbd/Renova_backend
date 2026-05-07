import { Request, Response } from "express";

import manageResponse from "../../utils/manage_response";
import { doctorDocumentService } from "./doctor_documents.service";

export const doctorDocumentController = {

  async createDocument(req: Request, res: Response) {
    const result = await doctorDocumentService.createDocument(req.body);

    manageResponse(res, {
      success: true,
      statusCode: 201,
      message: "Doctor document created successfully",
      data: result,
    });
  },

  async getDocumentsByDoctorId(req: Request, res: Response) {
    const result = await doctorDocumentService.getDocumentsByDoctorId(
      req.params.doctorId as string
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor documents retrieved successfully",
      data: result,
    });
  },

  async updateDocument(req: Request, res: Response) {
    const result = await doctorDocumentService.updateDocument(
      req.params.id as string,
      req.body
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor document updated successfully",
      data: result,
    });
  },

  async updateDocumentVerification(req: Request, res: Response) {
    const result = await doctorDocumentService.updateDocumentVerification(
      req.params.id as string,
      req.body.verificationStatus
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor document verification updated successfully",
      data: result,
    });
  },

  async deleteDocument(req: Request, res: Response) {
    await doctorDocumentService.deleteDocument(req.params.id as string);

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor document deleted successfully",
    });
  },
};