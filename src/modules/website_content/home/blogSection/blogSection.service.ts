import { mainPrisma } from "../../../../databases/prisma";

const createBlogSection = async (payload: any) => {
    if (payload.isActive === true) {
        await mainPrisma.blogSection.updateMany({
            data: {
                isActive: false,
            },
        });
    }

    return mainPrisma.blogSection.create({
        data: payload,
    });
};

const getBlogSection = async () => {
    return mainPrisma.blogSection.findFirst({
        where: {
            isActive: true,
        },
    });
};

const updateBlogSection = async (
    id: string,
    payload: any
) => {
    const existingBlogSection =
        await mainPrisma.blogSection.findUnique({
            where: { id },
        });

    if (!existingBlogSection) {
        throw new Error("Blog section not found");
    }

    if (payload.isActive === true) {
        await mainPrisma.blogSection.updateMany({
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

    return mainPrisma.blogSection.update({
        where: { id },
        data: payload,
    });
};

export const BlogSectionService = {
    createBlogSection,
    getBlogSection,
    updateBlogSection,
};