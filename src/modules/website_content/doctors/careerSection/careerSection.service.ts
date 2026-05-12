import { mainPrisma } from "../../../../databases/prisma";

const createCareerSection = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.careerSection.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.careerSection.create({
    data: payload,
  });
};

const getCareerSection = async () => {
  return mainPrisma.careerSection.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateCareerSection = async (
  id: string,
  payload: any
) => {
  const existingSection =
    await mainPrisma.careerSection.findUnique({
      where: { id },
    });

  if (!existingSection) {
    throw new Error("Career section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.careerSection.updateMany({
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

  return mainPrisma.careerSection.update({
    where: { id },
    data: payload,
  });
};

const deleteCareerSection = async (id: string) => {
  const existingSection =
    await mainPrisma.careerSection.findUnique({
      where: { id },
    });

  if (!existingSection) {
    throw new Error("Career section not found");
  }

  return mainPrisma.careerSection.delete({
    where: { id },
  });
};

export const CareerSectionService = {
  createCareerSection,
  getCareerSection,
  updateCareerSection,
  deleteCareerSection,
};