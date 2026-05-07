import { ScheduleStatus } from "../../generated/main-client";


export type CreateDoctorScheduleInput = {
  dayName: string;
  startTime: string;
  endTime: string;
  slotDuration: number;
  status?: ScheduleStatus;
  doctorId: string;
};

export type UpdateDoctorScheduleInput =
  Partial<CreateDoctorScheduleInput>;