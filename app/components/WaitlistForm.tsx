"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ValidationError } from "yup";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../utils/EnvironmentVariables";
import { EmailSchema } from "../utils/EmailSchema";

interface ValidationErrorsProps {
  [key: string]: string | undefined;
  email?: string;
}

const initialValidationErrors: ValidationErrorsProps = {
  email: "",
};

export default function WaitlistForm() {
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
        from_email: `Here is my email ${email}`,
      };
      await EmailSchema.validate({ email }, { abortEarly: false });
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      }
      // console.log(templateParams);
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
      <form onSubmit={sendEmail} className="flex items-center gap-5">
        <div>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmailChange}
            className="block outline-0 border border-olive p-1 text-sm text-clip"
          />
          {validationErrors.email && (
            <p className="text-red-500 text-sm text-left">
              {validationErrors.email}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-olive px-5 py-2.5 rounded-full hover:scale-105 text-white font-bold"
          >
            Join Waitlist
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
