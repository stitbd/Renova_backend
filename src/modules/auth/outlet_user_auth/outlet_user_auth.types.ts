import { z } from "zod";
import { loginValidationSchema } from "./outlet_user_auth.validation";



export type LoginInput = z.infer<
  typeof loginValidationSchema
>;