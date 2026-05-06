import { ScheduleStatus, VerificationStatus } from "../../generated/main-client";
import { doctorService } from "../doctor/doctor.service";
import { doctorDocumentsRepository } from "./doctor_documents.repository";
import { CreateDoctorDocumentInput, UpdateDoctorDocumentInput } from "./doctor_documents.types";


export const doctorDocumentService = {


  async createDocument(data: CreateDoctorDocumentInput) {
    await doctorService.getById(data.doctorId);

    return doctorDocumentsRepository.createDocument({
      documentType: data.documentType as unknown as any,
      fileUrl: data.fileUrl,
      verificationStatus: data.verificationStatus,

      doctor: {
        connect: {
          id: data.doctorId,
        },
      },
    });
  },

  async getDocumentsByDoctorId(doctorId: string) {
    await doctorService.getById(doctorId);

    return doctorDocumentsRepository.findDocumentsByDoctorId(doctorId);
  },

  async getDocumentById(id: string) {
    const document = await doctorDocumentsRepository.findDocumentById(id);

    if (!document) {
      throw new Error("Doctor document not found");
    }

    return document;
  },

  async updateDocument(id: string, data: UpdateDoctorDocumentInput) {
    await this.getDocumentById(id);

    return doctorDocumentsRepository.updateDocument(id, {
      documentType: data.documentType as unknown as any,
      fileUrl: data.fileUrl,
      verificationStatus: data.verificationStatus,
    });
  },

  async updateDocumentVerification(
    id: string,
    verificationStatus: VerificationStatus
  ) {
    await this.getDocumentById(id);

    return doctorDocumentsRepository.updateDocumentVerification(id, verificationStatus);
  },

  async deleteDocument(id: string) {
    await this.getDocumentById(id);

    return doctorDocumentsRepository.deleteDocument(id);
  },
};