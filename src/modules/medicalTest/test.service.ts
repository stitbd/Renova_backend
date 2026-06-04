
import { mainPrisma } from "../../databases/prisma";
import { Prisma } from "../../generated/appointment-client";
import { CreateTestInput, UpdateTestInput } from "./test.validation";

const createTest = async (payload: CreateTestInput) => {
  return mainPrisma.diagnosticTest.create({
    data: {
      name: payload.name,
      code: payload.code,
      price: new Prisma.Decimal(payload.price),
      description: payload.description,
      isActive: payload.isActive ?? true,
    },
  });
};

const getAllTests = async () => {
  return mainPrisma.diagnosticTest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getTestById = async (id: string) => {
  const test = await mainPrisma.diagnosticTest.findUnique({
    where: { id },
  });

  if (!test) {
    throw new Error("Test not found");
  }

  return test;
};

const updateTest = async (id: string, payload: UpdateTestInput) => {
  await getTestById(id);

  return mainPrisma.diagnosticTest.update({
    where: { id },
    data: {
      name: payload.name,
      code: payload.code,
      price:
        payload.price !== undefined
          ? new Prisma.Decimal(payload.price)
          : undefined,
      description: payload.description,
      isActive: payload.isActive,
    },
  });
};

const deleteTest = async (id: string) => {
  await getTestById(id);

  return mainPrisma.diagnosticTest.update({
    where: { id },
    data: {
      isActive: false,
    },
  });
};

export const TestService = {
  createTest,
  getAllTests,
  getTestById,
  updateTest,
  deleteTest,
};