import { AppointmentStatus } from "../../generated/appointment-client";
import { AppError } from "../../utils/app_error";

export const TIME_ZONE = "Asia/Dhaka";

export const isValidDateString = (date: string): boolean => {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
};

export const buildDhakaDateTime = (date: string, time: string): Date => {
  return new Date(`${date}T${time}:00+06:00`);
};

export const generateAppointmentCode = (): string => {
  const now = new Date();

  const datePart = getDhakaDateString(now).split("-").join("");
  const timePart = getDhakaTimeString(now).replace(":", "");
  const random = Math.floor(10000 + Math.random() * 90000);

  return `APT_${datePart}${timePart}_${random}`;
};

export const getDayName = (date: Date): string => {
  return date
    .toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: TIME_ZONE,
    })
    .toUpperCase();
};

export const timeToMinutes = (time: string): number => {
  const normalized = time.trim().toUpperCase();

  const match12Hour = normalized.match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/);

  if (match12Hour) {
    let hour = Number(match12Hour[1]);
    const minute = Number(match12Hour[2]);
    const period = match12Hour[3];

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    return hour * 60 + minute;
  }

  const match24Hour = normalized.match(/^(\d{1,2}):(\d{2})$/);

  if (match24Hour) {
    const hour = Number(match24Hour[1]);
    const minute = Number(match24Hour[2]);

    if (hour > 23 || minute > 59) {
      throw new AppError(`Invalid time format: ${time}`, 400);
    }

    return hour * 60 + minute;
  }

  throw new AppError(`Invalid time format: ${time}`, 400);
};

export const minutesToTime = (minutes: number): string => {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
};

export const getDhakaDateString = (date: Date): string => {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

export const getDhakaTimeString = (date: Date): string => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const hour = parts.find((part) => part.type === "hour")?.value;
  const minute = parts.find((part) => part.type === "minute")?.value;

  return `${hour}:${minute}`;
};

export const isTimeOverlapping = (
  slotStart: number,
  slotEnd: number,
  blockStart: number,
  blockEnd: number
): boolean => {
  return slotStart < blockEnd && slotEnd > blockStart;
};

export const validateStatusTransition = (
  currentStatus: AppointmentStatus,
  nextStatus: AppointmentStatus
): boolean => {
  const allowedTransitions: Record<AppointmentStatus, AppointmentStatus[]> = {
    PENDING: ["CONFIRMED", "CANCELLED"],
    CONFIRMED: ["COMPLETED", "CANCELLED", "NO_SHOW"],
    COMPLETED: [],
    CANCELLED: [],
    NO_SHOW: [],
  };

  return allowedTransitions[currentStatus].includes(nextStatus);
};

export type GetDoctorSlotsPayload = {
  doctorId: string;
  date: string;
};

export type SlotResponse = {
  startTime: string;
  endTime: string;
  startLabel: string;
  endLabel: string;
  isAvailable: boolean;
  isBooked: boolean;
  isUnavailable: boolean;
  disabledReason: "PAST_SLOT" | "BOOKED" | "DOCTOR_UNAVAILABLE" | null;
  appointmentId: string | null;
};