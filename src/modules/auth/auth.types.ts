export enum UserType {
  SUPER_ADMIN = "SUPER_ADMIN",
  OUTLET_USER = "OUTLET_USER",
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT",
}

export interface LoginInput {
  phone: string;
  password: string;
  userType: UserType;
}