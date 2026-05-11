import { mainPrisma } from "../../../../databases/prisma";

const createAppointmentSection = async (payload: any) => {
    if (payload.isActive === true) {
        await mainPrisma.appointmentSection.updateMany({
            data: {
                isActive: false,
            },
        });
    }

    return mainPrisma.appointmentSection.create({
        data: payload,
    });
};

const getAppointmentSection = async () => {
    return mainPrisma.appointmentSection.findFirst({
        where: {
            isActive: true,
        },
    });
};

const updateAppointmentSection = async (
    id: string,
    payload: any
) => {
    const existingAppointmentSection =
        await mainPrisma.appointmentSection.findUnique({
            where: { id },
        });

    if (!existingAppointmentSection) {
        throw new Error("Appointment section not found");
    }

    if (payload.isActive === true) {
        await mainPrisma.appointmentSection.updateMany({
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

    return mainPrisma.appointmentSection.update({
        where: { id },
        data: payload,
    });
};

export const AppointmentSectionService = {
    createAppointmentSection,
    getAppointmentSection,
    updateAppointmentSection,
};