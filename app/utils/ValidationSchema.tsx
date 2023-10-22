import { object, string, ObjectSchema } from "yup";
import { EmailSchemaProp } from "./Props";

export const EmailSchema: ObjectSchema<EmailSchemaProp> = object({
  from_email: string()
    .email()
    .matches(
      /^(?=.*@(gmail|yahoo|outlook)\.)[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Invalid Email Address"
    ),
});
