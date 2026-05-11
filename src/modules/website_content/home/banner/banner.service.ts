
import { mainPrisma } from "../../../../databases/prisma";

const createHomeBanner = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.homeBanner.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.homeBanner.create({
    data: payload,
  });
};

const getHomeBanner = async () => {
  return mainPrisma.homeBanner.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateHomeBanner = async (id: string, payload: any) => {
  const existingBanner = await mainPrisma.homeBanner.findUnique({
    where: { id },
  });

  if (!existingBanner) {
    throw new Error("Banner not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.homeBanner.updateMany({
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

  return mainPrisma.homeBanner.update({
    where: { id },
    data: payload,
  });
};

const deleteHomeBanner = async (id: string) => {
  return mainPrisma.homeBanner.delete({
    where: { id },
  });
}

export const HomeBannerService = {
  createHomeBanner,
  getHomeBanner,
  updateHomeBanner,
  deleteHomeBanner
};