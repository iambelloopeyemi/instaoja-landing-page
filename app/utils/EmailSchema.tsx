import { object, string, ObjectSchema } from "yup";

interface EmailSchemaProp {
  email: string | undefined;
}

export const EmailSchema: ObjectSchema<EmailSchemaProp> = object({
  email: string()
    .email()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid Email Address"),
});
