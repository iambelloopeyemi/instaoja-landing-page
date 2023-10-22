"use client";
import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { valueProp } from "../utils/Props";

export const ModalContext = createContext<valueProp | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isSuccessful, setSuccessful] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, setOpen, isSuccessful, setSuccessful }}
    >
      {children}
    </ModalContext.Provider>
  );
}
