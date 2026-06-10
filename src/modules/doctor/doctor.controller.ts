import { Request, Response } from "express";
import { doctorService } from "./doctor.service";
import manageResponse from "../../utils/manage_response";

export const doctorController = {
  async create(req: Request, res: Response) {
    const files = req.files as Express.Multer.File[];
    const documentsData = req.body.documents || [];
    console.log("Received doctor creation request with data:", req.body);

    if (files && files.length > 0) {
      req.body.documents = files.map((file, index) => ({
        fileUrl: file.path,
        documentType: documentsData[index]?.documentType || "OTHER",
        verificationStatus: documentsData[index]?.verificationStatus || "PENDING",
      }));
    }

    const result = await doctorService.create(req.body);

    manageResponse(res, {
      success: true,
      statusCode: 201,
      message: "Doctor created successfully",
      data: result,
    });
  },

async getAll(req: Request, res: Response) {
  try {
    const { 
      gender, 
      specializationId, 
      outletId,
      status,
      page,
      limit 
    } = req.query;

    const result = await doctorService.getAll({
      gender: gender as string,
      specializationId: specializationId as string,
      outletId: outletId as string,
      status: status as string,
      page: page ? parseInt(page as string, 10) : 1,
      limit: limit ? parseInt(limit as string, 10) : 10,
    });

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctors retrieved successfully",
      data: result.data,
      meta: result.meta,
    });
  } catch (error) {
    manageResponse(res, {
      success: false,
      statusCode: 500,
      message: "Failed to retrieve doctors",
    });
  }
},
  async getById(req: Request, res: Response) {
    const result = await doctorService.getById(req.params.id as string);

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor retrieved successfully",
      data: result,
    });
  },
  async getDoctorListBySpecializationName(req: Request, res: Response) {
    const result = await doctorService.getDoctorListBySpecializationName(req.params.specializationName as string);

    

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor list retrieved successfully",
      data: result,
    });
  },

  async update(req: Request, res: Response) {
    const result = await doctorService.update(
      req.params.id as string,
      req.body
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor updated successfully",
      data: result,
    });
  },

  async delete(req: Request, res: Response) {
    await doctorService.delete(req.params.id as string);

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor deleted successfully",
    });
  },

  async updateStatus(req: Request, res: Response) {
    const result = await doctorService.updateStatus(
      req.params.id as string,
      req.body.status
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor status updated successfully",
      data: result,
    });
  },

  async updateOnlineStatus(req: Request, res: Response) {
    const result = await doctorService.updateOnlineStatus(
      req.params.id as string,
      req.body.onlineStatus
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor online status updated successfully",
      data: result,
    });
  },
};