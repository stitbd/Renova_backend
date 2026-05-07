import { DoctorStatus } from "../../generated/main-client";

export type CreateDoctorSpecializationInput = {
  name: string;
  status?: DoctorStatus;
};

export type UpdateDoctorSpecializationInput =
  Partial<CreateDoctorSpecializationInput>;