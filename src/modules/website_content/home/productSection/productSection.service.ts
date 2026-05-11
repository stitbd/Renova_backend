import { mainPrisma } from "../../../../databases/prisma";

const createProductSection = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.productSection.updateMany({
      data: { isActive: false },
    });
  }

  return mainPrisma.productSection.create({
    data: payload,
  });
};

const getProductSection = async () => {
  return mainPrisma.productSection.findFirst({
    where: { isActive: true },
  });
};

const updateProductSection = async (id: string, payload: any) => {
  const existingSection = await mainPrisma.productSection.findUnique({
    where: { id },
  });

  if (!existingSection) {
    throw new Error("Product section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.productSection.updateMany({
      where: { id: { not: id } },
      data: { isActive: false },
    });
  }

  return mainPrisma.productSection.update({
    where: { id },
    data: payload,
  });
};

export const ProductSectionService = {
  createProductSection,
  getProductSection,
  updateProductSection,
};