import express from "express";
import { validateRequest } from "../../utils/validateRequest";

import { createDoctorDocumentSchema, updateDoctorDocumentSchema, updateDoctorDocumentVerificationSchema } from "./doctor_documents.validation";
import { doctorDocumentController } from "./doctor_documents.controller";

const router = express.Router();


router.post(
  "/documents",
  validateRequest(createDoctorDocumentSchema),
  doctorDocumentController.createDocument
);

router.get(
  "/:doctorId/documents",
  doctorDocumentController.getDocumentsByDoctorId
);

router.patch(
  "/documents/:id",
  validateRequest(updateDoctorDocumentSchema),
  doctorDocumentController.updateDocument
);

router.patch(
  "/documents/:id/verification",
  validateRequest(updateDoctorDocumentVerificationSchema),
  doctorDocumentController.updateDocumentVerification
);

router.delete(
  "/documents/:id",
  doctorDocumentController.deleteDocument
);


export const doctorDocumentRoutes = router;