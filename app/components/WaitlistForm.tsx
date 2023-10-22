"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ValidationError } from "yup";
import { EmailSchema } from "../utils/ValidationSchema";
import { ValidationErrorsProps, WaitlistFormProp } from "../utils/Props";
import Button from "./Button";

const EMAILJS_SERVICE_ID = "service_l5ogsxk";
const EMAILJS_TEMPLATE_ID = "template_slld4ur";
const EMAILJS_PUBLIC_KEY = "I1_eDRaEfPm_GQHWW";

const initialValidationErrors: ValidationErrorsProps = {
  from_email: "",
};

export default function WaitlistForm({
  setOpen,
  setSuccessful,
  isModal,
  checkModal,
}: WaitlistFormProp) {
  const [email, setEmail] = useState<string>("");
  const [validationErrors, setValidationErrors] =
    useState<ValidationErrorsProps>(initialValidationErrors);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const templateParams = {
        from_email: email,
      };
      await EmailSchema.validate(templateParams, { abortEarly: false });
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      // console.log(templateParams);
      if (response) {
        setOpen(false);
        setSuccessful((previousState) => !previousState);
      }
      toast.success("Email sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors: ValidationErrorsProps = {};
        error.inner.forEach((err: ValidationError) => {
          if (err.path) {
            errors[err.path] = err.message;
          }
        });
        setValidationErrors(errors);
        setTimeout(() => {
          setValidationErrors(initialValidationErrors);
        }, 5000);
      }
      // console.error("Failed to send email.", error);
      toast.error("Failed to send email.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setEmail("");
    }
  };

  return (
    <>
      <form
        onSubmit={sendEmail}
        className={`${
          isModal ? "flex flex-col" : "flex default:flex-col tablet:flex-row"
        } items-center gap-4`}
      >
        <div className="relative">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmailChange}
            className="block outline-0 border border-olive rounded-lg px-2 py-1 text-sm text-clip placeholder:text-center"
          />
          {validationErrors.from_email && (
            <p className="absolute text-red-500 text-xs text-left">
              {validationErrors.from_email}
            </p>
          )}
        </div>
        <div>
          <Button type="submit" checkModal={checkModal}>
            Submit
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
