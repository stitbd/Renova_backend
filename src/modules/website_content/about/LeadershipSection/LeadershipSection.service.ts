import { mainPrisma } from "../../../../databases/prisma";

const createLeadershipSection = async (
  payload: any
) => {
  if (payload.isActive === true) {
    await mainPrisma.leadershipSection.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.leadershipSection.create({
    data: payload,
  });
};

const getLeadershipSection = async () => {
  return mainPrisma.leadershipSection.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateLeadershipSection = async (
  id: string,
  payload: any
) => {
  const existingSection =
    await mainPrisma.leadershipSection.findUnique({
      where: { id },
    });

  if (!existingSection) {
    throw new Error("Leadership section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.leadershipSection.updateMany({
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

  return mainPrisma.leadershipSection.update({
    where: { id },
    data: payload,
  });
};

const deleteLeadershipSection = async (
  id: string
) => {
  const existingSection =
    await mainPrisma.leadershipSection.findUnique({
      where: { id },
    });

  if (!existingSection) {
    throw new Error("Leadership section not found");
  }

  return mainPrisma.leadershipSection.delete({
    where: { id },
  });
};

export const LeadershipSectionService = {
  createLeadershipSection,
  getLeadershipSection,
  updateLeadershipSection,
  deleteLeadershipSection,
};