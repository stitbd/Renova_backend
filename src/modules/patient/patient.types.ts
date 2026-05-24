export type CreatePatientInput = {
  referenceName?: string;
  patientCode?: string;
  fullName: string;
  mobileNumber: string;
  email?: string;
  password: string;
  dateOfBirth?: string;
  age?: number;
  nationality?: string;
  bloodGroup?: string;
  gender?: string;
  address?: string;
  emergencyContact?: string;
  status?: "ACTIVE" | "INACTIVE" | "PENDING";
  outletId?: string;
};