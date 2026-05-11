import { mainPrisma } from "../../../../databases/prisma";

const createDoctorSection = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.doctorSection.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.doctorSection.create({
    data: payload,
  });
};

const getDoctorSection = async () => {
  return mainPrisma.doctorSection.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateDoctorSection = async (id: string, payload: any) => {
  const existingDoctorSection =
    await mainPrisma.doctorSection.findUnique({
      where: { id },
    });

  if (!existingDoctorSection) {
    throw new Error("Doctor section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.doctorSection.updateMany({
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

  return mainPrisma.doctorSection.update({
    where: { id },
    data: payload,
  });
};

export const DoctorSectionService = {
  createDoctorSection,
  getDoctorSection,
  updateDoctorSection,
};