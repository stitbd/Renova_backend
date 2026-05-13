import { mainPrisma } from "../../../databases/prisma";


const createPackageBanner = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.packageBanner.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.packageBanner.create({
    data: payload,
  });
};

const getPackageBanner = async () => {
  return mainPrisma.packageBanner.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updatePackageBanner = async (
  id: string,
  payload: any
) => {
  const existingBanner =
    await mainPrisma.packageBanner.findUnique({
      where: { id },
    });

  if (!existingBanner) {
    throw new Error("Package banner not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.packageBanner.updateMany({
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

  return mainPrisma.packageBanner.update({
    where: { id },
    data: payload,
  });
};

const deletePackageBanner = async (
  id: string
) => {
  const existingBanner =
    await mainPrisma.packageBanner.findUnique({
      where: { id },
    });

  if (!existingBanner) {
    throw new Error("Package banner not found");
  }

  return mainPrisma.packageBanner.delete({
    where: { id },
  });
};

export const PackageBannerService = {
  createPackageBanner,
  getPackageBanner,
  updatePackageBanner,
  deletePackageBanner,
};