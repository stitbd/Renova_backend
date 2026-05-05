export type CreatePatientInput = {
  fullName: string;
  mobileNumber: string;
  email?: string;
  dateOfBirth?: string;
  age?: number;
  bloodGroup?: string;
  gender?: string;
  address?: string;
  diagnosticAccountId?: string;
};