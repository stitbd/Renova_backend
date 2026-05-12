import express from "express";
import { ContactSectionController } from "./contact.controller";


const router = express.Router();

router.post(
    "/create",
    ContactSectionController.createContactSection
);

router.get(
    "/get",
    ContactSectionController.getContactSection
);

router.patch(
    "/update/:id",
    ContactSectionController.updateContactSection
);

router.delete(
    "/delete/:id",
    ContactSectionController.deleteContactSection
);

export const ContactSectionRoutes = router;