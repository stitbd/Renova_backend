import { mainPrisma } from "../../databases/prisma";
import {
  DoctorOnlineStatus,
  DoctorStatus,
  Prisma,
  ScheduleStatus,
  VerificationStatus,
} from "../../generated/main-client";

export const doctorDocumentsRepository = {

  createDocument(data: Prisma.DoctorDocumentCreateInput) {
    return mainPrisma.doctorDocument.create({
      data,
      include: {
        doctor: true,
      },
    });
  },

  findDocumentById(id: string) {
    return mainPrisma.doctorDocument.findUnique({
      where: { id },
      include: {
        doctor: true,
      },
    });
  },

  findDocumentsByDoctorId(doctorId: string) {
    return mainPrisma.doctorDocument.findMany({
      where: { doctorId },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  updateDocument(id: string, data: Prisma.DoctorDocumentUpdateInput) {
    return mainPrisma.doctorDocument.update({
      where: { id },
      data,
    });
  },

  updateDocumentVerification(
    id: string,
    verificationStatus: VerificationStatus
  ) {
    return mainPrisma.doctorDocument.update({
      where: { id },
      data: {
        verificationStatus,
      },
    });
  },

  deleteDocument(id: string) {
    return mainPrisma.doctorDocument.delete({
      where: { id },
    });
  },

};