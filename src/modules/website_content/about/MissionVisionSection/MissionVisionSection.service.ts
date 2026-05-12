import { mainPrisma } from "../../../../databases/prisma";

const createMissionVisionSection = async (payload: any) => {
    if (payload.isActive === true) {
        await mainPrisma.missionVisionSection.updateMany({
            data: {
                isActive: false,
            },
        });
    }

    return mainPrisma.missionVisionSection.create({
        data: payload,
    });
};

const getMissionVisionSection = async () => {
    return mainPrisma.missionVisionSection.findFirst({
        where: {
            isActive: true,
        },
    });
};

const updateMissionVisionSection = async (
    id: string,
    payload: any
) => {
    const existingSection =
        await mainPrisma.missionVisionSection.findUnique({
            where: { id },
        });

    if (!existingSection) {
        throw new Error("Mission & Vision section not found");
    }

    if (payload.isActive === true) {
        await mainPrisma.missionVisionSection.updateMany({
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

    return mainPrisma.missionVisionSection.update({
        where: { id },
        data: payload,
    });
};

const deleteMissionVisionSection = async (
    id: string
) => {
    const existingSection =
        await mainPrisma.missionVisionSection.findUnique({
            where: { id },
        });

    if (!existingSection) {
        throw new Error("Mission & Vision section not found");
    }

    return mainPrisma.missionVisionSection.delete({
        where: { id },
    });
};

export const MissionVisionSectionService = {
    createMissionVisionSection,
    getMissionVisionSection,
    updateMissionVisionSection,
    deleteMissionVisionSection,
};