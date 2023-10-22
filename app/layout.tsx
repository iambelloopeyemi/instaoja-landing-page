import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { montserrat } from "@/app/utils/Fonts";
import { ModalProvider } from "./contexts/ModalContext";

export const metadata: Metadata = {
  title: "InstaOja",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} text-jet relative`}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
