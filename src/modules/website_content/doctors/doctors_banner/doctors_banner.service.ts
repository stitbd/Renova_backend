import { mainPrisma } from "../../../../databases/prisma";

const createDoctorBanner = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.doctorBanner.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.doctorBanner.create({
    data: payload,
  });
};

const getDoctorBanner = async () => {
  return mainPrisma.doctorBanner.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateDoctorBanner = async (
  id: string,
  payload: any
) => {
  const existingBanner =
    await mainPrisma.doctorBanner.findUnique({
      where: { id },
    });

  if (!existingBanner) {
    throw new Error("Doctor banner not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.doctorBanner.updateMany({
      where: {
        id: {
          not: id,
        },
      },
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.doctorBanner.update({
    where: { id },
    data: payload,
  });
};

const deleteDoctorBanner = async (id: string) => {
  const existingBanner =
    await mainPrisma.doctorBanner.findUnique({
      where: { id },
    });

  if (!existingBanner) {
    throw new Error("Doctor banner not found");
  }

  return mainPrisma.doctorBanner.delete({
    where: { id },
  });
};

export const DoctorBannerService = {
  createDoctorBanner,
  getDoctorBanner,
  updateDoctorBanner,
  deleteDoctorBanner,
};