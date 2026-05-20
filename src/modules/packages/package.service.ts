
import { mainPrisma } from "../../databases/prisma";
import { Prisma } from "../../generated/main-client";
import {
  CreatePackageInput,
  UpdatePackageInput,
} from "./package.validation";

const createPackage = async (payload: CreatePackageInput) => {
  const tests = await mainPrisma.diagnosticTest.findMany({
    where: {
      id: {
        in: payload.testIds,
      },
      isActive: true,
    },
  });

  if (tests.length !== payload.testIds.length) {
    throw new Error("One or more tests are invalid or inactive");
  }

  const totalPrice = tests.reduce((sum, test) => {
    return sum + Number(test.price);
  }, 0);

  if (payload.discountedPrice > totalPrice) {
    throw new Error("Discounted price cannot be greater than total price");
  }

  return mainPrisma.$transaction(async (tx) => {
    const createdPackage = await tx.diagnosticPackage.create({
      data: {
        packageName: payload.packageName,
        subtitle: payload.subtitle,
        badgeText: payload.badgeText,
        totalPrice: new Prisma.Decimal(totalPrice),
        discountedPrice: new Prisma.Decimal(payload.discountedPrice),
        isActive: payload.isActive ?? true,
      },
    });

    await tx.packageTest.createMany({
      data: payload.testIds.map((testId) => ({
        packageId: createdPackage.id,
        testId,
      })),
      skipDuplicates: true,
    });

    return tx.diagnosticPackage.findUnique({
      where: {
        id: createdPackage.id,
      },
      include: {
        packageTests: {
          include: {
            test: true,
          },
        },
      },
    });
  });
};

const getAllPackages = async () => {
  return mainPrisma.diagnosticPackage.findMany({
    include: {
      packageTests: {
        include: {
          test: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getPackageById = async (id: string) => {
  const diagnosticPackage = await mainPrisma.diagnosticPackage.findUnique({
    where: { id },
    include: {
      packageTests: {
        include: {
          test: true,
        },
      },
    },
  });

  if (!diagnosticPackage) {
    throw new Error("Package not found");
  }

  return diagnosticPackage;
};

const updatePackage = async (id: string, payload: UpdatePackageInput) => {
  await getPackageById(id);

  let totalPrice: number | undefined;

  if (payload.testIds) {
    const tests = await mainPrisma.diagnosticTest.findMany({
      where: {
        id: {
          in: payload.testIds,
        },
        isActive: true,
      },
    });

    if (tests.length !== payload.testIds.length) {
      throw new Error("One or more tests are invalid or inactive");
    }

    totalPrice = tests.reduce((sum , test) => sum + Number(test.price), 0);

    if (
      payload.discountedPrice !== undefined &&
      payload.discountedPrice > totalPrice
    ) {
      throw new Error("Discounted price cannot be greater than total price");
    }
  }

  return mainPrisma.$transaction(async (tx) => {
    const updatedPackage = await tx.diagnosticPackage.update({
      where: { id },
      data: {
        packageName: payload.packageName,
        subtitle: payload.subtitle,
        badgeText: payload.badgeText,
        totalPrice:
          totalPrice !== undefined ? new Prisma.Decimal(totalPrice) : undefined,
        discountedPrice:
          payload.discountedPrice !== undefined
            ? new Prisma.Decimal(payload.discountedPrice)
            : undefined,
        isActive: payload.isActive,
      },
    });

    if (payload.testIds) {
      await tx.packageTest.deleteMany({
        where: {
          packageId: id,
        },
      });

      await tx.packageTest.createMany({
        data: payload.testIds.map((testId) => ({
          packageId: id,
          testId,
        })),
        skipDuplicates: true,
      });
    }

    return tx.diagnosticPackage.findUnique({
      where: {
        id: updatedPackage.id,
      },
      include: {
        packageTests: {
          include: {
            test: true,
          },
        },
      },
    });
  });
};

const deletePackage = async (id: string) => {
  await getPackageById(id);

  return mainPrisma.diagnosticPackage.delete({
    where: { id },
  });
};

export const PackageService = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};