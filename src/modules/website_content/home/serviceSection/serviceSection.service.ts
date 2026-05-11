import { mainPrisma } from "../../../../databases/prisma";

const createServiceSection = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.serviceSection.updateMany({
      data: { isActive: false },
    });
  }

  return mainPrisma.serviceSection.create({
    data: {
      sectionLabel: payload.sectionLabel,
      title: payload.title,
      description: payload.description,
      buttonText: payload.buttonText,
      isActive: payload.isActive,

      services: {
        create: payload.services || [],
      },
    },
    include: {
      services: true,
    },
  });
};

const getServiceSection = async () => {
  return mainPrisma.serviceSection.findFirst({
    where: { isActive: true },
    include: {
      services: {
        where: { isActive: true },
        orderBy: { serial: "asc" },
      },
    },
  });
};

const updateServiceSection = async (id: string, payload: any) => {
  const existingSection = await mainPrisma.serviceSection.findUnique({
    where: { id },
  });

  if (!existingSection) {
    throw new Error("Service section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.serviceSection.updateMany({
      where: { id: { not: id } },
      data: { isActive: false },
    });
  }

  return mainPrisma.serviceSection.update({
    where: { id },
    data: {
      sectionLabel: payload.sectionLabel,
      title: payload.title,
      description: payload.description,
      buttonText: payload.buttonText,
      isActive: payload.isActive,

      services: payload.services
        ? {
            deleteMany: {},
            create: payload.services,
          }
        : undefined,
    },
    include: {
      services: true,
    },
  });
};

export const ServiceSectionService = {
  createServiceSection,
  getServiceSection,
  updateServiceSection,
};