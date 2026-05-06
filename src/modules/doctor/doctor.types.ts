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
  bmdcNumber?: string;
  subSpecialization?: string;
  qualification?: string;
  experienceYears?: number;
  currentDesignation?: string;
  consultationFee?: number;
  status?: DoctorStatus;
  onlineStatus?: DoctorOnlineStatus;
  outletId?: string;
};

export type UpdateDoctorInput = Partial<CreateDoctorInput>;


