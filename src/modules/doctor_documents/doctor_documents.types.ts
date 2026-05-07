import { VerificationStatus } from "../../generated/main-client";

export type CreateDoctorDocumentInput = {
  doctorId: string;
  documentType: DocumentType;
  fileUrl: string;
  verificationStatus?: VerificationStatus;
};

export type UpdateDoctorDocumentInput =
  Partial<CreateDoctorDocumentInput>;