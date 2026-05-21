import {
  DoctorOnlineStatus,
  DoctorStatus,
  DocumentType,
  ScheduleStatus,
  VerificationStatus,
} from "../../generated/main-client";

export type CreateDoctorInput = {
  doctorCode?: string;
  fullName: string;
  mobile?: string;
  email: string;
  password: string;
  bmdcNumber?: string;
  subSpecialization?: string;
  qualification?: string;
  experienceYears?: number;
  currentDesignation?: string;
  consultationFee?: number;
  status?: DoctorStatus;
  onlineStatus?: DoctorOnlineStatus;
  gender?: string;
  dateOfBirth?: string;
  nationality?: string;
  bloodGroup?: string;
  outletId?: string;
  specializationId?: string;
  specializationName?: string;
  schedules?: {
    dayName: string;
    startTime: string;
    endTime: string;
    slotDuration: number;
    status?: ScheduleStatus;
  }[];
  documentTypes?: DocumentType[];
  documents?: {
    fileUrl?: string;
    documentType: DocumentType;
    verificationStatus?: VerificationStatus;
  }[];
};

export type UpdateDoctorInput = Partial<CreateDoctorInput>;


