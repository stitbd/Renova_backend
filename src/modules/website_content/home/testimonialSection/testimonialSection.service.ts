import { mainPrisma } from "../../../../databases/prisma";

const createTestimonialSection = async (payload: any) => {
  if (payload.isActive === true) {
    await mainPrisma.testimonialSection.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  return mainPrisma.testimonialSection.create({
    data: payload,
  });
};

const getTestimonialSection = async () => {
  return mainPrisma.testimonialSection.findFirst({
    where: {
      isActive: true,
    },
  });
};

const updateTestimonialSection = async (
  id: string,
  payload: any
) => {
  const existingTestimonialSection =
    await mainPrisma.testimonialSection.findUnique({
      where: { id },
    });

  if (!existingTestimonialSection) {
    throw new Error("Testimonial section not found");
  }

  if (payload.isActive === true) {
    await mainPrisma.testimonialSection.updateMany({
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

  return mainPrisma.testimonialSection.update({
    where: { id },
    data: payload,
  });
};

export const TestimonialSectionService = {
  createTestimonialSection,
  getTestimonialSection,
  updateTestimonialSection,
};