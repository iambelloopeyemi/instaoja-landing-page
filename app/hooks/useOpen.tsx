"use client";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export function useOpen() {
  const context = useContext(ModalContext);
  return context;
}
