import { mainPrisma } from "../../../../databases/prisma";

const createAboutBanner = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.aboutBanner.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.aboutBanner.create({
    data: payload,
  });
};

const getAboutBanner = async () => {
  return mainPrisma.aboutBanner.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateAboutBanner = async (
  id: string,
  payload: any
) => {
  const existingAboutBanner =
    await mainPrisma.aboutBanner.findUnique({
      where: { id },
    });

  if (!existingAboutBanner) {
    throw new Error("About banner not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.aboutBanner.updateMany({
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

  return mainPrisma.aboutBanner.update({
    where: { id },
    data: payload,
  });
};
const deleteAboutBanner = async (id: string) => {
  const existingAboutBanner =
    await mainPrisma.aboutBanner.findUnique({
      where: { id },
    });

  if (!existingAboutBanner) {
    throw new Error("About banner not found");
  }

  return mainPrisma.aboutBanner.delete({
    where: { id },
  });
};


export const AboutBannerService = {
  createAboutBanner,
  getAboutBanner,
  updateAboutBanner,
  deleteAboutBanner
};