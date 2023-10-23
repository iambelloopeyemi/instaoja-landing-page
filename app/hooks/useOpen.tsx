"use client";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export function useOpen() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Context must be used inside the context provide");
  }
  return context;
}
