import { mainPrisma } from "../../../../databases/prisma";

const createContactSection = async (
  payload: any
) => {
  if (payload.isActive === true) {
    await mainPrisma.contactSection.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.contactSection.create({
    data: payload,
  });
};

const getContactSection = async () => {
  return mainPrisma.contactSection.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateContactSection = async (
  id: string,
  payload: any
) => {
  const existingSection =
    await mainPrisma.contactSection.findUnique({
      where: { id },
    });

  if (!existingSection) {
    throw new Error("Contact section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.contactSection.updateMany({
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

  return mainPrisma.contactSection.update({
    where: { id },
    data: payload,
  });
};

const deleteContactSection = async (
  id: string
) => {
  const existingSection =
    await mainPrisma.contactSection.findUnique({
      where: { id },
    });

  if (!existingSection) {
    throw new Error("Contact section not found");
  }

  return mainPrisma.contactSection.delete({
    where: { id },
  });
};

export const ContactSectionService = {
  createContactSection,
  getContactSection,
  updateContactSection,
  deleteContactSection,
};