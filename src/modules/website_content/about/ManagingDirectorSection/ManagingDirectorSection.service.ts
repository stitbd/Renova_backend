import { mainPrisma } from "../../../../databases/prisma";

const createManagingDirectorSection = async (
  payload: any
) => {
  if (payload.isActive === true) {
    await mainPrisma.managingDirectorSection.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.managingDirectorSection.create({
    data: payload,
  });
};

const getManagingDirectorSection = async () => {
  return mainPrisma.managingDirectorSection.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateManagingDirectorSection = async (
  id: string,
  payload: any
) => {
  const existingSection =
    await mainPrisma.managingDirectorSection.findUnique({
      where: { id },
    });

  if (!existingSection) {
    throw new Error(
      "Managing director section not found"
    );
  }

  if (payload.isActive === true) {
    await mainPrisma.managingDirectorSection.updateMany({
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

  return mainPrisma.managingDirectorSection.update({
    where: { id },
    data: payload,
  });
};

const deleteManagingDirectorSection = async (
  id: string
) => {
  const existingSection =
    await mainPrisma.managingDirectorSection.findUnique({
      where: { id },
    });

  if (!existingSection) {
    throw new Error(
      "Managing director section not found"
    );
  }

  return mainPrisma.managingDirectorSection.delete({
    where: { id },
  });
};

export const ManagingDirectorSectionService = {
  createManagingDirectorSection,
  getManagingDirectorSection,
  updateManagingDirectorSection,
  deleteManagingDirectorSection,
};