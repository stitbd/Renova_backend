export type CreatePatientInput = {
  referenceName?: string;
  fullName: string;
  mobileNumber: string;
  email?: string;
  dateOfBirth?: string;
  age?: number;
  bloodGroup?: string;
  gender?: string;
  address?: string;
  emergencyContact?: string;
  status?: "ACTIVE" | "INACTIVE" | "PENDING";
  outletId?: string;
};