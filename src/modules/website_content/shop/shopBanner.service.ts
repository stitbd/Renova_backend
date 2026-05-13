import { mainPrisma } from "../../../databases/prisma";


const createShopBanner = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.shopBanner.updateMany({
      data: { isActive: false },
    });
  }

  return mainPrisma.shopBanner.create({
    data: payload,
  });
};

const getShopBanner = async () => {
  return mainPrisma.shopBanner.findFirst({
    where: { isActive: true },
  });
};

const updateShopBanner = async (id: string, payload: any) => {
  const existingBanner = await mainPrisma.shopBanner.findUnique({
    where: { id },
  });

  if (!existingBanner) {
    throw new Error("Shop banner not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.shopBanner.updateMany({
      where: {
        id: {
          not: id,
        },
      },
      data: { isActive: false },
    });
  }

  return mainPrisma.shopBanner.update({
    where: { id },
    data: payload,
  });
};

const deleteShopBanner = async (id: string) => {
  const existingBanner = await mainPrisma.shopBanner.findUnique({
    where: { id },
  });

  if (!existingBanner) {
    throw new Error("Shop banner not found");
  }

  return mainPrisma.shopBanner.delete({
    where: { id },
  });
};

export const ShopBannerService = {
  createShopBanner,
  getShopBanner,
  updateShopBanner,
  deleteShopBanner,
};