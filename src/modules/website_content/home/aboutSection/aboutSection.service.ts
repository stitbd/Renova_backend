
import { mainPrisma } from "../../../../databases/prisma";

const createAboutSection = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.aboutSection.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.aboutSection.create({
    data: payload,
  });
};

const getActiveAboutSection = async () => {
  return mainPrisma.aboutSection.findFirst({
    where: { isActive: true },
  });
}

const updateAboutSection = async (id: string, payload: any) => {
  const existingAboutSection = await mainPrisma.aboutSection.findUnique({
    where: { id },
  });

  if (!existingAboutSection) {
    throw new Error("About section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.aboutSection.updateMany({
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

  return mainPrisma.aboutSection.update({
    where: { id },
    data: payload,
  });
};

const deleteAboutSection = async (id: string) => {
  const existingAboutSection = await mainPrisma.aboutSection.findUnique({
    where: { id },
  });

  if (!existingAboutSection) {
    throw new Error("About section not found");
  }

  return mainPrisma.aboutSection.delete({
    where: { id },
  });
};

export const AboutSectionService = {
  createAboutSection,
  getActiveAboutSection,
  updateAboutSection,
  deleteAboutSection,
};