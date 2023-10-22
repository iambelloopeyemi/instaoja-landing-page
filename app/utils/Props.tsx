import type { Dispatch, SetStateAction } from "react";

// Button
export type ButtonProp = {
  type?: "button" | "submit" | "reset";
  toggleModal?: () => void;
  checkModal?: "noModal" | "modal";
  children: string;
};

// ModalContext
export type valueProp = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isSuccessful: boolean;
  setSuccessful: Dispatch<SetStateAction<boolean>>;
};

// WaitlistForm
export type WaitlistFormProp = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSuccessful: Dispatch<SetStateAction<boolean>>;
  isModal?: boolean;
  checkModal?: "noModal" | "modal";
};

export type ValidationErrorsProps = {
  [key: string]: string | undefined;
  from_email?: string;
};

// ValidationSchema
export type EmailSchemaProp = {
  from_email: string | undefined;
};
