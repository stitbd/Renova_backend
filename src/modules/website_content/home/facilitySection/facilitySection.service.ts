import { mainPrisma } from "../../../../databases/prisma";

const createFacilitySection = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.facilitySection.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.facilitySection.create({
    data: payload,
  });
};

const getFacilitySection = async () => {
  return mainPrisma.facilitySection.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateFacilitySection = async (
  id: string,
  payload: any
) => {
  const existingFacilitySection =
    await mainPrisma.facilitySection.findUnique({
      where: { id },
    });

  if (!existingFacilitySection) {
    throw new Error("Facility section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.facilitySection.updateMany({
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

  return mainPrisma.facilitySection.update({
    where: { id },
    data: payload,
  });
};

export const FacilitySectionService = {
  createFacilitySection,
  getFacilitySection,
  updateFacilitySection,
};